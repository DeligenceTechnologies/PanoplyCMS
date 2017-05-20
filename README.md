# PanoplyCMS 1.3

## Installation Method - 1
- Create a meteor application using `meteor create panoplycms`
- Go inside folder location through terminal or command prompt and,
- Run following commands :-
	* `meteor add deligencetechnologies:panoplycms-core`
	* `meteor add deligencetechnologies:default-template`
	* `meteor add fortawesome:fontawesome`
	* `meteor add deligencetechnologies:menumodule`
	* `meteor add deligencetechnologies:htmlblock`
	* `meteor add deligencetechnologies:panoplycms-tag`
	* `meteor add deligencetechnologies:sample-data`
	
- Install React using: `meteor npm install --save meteor-node-stubs react react-dom react-addons-transition-group react-addons-css-transition-group react-addons-linked-state-mixin react-addons-create-fragment react-addons-update react-addons-pure-render-mixin react-addons-test-utils react-addons-perf`

- Remove unnecessary code from `client/main.html` and `client/main.js` file from command :- `rm client/* server/*`
- Type: `meteor` and hit Enter key.
- Once it start running, go to your browser and type: http://localhost:3000
- Thats it! You have installed PanoplyCMS on your system successfully.

## Installation Method - 2
- Pull PanoplyCMS from GitHub Repository on you system OR you can download zip and extract it on your machine.
- Go to folder location through terminal or command prompt
- Type: `meteor --settings settings.json` and hit Enter key. Please wait for server to get start. It will automatically install all dependencies and will start running.
- Once it start running, go to your browser and type: http://localhost:3000
- Thats it! You have installed PanoplyCMS on your system successfully.

- Frontend Link: http://localhost:3000
- Backend Link: http://localhost:3000/admin

- Initial Login Credentials of Backend :-<br>
	Email: info@deligence.com<br>
	Password: Pass@123

Now go and create some categories, then articles and finally some menus. Look at the changes at your frontend.

## Demo
- Frontend: http://45.55.157.253/
- Backend: http://45.55.157.253/admin
- Backend Login Details :-<br>
	Email: info@deligence.com<br>
	Password: Pass@123

## Features
- Single Admin
- Multiple Categories
- Articles Associated With Created Categories
- Multiple & Multilevel Menus
- Tags associated with articles
- Dynamic Template
- Menu Module that can load at any given position
- HTML Blocks that can load at any given position
