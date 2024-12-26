<h1 align="center">Blueprint 2025 Splash</h1>

<div align="center">
	<a href="#quick-start">Quick Start</a>
  <span> • </span>
    	<a href="#overview">Overview</a>
</div> 

## Quick Start

If you just want to quickly copy and paste commands and get started working:

```sh
git clone https://github.com/techx/blueprint-splash-2025.git
cd blueprint-splash-2025
yarn install
yarn dev
```

Make a new branch in the format `[name]/[section]`.
- e.g. "annie/about"
- If you are working on a team consider working on separate parts of the section or using [VS Code Live Share](https://code.visualstudio.com/learn/collaboration/live-share)

## Overview

Begin by cloning this repository.

```sh
$ git clone https://github.com/techx/blueprint-splash-2025.git
```

### Requirements

| Requirement | Version    |
|-------------|------------|
| Node.js     | `>18.10.0` |
| Yarn        | `>1`       |

Run the following commands to check your currently installed versions:

```sh
$ node --version
$ yarn --version
```

There are no guarantees other versions of specified requirements will work with Splash.

**How to download the latest releases:**
- Node.js: https://nodejs.org/en/download/
- Yarn: https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable

### Installation + Runnning

Make sure you install the development dependencies by using the **yarn** package manager. Do not use npm only `yarn.lock` has the correct version of all the dependencies.

```sh
$ yarn install
```

Now you can start the development server, which is powered by [Vite](https://vitejs.dev/). 

```sh
$ yarn dev
```

### Where is Everything?
- 📁 **components/sections** - contains all the main sections of splash (check [go/splash-gsd](https://go.hackmit.org/splash-gsd) to see who signed for which section)
- 📁 **public/images** - all the assets from mkt, sorted into appropriate section folders

### Contributing

Make a new branch in the format `[name]/[section]`.
- e.g. "annie/about"
- If you are working on a team consider working on separate parts of the section or using [VS Code Live Share](https://code.visualstudio.com/learn/collaboration/live-share)
