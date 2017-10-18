# Collaboration

## Team Profile

### Carmen
Languages
 * Clojure/ClojureScript
 * HTML/CSS/JavaScript
 * Python
 * Java
 * C#
 * C

Experienced in creating web apps using Clojure web frameworks. Has done work with mobile applications (mostly iOS, some Android) using C#. 

### Mark
Languages
 * Visual Basic
 * Python
 * Java
 * C

Uses Visual Basic at work.

### Min Kyu (Nick)
Languages
 * Python
 * C
 * Java
 * MATLAB 
 * C++

Experienced in creating Python programs with a GUI for computer vision algorithms.

### Paul
Languages
 * Python
 * C
 * Java
 * SQL
 * C#
 * HTML/CSS/Basic JavaScript

Experienced in mobile development. Have done work in Android development using Java. Experienced in game development specifically using Unity's game development engine coding in C#. 


### Ryan
Languages
* Java
* HTML/CSS/JavaScript
* Python
* SQL
* C

Have some experience in full-stack web development. Have done some work with Android development in Java. 

### Sajjad
Languages 
* Java 
* Python
* HTML/CSS/JavaScript/Node.js/JQuery/AngularJS
* Ruby on Rails
* C/C++, C#

Experienced in full-stack. Bit of Android and iOS development

## Meetings

The majority of our communication was done online via Slack. This allowed us to discuss ideas with each other without the need to schedule face-to-face meetings to everyone's convenience. We found Slack to be an excellent channel for brainstorming and keeping a record of our numerous ideas. When it came down to discussing the details of each idea, face-to-face meetings were easier as we could get immediate responses and feedback from each other.

Although Slack is a great tool, it's another means of communication to check. Because of this, some team members had trouble keeping up with online discussions. This was understandable as all of us have very busy schedules and sometimes forget to check slack for messages from team members. In the next phase of our project, we should take more effort to keep up with online discussions and remind each other to check Slack for updates. 

For this phase no one had a specific role. We all pitched in ideas to the team and discussed our interests. The list was narrowed down based on everyone’s opinion and we weighed the pros and cons of each idea.

Our decisions so far have been a democracy. We ended up having three strong contenders for our project. The team did some individual research on each idea before taking a vote for their preferred project. The team typically votes whether they agree or not before any decision is made.  

With the progression of the project and the tasks becoming clear, we have developed high level roles for each team member. 

### Meeting 1 - February 1st
Met during tutorial. All team members present.

#### Topics discussed
The team got to know each other and we shared our strengths and experiences.

We came up with ideas and tried to answer the following questions for each of them:

1. *What* are you planning to build?
2. *Who* are you building it for?
3. *Why* would they find it useful/valuable?
 
Two of the ideas that we discussed in detail are described below along with their pros and cons and any concerns we had. Our final idea is not included below as it is described in Summary.md

### Meeting 2 - February 8th
Met during tutorial. All team members present.

#### Topics discussed
We decided on a project idea and worked on the details of the project. Specifically, we tried to answer the following:

1. What is the main problem that we are trying to solve? 
    * Is our app intended to be a networking tool or a project-finding tool?
    * Is the focus of our app going to be on generating project ideas or gaining experience in working as a team?
2. Who are our intended users? 
    * Do we want our app to target computer science/software engineering students only?
3. Why will our users find our software useful?
4. What will the different components of our application be?
 
These questions are addressed in [Summary.md](https://github.com/csc301-winter-2016/project-team7/blob/master/doc/phase1/Summary.md). 

Additionally, we talked briefly about possible technology stacks. Currently we are thinking of using [node.js](https://nodejs.org/en/) or [Clojure](http://clojure.org/) for the server-side code and one of [PostgreSQL](http://www.postgresql.org/)/[MongoDB](https://www.mongodb.org/)/[SQLite](https://www.sqlite.org/) for the database but we are still undecided.

### Meeting 3 - February 10th
Met in person. Carmen, Nick and Paul present. Sajjad was available online. 

We finished the following during the meeting:

 * Finished writing the goals and benefits of our app
 * Decided on a split for the development work - Carmen/Nick/Paul on backend, Mark/Ryan/Sajjad on frontend
 * Decided what each component of the app would display
 * Created some use cases for our application
 * Discussed what didn't work well for us this phase and how to improve
 * Added documentation on our collaborative processes

## Project Ideas
When brainstorming for this project, many ideas were passed around. Each idea was considered and evaluated on the following criteria:
* Is the idea original?
* Would the app be easy or difficult to implement given our programming abilities?
* Would we be able to develop a satisfactory project given our time constraints?
* Would we run into any legal troubles developing the app?
* If everyone in the group was okay with the idea.

With the above criteria, we decided to look towards web applications as it would be easier and more feasible to develop within our time frame. 

While finalizing our idea, we arrived at a few select, "stand-out" ones.

### Timetable App
This timetable app automatically creates an optimal, non-conflicting schedule from a list of specified courses for students at UofT. Students would be able to set parameters to: specify whether they'd prefer an early or late schedule, specify whether they'd prefer days off from school or a more spread out schedule, put priority on some courses over others when scheduling, and see recommended courses based on PoST and past courses.

Pros:
* Useful to not only everyone in the group but students in our university.
* Saves time spent on searching through course listings and drafting several timetables by hand.

Cons:
* Many timetable generators already exist without the UofT community and it would be difficult to seperate ours from the others.
* The back-end can get too complicated given the many custom paramters
* Need to develop crawler as there is no UofT API that we could use. (further research shows there actually does exist one)

Concerns:
* Is it more time consuming to draft several timetables using other timetable generators or to set all the parameters in our app?


### Exam Study Tool
This app targets UofT students and provides a centralized forum where students can share questions from past exams and submit their solutions. The forum would be organized by course and relevant filters would be applicable to the questions. The format of each question would be similar to a stackoverflow question - multiple answers can be sumitted and students can upvote the correct answer or provide feedback for incorrect answers.

Pros: 
* Better than creating a shared Google Doc with no means of sorting or filtering questions
* Removes the need for students to search through Piazza forums, Google Docs and the rest of the Internet to aggregate answers for a single exam
* Significant convenience is gained as many students do not have time to see professor/teaching assistants for help to solve questions. 

Cons:
* Can conflict with University policies about not sharing exams and questions.
* No tangible incentives for students to contribute - only a small percentage of users may submit answers.
* Students could end up looking through the answers and convincing themselves that they have studied adequately rather than going through exam problems themselves. 

Concerns: 
* Would students actually use this as a study tool throughout the year or would there only be traffic during exam season?
* Would students want to sign up for this service or would they rather just click one link to view a Google Doc?

