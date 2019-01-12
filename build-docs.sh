#!/bin/bash

for filepath in ./library/*.proto; do
    filename=$(basename $filepath)
    FILE_NAME=${filename%.*}
    echo "Running: ${PROTOC_CMD_PREFIX} \
    --plugin="protoc-gen-doc=${PROTOC_GEN_DOCS_PATH}" \
    --doc_opt=markdown,${FILE_NAME}.md \
    --doc_out=${DOCS_OUT_DIR} $filepath"
    ${PROTOC_CMD_PREFIX} \
    --plugin="protoc-gen-doc=${PROTOC_GEN_DOCS_PATH}" \
    --doc_opt=markdown,${FILE_NAME}.md \
    --doc_out=${DOCS_OUT_DIR} $filepath
done