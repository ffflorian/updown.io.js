# updown.io.js [![Build Status](https://api.travis-ci.org/ffflorian/updown.io.js.svg?branch=master)](https://travis-ci.org/ffflorian/updown.io.js/) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=ffflorian/updown.io.js)](https://dependabot.com)

An [updown.io](https://updown.io) API client. For a documentation on the API see https://updown.io/api.

## Usage

A complete documentation is available at https://ffflorian.github.io/updown.io.js/.

### Installation

Run `yarn add updown.io` or `npm install updown.io`.

### Example

```ts
import {UpdownIO} from 'updown.io';

const updownIO = new UpdownIO('my-api-key'); // API key is only required for checks API

UpdownIO.api.checks.getChecks()
  .then(checks => {
    //
  })

updownIO.api.nodes.getNodes()
  .then(nodes => {
    // ...
  })
```

## Build and test

```
yarn
yarn test
```
