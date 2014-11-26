jungle-solidus-template
=====================

This is a [grunt-init](https://github.com/gruntjs/grunt-init) template for migrating CliqueTools sites to Solidus. After running `grunt-init` with this template, you can add assets and views that have been imported from CliqueTools to get started migrating a site.

## Using The Template

In order to use this template, you'll need the following:

- [Grunt.js](http://gruntjs.com) installed globally*
- [grunt-init](https://github.com/gruntjs/grunt-init) installed globally*
- Download/clone this repo
- (Optional) move/rename the template folder to `~/.grunt-init/jungle-solidus/`

Once this is done, you can init a new site by running one of the following commands:

```
grunt-init jungle-solidus
```

OR (if you haven't moved the template folder to `~/.grunt-init/jungle-solidus/`)...

```
grunt-init /path/to/template/folder/
```

## Gulp tasks

The template provides a basic set of [Gulp](http://gulpjs.com) tasks that will move `jungle-solidus` common assets into the assets folder (`gulp _move-common-assets`), start Solidus (`gulp _start-solidus`), and watch assets (`gulp _watch`) for changes and reload using Livereload. If you want to compile or minify assets, you can add Gulp tasks to `gulpfile.js`. You can also just run `gulp` to move assets, start Solidus and watch for asset changes, or `gulp build` to move assets.