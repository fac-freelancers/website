# Freelance website

A website for the founders and coders freelance agency

### Quick start

To get started run:

`git clone https://github.com/foundersandcoders/freelance-website.git && cd freelance-website`

To see the current state of the site simply run:

`open index.html`

#### For Development

##### Setting up

Ensure you have harp installed:

Check with: `harp --version`

If not, install with:

`npm i -g harp`

##### Adding/Editing Static Content

----

IMPORTANT NOTE:

Anything edited outside of the `_harp` directory will not be compiled and will be removed on compile. Ensure everything modified is within the `_harp` directory

----

All of the static content for the site can be found in:

`_harp/public/_content`

After editing `cd` to outside of the `_harp` directory and run `_harp/build.sh`

##### Developing

Ignore all the files in the root, they are compiled by harp.

Any changes made outside of the `_harp` directory will be removed on compile.

The files to edit can all be found in the `_harp` and the `_harp/public` directory

After developing run the build.sh script in the `_harp` directory to compile your changes, run:

`_harp/build.sh`

(this will open your index.html in browser or you can do it manually with: `open index.html`)

##### Rules for developing

* Before you start any work, find an issue to work on or create one if you see an improvement to be made

* When you start working on an issue add the 'in-progress' label to it

* Only make a pull request to master if it closes an issue
