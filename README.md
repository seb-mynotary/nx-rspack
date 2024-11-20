# NxRspack

This repository contains the minimal reproduction for bugs encounter with nx and rspack in a react application.

## Bug 1 - File replacement ignored

An attribute `fileReplacement` has been added to [project.json](./apps/demo/project.json) for the `production` 
configuration.
The expected output should display the value in the [env.production.ts](apps/demo/src/env.production.ts) file.

## Bug 2 - Environnement variables not being replaced in index.html

[.env](.env) file contains a variable name `VERSION` and should be replace in [index.html](apps/demo/src/index.html)
in the meta tag.


## Bug 3 - main.css is not hashed

The `main.css` file is not hashed in the `production` configuration.


## Steps to reproduce
`nx run demo:serve:production` and look at the generated html in the browser.
`cat dist/apps/demo/index.html | grep VERSION`
`cat dist/apps/demo/index.html | grep main.css`
