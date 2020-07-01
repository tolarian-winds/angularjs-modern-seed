# angularjs-modern-seed
I really enjoy(ed) developing in AngularJS, as many others do. I like Angular (>=2) too, but found the transition sometimes challenging, mainly for the 2 reasons below.

This project is meant for developers who wish to transition from AngularJS to Angular but: 
- are a bit intimidated by Angular and want the change to be easier to get used to, or
- still need to develop in AngularJS but enjoy the Angular structure.

## Run Application
Requires gruntjs to work, to install, run `npm install -g grunt-cli`.

Run `grunt` in terminal. 
This should start the application with the default modules and components, as well as routing.

## Application Structure
Bootstrap v4 (CDN) is included by default. You can remove it from `src/index.html` as necessary. 
To remove, simply remove references under `<!-- Bootstrap -->`.

### Source (src)
- main.js
  - angularjs
  - app.module (parent module that orchestrates all application modules)
    - angular-route
    - core.module (core application module)
      - [core.module child components]
      - core-routing.module
    - app.component
    - app-routing.module

### Build (dist)
- index.html
  - styles.bundle.css
  - bundle.js

## Grunt
GruntJS is setup for this project to automate tasks.

### Dev
Run `grunt` will create `dist/bundle.js` not minified, this speeds up the watch process.
Running `grunt` it will take care of the compilation of JS/SCSS and setup a server with watch.

### Build
Run `grunt build` will create `dist/bundle.js` as minified JS, this is smaller for release.

### Browserify
Browserify compiles all the JS together: `src/main.js` --> `dist/bundle.js`

### Sass
Sass compiles all the styles together: `styles.scss` --> `dist/styles.bundle.css`
The compilation follows Sass documentation of naming partials with `_`prefix, and importing them with `@import`.

