# CoVID-19 Tracker

A shout out to [Wes Bos](https://github.com/wesbos) for putting out the tutorial!

## Setting up ESLint

Create empty directory for your project.

Run `npm init -y` to create a **package.json** file.

Install _ESLint_ from Wes Bos if you'd like.

Run `npm -i next react react-dom styled-components --save`.

Make directories **pages, components, src, utils**.

Create an **index.js** file in _pages directory_.

In _package.json_ change start script to `"start": "next"`.

Run `npm start`.

## Setting up GH-Pages

After running _Hooks Setup_ run `npm install gh-pages --save-dev`

Create your website (bigschatz.github.io/_project_) and add it as a
_homepage_ property in package.json:

```json
  "homepage": "https://bigschatz.github.io/<project>"
```

Add these scripts to _package.json_ file

```json
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
```

Run `npm run deploy`
