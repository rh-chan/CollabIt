# Process.md

## Artifacts Built/Process

Last phase, a very basic web application, using Node.js and Express, that used a database (using MongoDB) and displayed a list of projects and users was implemented. 

For this phase, we expanded upon our basic search function. Instead of searching for just tags, we implemented a way to search for titles, users and other filters that are set. Furthermore, we also implemented a way to filter projects (i.e. by types of projects, game design, Android, IOs, and more).

We also began to implement a web-scraper that scrapes data from Github and auto-fills user profiles.

## Decisions Made

As with every phase, each phase begins with a decision on what features do we want implemented. The team aimed and decided on first implemented a higher level search feature and an web scraper that extracts information from a GitHub profile.

More specifically, decision were made in terms of the technical aspect of the project. Last phase, we implemented a very basic search function that searches for tags that users set for their project. In this phase, we wanted to implement a search function that not only searches for tags but can search for project names, users and more. There were different ways we wanted to implement this, relevance weighting, field weighting, stopword removal and more. There are APIs that exist that help us with this search such as [Norch](http://blog.comperiosearch.com/blog/2013/07/05/norch-a-search-engine-for-node-js/). In the end, we decided to use a point-based algorithm for search which is futher explained in the technical aspect of Planning.md. This algorithm was used for our MVP as it best suits our MVP at the moment given our short list of projects and users and not many features to filter by.

Another decision that was made was how we wanted to scrape data from Github. We believed that this feature will create appeal and an incentive for users to sign up for our MVP. There were different APis that would help us implement this feature such as [Cheerio](http://maxogden.com/scraping-with-node.html) and [Third-party login API](https://docs.strongloop.com/pages/releaseview.action?pageId=3836277). We made the decision to use the latter as the former required permission from Github.

 
## Issues/Challenges Encountered

During this phase, there were not many issues given that this phase was not particularly long. All issues in this phase were technical and were resolved on Slack.

The first issue we encountered involved filters. Our web-applicaiton comfortable filter projects based on type, OS and more. However, we wanted to implemented higher-level filters such as based on number of collaborators or people on the team. These issues require higher level algorithms and queries that we plan on implementing in the next phase.

The next issue we encountered involed the web-scraping issue. We had to find an API that was able to scrape data from Github that allows users to auto-fill their profiles. We first settled with [Cheerio](http://maxogden.com/scraping-with-node.html), a module for Node.js that scrapes data from downloaded web pages. However, Github requires permissions that we did not have access too. We had to scrap our progress in terms of that feature and we ended up using and beginning [Third-party login API](https://docs.strongloop.com/pages/releaseview.action?pageId=3836277) that would help solve this problem. 


## Update Meetings

As with the other phases, most discussions took place on Slack due to ease of communication. Furthermore, the team regularly communicated goals, challenges, progress and more on a daily basis. 

An example of our communication was a discussion that took place during the beginning of the phase. Everyone in the group suggested and agreed upon a goal for the phase - a higher-level search function and auto-filling function that extracts information from a GitHub page to make ease of sign-up. 

Another discussion that occurred was later on in the phase, a discussion on how to implement the auto-filling function. We aimed to scrape data from a GitHub profile using [Cheerio](http://maxogden.com/scraping-with-node.html), a module for Node.js. However, we realized that we would need to find a way to get permissions from GitHub. We ended up finding a [Third-party login API](https://docs.strongloop.com/pages/releaseview.action?pageId=3836277) that would help solve this problem. 

Aside from online discussions, there was one meeting that took place that was used to discuss progress and to update the TA.

##### Meeting 1 - Monday, March 13
###### Topics Discussed:
* How search is going to be implemented (i.e. Point-based system)
* What APIs could help us extract info from a Github Page.
* Update TA on progress.


## Burndown Chart
![Diagram](https://github.com/csc301-winter-2016/project-team7/blob/master/doc/phase3/burndown-1.png)
