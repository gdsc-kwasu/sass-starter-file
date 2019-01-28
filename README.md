# Introduction
This repository is basically meant to lift off the worries of having to
compile down our sass files during these introductory classes. Later on, we will be exposing techniques
for compiling our own assets, individually.

## Installation
- Clone this repository
```git
git clone https://github.com/kwasu-ng/sass-starter-file
```
- Change directory and run npm install
```git
cd sass-starter-file && npm install
```

- Start compiling down your assets
```npm
npm run development
```

## Commands
The commands available with npm:
- Development
```npm
npm run development
```
will compile down your assets with comments and all the pretty whitespaces. Not really efficient for production.

- Watch
```npm
npm run watch
```
You don't have to run command every time you make changes, this will automatically watch your
files for changes and re-compile them.

- Production OR prod
```npm
npm run prod
```
Running this command will compress your assets during the compilation. The result compilation will be minified, i.e
all whitespace will be stripped, and all comments removed.