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

##### Developing

Ignore all the files in the root, they are compiled by harp

The files to edit can all be found in the `_harp` and the `_harp/public` directory

After developing run the build.sh script in the `_harp` directory to compile your changes, run:

`_harp/build.sh` (this will open your index.html in browser)

Or do it manually with: `open index.html`

##### Rules for developing

* Before you start any work, find an issue to work on or create one if you see an improvement to be made

* When you start working on an issue add the 'in-progress' label to an issue and site the branch you will be working on

* Make regular commits to your 'in-progress' branch

* Only make a pull request to master if it closes an issue
