# Summary - Student Collab

## Primary problem
Students often don’t have enough experience or a strong portfolio when they graduate to start their career. Oftentimes it is difficult for students to work on a project on their own due to limited skills and experience but they are also intimidated by hackathons or programming events which prohibits them from finding collaborators. 

## Our solution
A web application that allows students of varying skill levels to easily find projects to contribute to or teammates to collaborate with.

Our goal is to provide a platform where students can find a starting point to build their portfolio and gain team experience. We want students to expand their skills and experience to give them a strong foundation for their future career.

Our application targets students of all skill levels with varying interests. Students who have great ideas but are lacking in relevant skills can search for teammates that they can learn from while collaborating. Students who want to create something of a larger scale can search for people to split up the work. 

## Use Cases

#### Student with an idea but needs help building it
For instance, consider a student wishing to create an Android game application. The project may be too big to handle on his/her own - may need 2 or 3 other developers, and an artwork and UI designer. The student will be able to use our application to find other students with relevant skills who are also interested in creating an Android game application. The student can then finish their project and gain experience working in a team.

#### Student who is interested in building something using technology they have limited experience with
A student has discovered the Phaser JavaScript/HTML5 game framework and wishes to build a new Flappy Bird game with it but they are having trouble with some of the componenets. They will be able to use our platform to search for students who are familiar with Phaser JavaScript and propose a partnership. This can be a brief collaboration in which the student gains some experience from their partner and then continues on to finish their project on their own or the project can be shared between the two to completion. 

## How we will build our platform

We are planning to build our software as a web application using the [Lumius microframework](http://www.luminusweb.net/). As of right now, we will probably have a 3/3 split for the frontend and the backend of the application - Carmen, Nick and Paul will work mostly on the backend, and Mark, Ryan and Sajjad will work mostly on the frontend.

### Components

**User/Member list:**
  * Filter functionality to sort by location, skill, interests
    ex. filter by skill level in a language: Java (x lines of code/x years experience)
                  filter by interests: artificial intelligence, game development, etc.
  * Each user should have their name, main area of skill/major, experience, interests and skills displayed

**Profile page:**
  * Greeting and brief description about user 
    ex. Hi my name is Jon Doe! Here’s a little about myself ... 
  * Includes skills, interests, projects, experience, contact information, additional links(LinkedIn, Github, Personal Website), Major, School(optional display). 
  * Include Profile Picture Option
  * List of projects user is part of

**Project list:**
  * Filter functionality to sort by location, projects that need specific roles i.e developer, designer, engineers etc. 
  * Each project should have a name, a snippet of the description, link to the project creator’s profile and a list of roles the project is looking for

**Project Page:**
  * Includes Project Name
  * Name and brief description of creator of project
  * Creator has functionality to add a currently existing user to project
  * Project description 
  * Short description of project goals 
  * List of members currently working on project and link to their profile
  * (maybe) pictures of work in progress

**Registration Page:**
  * User’s name
  * Major & School(optional)
  * School email address
  * Password


### Anticipated challenges
Some of the team members are not proficient in the planned technology stack and have not created web applications before but other members will be able to provide assistance. 
