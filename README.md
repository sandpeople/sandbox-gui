# Sandbox-Webui

Web Frontend to calibrate our Kinect Project.
CCFR

# How to build

- Make sure you have node at least in v9.3.0  and npm in v5.6.0. Older might work, not tested.
- Clone this repo, cd into repo folder.
- Run `npm install` to download dependencies. This might take a while. Don't ask.
- Run `npm run build` to build latest "productional" static files.
- Copy everything from `./build` into your webroot.

# FAQ

- Why is a build folder in your repository? Isn't this bad practive?

Yup it it. But we maybe want to submodule this repo into the main repo,
so that everything is in one place and you only have to clone one repo
to have all the sources but don't npm to just build the webui to calibrate
your kinect cameras.
