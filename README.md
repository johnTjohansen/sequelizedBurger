# sequelizedBurger
Boot Camp HW 15 - Sequelized Burger app from HW 14

This is an alternate version of the Eat Da Burger app from homework 14 that uses sequelize to handle mysql database CRUD operations.  It lists uneaten burgers from the database and allows them to be devoured, which moves them to an eaten-list on the other side of the screen.  The user can also create new burgers, which will appear in the uneaten list until eaten.

Dependencies:
node.js
express
express-handlebars
method-override
body-parser
mysql
sequelize

To access this app, start up the server on the CLI - type "nodemon server.js".  In the browser you can user localhost:3000 to reach the home page.

Comment:
I continue to struggle with database connectivity issues.  I finally got my GET call working, but when I made tweaks to get the create and update working, somehow the GET broke.  I wish I had started this sooner.
