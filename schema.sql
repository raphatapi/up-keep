CREATE DATABASE checklist;
USE checklist;

CREATE TABLE 'tasks' (
	id int AUTO_INCREMENT,
	#brief name of task
	task varchar(30) NOT NULL,
	#brief 2 sentence description for i
	description varchar(100) NOT NULL,
	#link to diagram of task if available
	imageLink(100),
	#identify season, monthly or annually
	timeFrame varchar(10) NOT NULL,
	#identify category ie plumbing, electrical
	category varchar (20) NOT NULL,
	#skillLevel needed to complete task
	skillLevel varchar(20),
	#phrase to generate search in youTube
	internetSearch varchar (20) NOT NULL,

);

CREATE TABLE 'category'(
	id int AUTO_INCREMENT,
	catName varchar(30) NOT NULL,

);

CREATE TABLE 'timeFrame' (
	id int AUTO_INCREMENT,
	timeName varchar(30) NOT NULL,
);

CREATE TABLE 'skillLevel' (
	id int AUTO_INCREMENT,
	levelName varchar(30) NOT NULL,
);