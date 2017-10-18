# Process Report

## Initial Planning

#### Your Definition of Scrum Master

As defined in lecture, a scrum master is a facilitor that ensures that everything is running smoothly and that the rules of the scrum development cycle are followed. 

Along with these tasks, the scrum master in our team is responsible for being a mediator for discussions, bringing individual and team issues to light, allocating tasks to each member of the team, and being the communicator between the TA/professor and individuals who are not actively participating in discussions.

For example, at the beginning of phase 2 of the project, there was a silent period when certain members of the group wanted to drop the course and did not contribute to discussions. The scrum master emailed and contacted the individuals that were not actively communicating, summarized the situation to the remaining memebers of the group, relayed the information to the TA/prof and figured out next steps while re-evaluating tasks that should be done.

#### How do you estimate task size?

The number of and programming ability of each member of the group, how much time we had per sprint relative to our ideal "final product", and the amount of key features we wanted implemented were factors that were considered when estimating task size while allowing some leeway given hiccups and unexpected problems.

Furthermore, we queued tasks based on importance and whether the feature was key to our MVP. For example, our "project page" is the key idea in our project and is of highest priority and the largest task size. Meanwhile, UI, is of lower priority since we want to have our features implemented first.

For phase 2, we originally allocated tasks for a team of 6 - half of the group work on the back end and the other half work on the front end of our "Project page". However, given unfortunate circumstances, we had to completely rethink how we wanted to implement the project page and our approach for phase 2. We decided to use a bootstrap template for this phase while implemented our project page in order to deliver our most important idea.

## Sprint Backlog

#### What did you initially plan to build?

To build our web application, we decided the techonologies with our group members and assigned tasks based on everyone's strengths. However, after half our group left we had to revise everything. We had orginally planned on building the backend using Clojure but since the members who were proficient in clojure left, we changed it to Node.js. 
We had 3 members assigned to front-end, this would've meant a very polished and sleek UI even in the beginning stages of the project. But now since it's only 3 people in the group we've decided to focus our time on perfecting the functionality before polishing the UI. 
After discussing the advantages of building certain features, we decided to go with implementing 3 main requirements for our service. A main page where projects are visible for the user. The user can read more about the projects, like them, follow them etc. The second thing to be built was the user page. A person must be signed up to access our service, so it was necessary. The third feature, which will be further improved on, is the search. A basic search was implemented as our service relies heavily on it.
 
#### How did you plan to build it?

Our original plan was to split the team in halves, with one half working on the backend while the others on the front-end. Now, with a smaller team we're more invovled with all aspects and will hold many verticles. We're going to be using Node.js to handle the backend logic and MongoDB for our database. We designed how the data would be saved. A users table along with projects, messages, and avatars table were designed. For the frontend we plan to use Twitter bootstrap as it will aid greatly in making a responsive UI and we will use Jade instead of HTML. Jade takes out a lot of overhead making development easier. 
[talk about who's gunna do what]

## Update Meetings

As with phase 1, the majority of our communication was done online via Slack. With a smaller group consisting of three people, it became easier to communicate with everyone and to share ideas. Furthermore, we began using Google Hangouts to communicate with the TA and as a platform to have group meetings with voice chat.

Although online forms of communication are convenient, in this phase, a problem that arose was the lack of communication from various members of the group (via emails and Slack). These members of the group were contacted privately and decided to leave the group. As such, a few of our meetings this phase were dedicated to restructuring our project (i.e. re-thinking backend, our final product, how to allocate tasks) with the remaining members of the team. 

#### Meeting 1 - February 22nd

Discussed online via Google Hangouts. Paul, Ryan and Sajjad present.

###### Topic's Discussed

- Discussed how members of the group decided to drop the course or are not present.
- Re-evaluated how the remaining members of the group wanted to implement the project.
	* Use Node.js for the backend.
- Discussed future steps and what task to do next.
	* Draw UI diagrams to figure out key components to build during each phase.
	* To communicate our situation with the TA/Prof.


#### Meeting 2 - February 26th

Discussed online via Google Hangouts. Paul, Ryan and Sajjad present. TA present for half an hour.

###### Topic's Discussed

- Updated the TA on our situation.
	* Asked for suggestions on future steps to take.
	* What the TA thought on what features should still be implemented and what features should be cut-back.
	* Asked his opinion on our process: UI diagrams -> Implement key features -> Implement lower priority features.
- Discussed various UI diagrams and ideas each members had towards the project.
	* What pages we wanted to implement for our project given our time constraints.
	* Special features we wanted in our pages (i.e. people can follow projects and be "intersted in" projects).
- Figured out which page to implement first.
- Set due dates to help manage time in the team.
	* February 27 - Draw UI diagram for the Project Page, figure out where to start, how to allocate tasks, and general sprint backlog.
	* February 29 - Discuss our progress with the TA and any issues. Find bootstrap template that the team can use.
	* March 2 - Discuss progress among the group members and to finish a basic version of our project page.


#### Meeting 3 - February 27th

Discussed online via Google Hangouts. Paul, Ryan and Sajjad present. TA present for half an hour.

###### Topic's Discussed

- Shared UI diagrams of the project pages that we want ideally implemented by the end of the project.
- Finalized on how we want to implement each page and features we wanted on the pages for each phase.
- Figured out the order of importance for each feature for our MVP and which to implement and what order.
	1. Project Page to search and create new projects.
	2. Profile Page for users.
	3. Search function that filters projects and users.
	4. Messaging and other features.
- Allocated tasks for Project page.


#### Meeting 4 - February 29th

Met before tutorial. Paul, Ryan and Sajjad present.

###### Topic's Discussed

- Updated the TA on our progress and asked for his opinion on our order of tasks to be done.
- Discussed specifically what features we wanted to implement for phase 2 on our project page.
	* A list of projects
	* The ability to like/dislike projects
	* Description of each project displayed

## Burndown Chart
![Diagram](https://github.com/csc301-winter-2016/project-team7/blob/master/doc/phase2/burndown-1.png)


For this phase we had many unpredictable issues, and they were much reflected in our burndown chart. For this phase we focused on achieving 3 basic functionalities for our website. We sought to create a project page, display a list of projects with their respective descriptions, and an interface that allows users to like, dislike, show interest in and follow projects.. After speaking with Spandan our mentor for this project he aidded us to focus on basic functionalities as oppose to UI design aspects which can be very time consuming. This helped us narrow down on what tasks should be prioritized first for this phase. In our burnout chart the black line shows the anticipated time to complete these 3 tasks. However, with set backs like disownment of current group members at the time that caused us to rethink backend technologies we will use, and silent periods from those group members which create lost time we fell behind this anticipated timeline. Nonetheless, this set back is understandable and respected by us. The red line demonstrates the actual progress we made in completeing these 3 tasks. 

## Review & Retrospective

For this phase, the original plan, with all 6 members of the group, was to have a full functioning project page, with users having the ability to like/dislike projects, as well as a user profile up and running. With members of the group dropping and refusing to communicate with the group, we decided to change the plan to cut back on certain features to make it easier for the group as well as withing our programming abilities. As such, we scrapped and cut back on the like/dislike, follow feature as well as a customizeable profile for this phase. 

As such, the team planned on and successfully implemented a very basic project page, a user page as well as the abiility to create users/projects for this phase. With less memebers in the group, it is easier to coordinate and follow a plan as less conflicting schedules and opinions. A small problem that did occur is implementing an all purpose search. The all purpose search was too sophisiticated given our short time frame so we decided to cut back on it until future phases. On the otherhand, the tasks we aimed to implement in this phase were relatively simple and problems may arise in the future as features get more specific.  However, all in all, the phase went smoothly.