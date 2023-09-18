## Intro

This is a tool to derive Near private key and Address from a mnemonic phrase using the Omni MM derivation path.

## Installation

Clone down the repository

```bash
git clone git@github.com:stakekit/near-pk-export.git
```

Select the node version
```bash
nvm use
```

Then
```bash
yarn install
```
to install dependencies and patch.

## Usage

Add your mnemonic phrase to the `MNEMONIC` constant in `src/main.ts`

Then run 

```bash
yarn ts-node src/main.ts
```

The private key and account id should be logged in the console. Example:

```
Private key: xxxx
Account id (Address): xxx
```
