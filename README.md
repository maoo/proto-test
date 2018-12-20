# proto-test

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