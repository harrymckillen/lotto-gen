# Lotto Number Generate

## Why?
Why not?

## What?
A stupid node tool to generate a random selection of numbers for the Euromillions and Irish Lottery games.

## How?

1. Clone the repo
2. `npm install`

## Usage Examples
* `node index.js -t e -l 4`
	* Outputs 4 lines for the Euromillions
* `node index.js -t euro -l 4`
	* Outputs 4 lines for the Euromillions
* `node index.js -t i -l 2`
	* Outputs 2 lines for the Irish Lottery
* `node index.js -t irish -l 2`
	* Outputs 2 lines for the Irish Lottery

* `node index.js -t i`
	* Also outputs 2 lines for the Irish Lottery
* `node index.js -t irish`
	* Also outputs 2 lines for the Irish Lottery

## Help

```
Usage: index [options]

Options:
  -v, --version           output the version number
  -d, --debug             Debug.
  -t, --type <lottotype>  i or irish, for irish lottery, e or euro for euromillions lottery
  -l, --lines <numberof>  number of lines to generate
  -h, --help              output usage information

```