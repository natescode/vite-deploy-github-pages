# vite-deploy-github-pages
Quick and simple deployment method for vite projects to GH pages. Mostly for my students to keep in simple. 

## Create a Vite project

`npm create vite@latest`

## Update vite.config

We'll make Vite build the static site to a `docs` folder for github pages instead of `dist`.

```
build:{
  outDir:"docs"
  }
```

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

!["./images/ghpages_settings_1.jpg"]


