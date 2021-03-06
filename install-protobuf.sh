#!/bin/bash

wget https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOBUF_VERSION}/protobuf-all-${PROTOBUF_VERSION}.tar.gz

tar -xzf protobuf-all-${PROTOBUF_VERSION}.tar.gz

pushd protobuf-${PROTOBUF_VERSION}
./configure --prefix=/usr
make
sudo make install
ls -l
popd