# Sky News Narrate

> Static websites for long-form content

## Prerequisites

You will need :

  * [Node](http://nodejs.org/)

## Installing

`git clone https://github.com/sky-uk/news-narrate-web.git`

Run :

`npm install`

## Build and deploy

The project is set up to deploy to Divshot for static hosting. This is done through Circle CI.

## Development

When adding any new sub-projects, be sure to update `divshot.json` to ignore any
node_modules. If node_modules are synched with divshot it can cause Circle CI
to time out the build.

## London 7-7 feature

http://narrate.news.sky.com/london7-7

In the london7-7 directory.
Run `gulp` to build the index.html

## People smuggler feature

http://narrate.news.sky.com/people-smuggler

In the people-smuggler directory, run `build.sh`
