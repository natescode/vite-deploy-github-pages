# vite-deploy-github-pages

Quick and simple deployment method for vite projects to GH pages. Mostly for my students to keep it simple. 

## Create a Vite project

`npm create vite@latest`

## Update vite.config

We'll make Vite build the static site to a `docs` folder for github pages instead of `dist`.

```
build:{
  outDir:"docs"
  }
```

We also need to tell Vite that the root of our site is NOT `natescode.github.io` but `natescode.github.io/vite-deploy-github-pages`.

```
base:"/vite-deploy-github-pages/"
```

look at the `vite.config.js` file in this project for an example. Just update your URL accordingly.

## Run vite build

this will generate the `docs` folder

`npm run build`

## Test the build

To run a simple static file server just run this from the root of your app

`npx serve docs`


## Commit and push

`git add -A && git commit -m "docs" && git push`

the `&&` just adds all the commands into one line to do them together.

## Update Github pages settings

Select your `main` or `master` branch and be sure to select `docs` **NOT** `root`.

![Github pages settings image]("./images/ghpages_settings1.png")

## Updating changes

Again, this is meant to be extremly simple for students:no YAML files, github actions or separate branches needed. You'll have to make your changes, run `npm run build`, add 
the changed files to git and push each time. The deployment will automatically update after a few minutes.

## ENJOY!
