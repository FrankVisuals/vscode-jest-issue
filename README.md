# Issue With vscode-jest

This repository shows an issue with the vscode jest extension.

## Problem Description

When running an individual test via the "Play" button next to the `it` block, it executes all tests of the file. However, this only happens on first execution.

## Tested with

- node `16.19.0`
- macOs `13.2.1 (22D68)`

## Steps to Reproduce

- `npm install`
- open `test/example.test.ts`
- click "Play"-Button for the test `should calc sum of 1 + 1`
- will execute both tests

As described above, after this initial "error", it will work as expected. In order to reproduce it again, the tests state have to be resetted.