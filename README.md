# Sandbox-Webui

Web Frontend to calibrate our Kinect Project.
CCFR

# Configuration
The only thing you can currently tweak is the api path. By default with post our new calibration JSON to `/api/calibration`. You can change the `/api` to anything you want, just change the variable in `src/config.js` and don't forget to rebuild the webui.`


# How to build

- Make sure you have node at least in v9.3.0  and npm in v5.6.0. Older might work, not tested.
- Clone this repo, cd into repo folder.
- Run `npm install --only=production` to download dependencies. You can ignore the "--only=production" if you also want development dependencies. This might take a while. Don't ask.
- Run `npm run build` to build latest "productional" static files.
- Copy everything from `./build` into your webroot.

# Development

- To get started do an `npm install` in case you haven't done that already. "--only-production" is NOT enough, you also need development dependencies.
- Run `npm start` to launch a development server and start hacking around in `./src`. There's everything you need.
- To run unit tests, do an `npm test`.
- Want to build production files? `npm run build`
- Happy Hacking

# FAQ

### Why is a build folder in your repository? Isn't this bad practive?

Yup it is. But we maybe want to submodule this repo into the main repo,
so that everything is in one place and you only have to clone one repo
to have all the sources but don't npm to just build the webui to calibrate
your kinect cameras.

### Why is there a .js.map file bigger than >7mb in our build files?

It's there for debugging reasons. The javascript code get's minified and transpiled, to still be able to figure out which line of code is problematic, we need
those .map file. As long as you don't want to debug any code in production, feel free to not copy that file in your webroot.
