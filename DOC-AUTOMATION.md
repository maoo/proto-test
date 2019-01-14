# Doc automation proposal

The FINOS Financial Objects library requires a web interface to be built out of the protobuf definitions, which allows to:
- Easily browse, filter and share object definitions with a specific version or (ratification process) state
- Show object definitions details, including version and state

## How to implement version history on the site
Using GitHub Pages and Travis CI, it is possible to:
- Use GitHub Tags as a way to release new standard versions (ie 1.0 or 1.1)
- On every tag, generated md docs and push it to gh-pages (to keep version history)
- Every branch starting with "proposed_" also push docs to gh-pages
- On fo.github.io, publish all generated docs from gh-pages (all tags and "proposed_" branches)

## How to build an object directory page
- Build a YAML file that defines a tree of:
  - Object
    - versions
      - state
      - ... any other metadata
- Build a custom JS + HTML view, to deploy on fo.github.io root page, which allows listing, filtering (bookmarkable, so it can be shared via URL) and links to version-specific documentation