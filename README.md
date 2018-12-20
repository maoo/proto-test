# proto-test

Travis CI build - https://travis-ci.org/maoo/proto-test

This repo contains a spike to use Protocol Buffer in order to generate object libraries, across different languages, and documentation, starting from a common, human-readable set of definitions.

The set of ocject definitions is in the [library](library) folder.

The transformations are done continuously by Travis CI (see [.travis.yml](.travis.yml)), which also takes care of installing the `protoc` commandline tool.

## Features
- Using Protocol Buffer version 3 to define object models
- Generate TypeScript definitions and Java classes
- Generate a single Markdown file with object documentation (Travis CI integration is WIP)

## Open Questions
- General recommendation on version 2 VS 3
- Any best practice to work around inheritance absence?
- Style guide: does [the default one](https://developers.google.com/protocol-buffers/docs/style) suffice, or needs to be extended?
- [Nested types](https://developers.google.com/protocol-buffers/docs/proto3#nested): what are the use cases where nested types are better than simple composition?

## TODO
- Object definition:
  - Consolidate strategy on nested VS composed objects
  - Consolidate strategy on file imports
  - Consolidate styling guidelines
  - Define library of reusable primary types
- Developers (consumption):
  - Library packaging (NPM for TypeScript definitions, JAR for Java classes)
  - Code samples on how to connsume library packages
- Documentation:
  - Generate multiple Markdown files for each object definition
  - Implement lookup and discoverability logic in Jekyll/Javascript

## Test in Docker
```
# Prepare a docker environment
docker run -it ubuntu /bin/bash
apt-get update
apt-get install curl git make build-essential npm golang

# Configure protobuf installation
export PROTOBUF_VERSION=3.6.1
# export PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
export PROTOC_GEN_TS_PATH="/usr/local/lib/node_modules/ts-protoc-gen/bin/protoc-gen-ts"
export PROTOC_GEN_DOCS_PATH="/root/go/bin/protoc-gen-doc"
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
protoc --proto_path=./library --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --js_out="import_style=commonjs,binary:${TS_OUT_DIR}" --ts_out="service=true:${TS_OUT_DIR}" ./library/*.proto

# Build Java
protoc --proto_path=./library --java_out=${JAVA_OUT_DIR} ./library/*.proto

# Build documentation
go get -u github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc
protoc --proto_path=./library --plugin="protoc-gen-doc=${PROTOC_GEN_DOCS_PATH}" ./library/*.proto --doc_opt=markdown,specs.md --doc_out=${DOCS_OUT_DIR}
```