# proto-test

Travis CI build - https://travis-ci.org/maoo/proto-test

This repo contains a spike to use Protocol Buffer in order to generate object libraries, across different languages, and documentation, starting from a common, human-readable set of definitions.

The set of ocject definitions is in the [proto](proto) folder.

The transformations are done continuously by Travis CI (see [.travis.yml](.travis.yml)), which also takes care of installing the `protoc` commandline tool.

Check output samples in the [`output-samples`](output-samples) folder.

## Features
- Using Protocol Buffer version 3 to define object models
- Generate [TypeScript definitions](output-samples/model.d.ts) and [Java classes](output-samples/java)
- Runs a [Typescript `sample.ts`](sample.ts), which imports and uses the statically generated js (and ts) file
- Generate a single Markdown file with object documentation (Travis CI integration is WIP), see [`output-samples/specs.md`](output-samples/specs.md)

## ProtoBuf best practices

To get started with ProtoBuf, open the [language guide](https://developers.google.com/protocol-buffers/docs/proto3) and start editing the `.proto` files in the [proto](proto) folder.

Please take in consideration the [official styling docs](https://developers.google.com/protocol-buffers/docs/style) when writing .proto files; on top of it:
- Define fine-grained, reusable objects
- Use file and folder structure to define the .proto library
- Use one-per-file object definition on .proto files
- [Nested types](https://developers.google.com/protocol-buffers/docs/proto3#nested) are disencouraged, unless they're clearly owned by an outer type, possibly as an implementation detail of that type

ProtoBuf 3 doesn't provide any mechanism for inheritance; depending on the situation, the following options are available:
- Protobuf’s “oneof” – You have to redefine any fields that otherwise would have been in a base class. Also this doesn’t work well with collections (i.e. “repeated”) unless you wrap it (since you can’t directly make a “repeated oneof”)
- A single “wide” object that contains the UNION of all possible fields plus an enum field to discriminate between which type it is. And then some other data dictionary to tell you which fields will contain values depending on the type

## Editor

[VS Code](https://code.visualstudio.com) is a very good tool for editing, as it provides:
- GitHub integration
- ProtoBuf syntax editor plugin
- Built-in terminal, for CLI tasks

To configure it, open [settings.yml](https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations) and add:
```
"protoc": {
    "path": "/usr/local/bin/protoc",
    "options": [
        "--proto_path=${workspaceRoot}/proto",
    ]
}
```

## TODO
- Document how to extend objects, checkout [https://finosfoundation.atlassian.net/wiki/spaces/FO/pages/807763985/Proposed+Objects](https://finosfoundation.atlassian.net/wiki/spaces/FO/pages/807763985/Proposed+Objects)
- Library packaging (NPM for TypeScript definitions, JAR for Java classes)
- Implement index page and filtering of object docs

## Test in Docker
```
# Prepare a docker environment
docker run -it ubuntu /bin/bash
apt-get update
apt-get install wget curl git make build-essential npm golang

# Configure protobuf installation
export PROTOBUF_VERSION=3.6.1
# export PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
export PROTOC_GEN_TS_PATH="/usr/local/lib/node_modules/ts-protoc-gen/bin/protoc-gen-ts"
export PROTOC_GEN_DOCS_PATH="/root/go/bin/protoc-gen-doc"
# export PROTOC_GEN_DOCS_PATH="/Users/m/w/go/bin/protoc-gen-doc"
export TS_OUT_DIR="./target/generated/ts"
export JAVA_OUT_DIR="./target/generated/java"
export DOCS_OUT_DIR="./target/generated/docs"
export PATH=$PATH:~/protobuf-${PROTOBUF_VERSION}/src

# Download and unpack protobuf
wget https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOBUF_VERSION}/protobuf-all-${PROTOBUF_VERSION}.tar.gz
tar -xzf protobuf-all-${PROTOBUF_VERSION}.tar.gz

# Compile protobuf
pushd protobuf-${PROTOBUF_VERSION}
./configure --prefix=/usr
make
make install
popd

# Checkout test project
git clone https://github.com/maoo/proto-test.git
cd proto-test
mkdir -p $JAVA_OUT_DIR $TS_OUT_DIR $DOCS_OUT_DIR

# Build Typescript definitions
npm install -g ts-protoc-gen
protoc --proto_path=./proto --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --ts_out="service=true:${TS_OUT_DIR}" ./proto/*.proto

# Using protobufjs for Typescript
npm install protobufjs --save
chmod +x node_modules/protobufjs/cli/bin/*
./node_modules/protobufjs/cli/bin/pbjs -t static-module -w commonjs -o model.js ./proto/*.proto
node_modules/protobufjs/cli/bin/pbts -o model.d.ts model.js

# Build Java
protoc --proto_path=./proto --java_out=${JAVA_OUT_DIR} ./proto/*.proto

# Build documentation
go get -u github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc
protoc --proto_path=./proto --plugin="protoc-gen-doc=${PROTOC_GEN_DOCS_PATH}" ./proto/*.proto --doc_opt=markdown,specs.md --doc_out=${DOCS_OUT_DIR}
```