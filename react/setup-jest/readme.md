This document describes how to create a simple react
project that is able to do unit tests on components.


# setup a new project:

```
npx create-react-app jest-test
```

# install jest

The web will tell you *jest is already installed*; this is not true.

Open `package.json` and add `"jest": "^28.1.1"` to your dependencies.

**NOTE**: If there's a newer version of jest, setup that newer version.


# install testing library

```
yarn add --dev react-test-renderer

# for DOM testing
yarn add --dev @testing-library/react
```


# Run

Run your tests from a console with
```yarn test```

At this point you might still have problems executing from inside visual 
studio code. 
TODO: How to solve that problem?


# Setup babel

(Only use, if you can't get it to work)

Create file `.babelrc.js` in your root directory with the following 
content:

```
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {runtime: 'automatic'}],
  ],
};
```
