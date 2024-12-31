# hand-rolled-podcast-feeds
Files you can use to manually create a podcast feed

This repo was referenced from [my blog post](https://andysylvester.com/2024/12/31/experimenting-with-manually-creating-podcast-feeds/) on manually creating podcast feeds.

The file test.js in this repo should be used along with the rss NPM package (see [this repo](https://github.com/scripting/rss)) The file rss.xml in this repo was created from running the app test.js with the rss package.

To duplicate these results:

* Install Node.js and NPM
* Download the Zip file from the above repo and extract it in a folder
* Copy the test.js file into the folder, overwriting the repo folder
* Open a command prompt or Terminal window and navigate to the folder
* Enter the command "npm install" without quotes - this will install the Node.js packages needed for the app in a subfolder called "node-packages"
* Enter the command "node test.js" - the app should create the podcast feed rss.xml



