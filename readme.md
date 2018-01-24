# up-keep 🛠️

## Find preventative maintenance tasks, how to perform them and get in touch with a professional

### Click [here](https://up-keeps.herokuapp.com/upkeep) to start with your projects: [up-keep](https://up-keeps.herokuapp.com/upkeep)

### This application allows the users to search for preventative maintenance tasks and filter by category and/or season. Users can select tasks relevant to their need and build their personalized menu. The menu will give users the option to send it to their calendar, as an email or print it.

### If users are curious about how to perform some of those tasks, they will find the answer on the "how-to" page. Just type the task on the search bar and there you have it.

### Are you still in doubt on how to fix it? No worries. On our "get help" page users can search for professional in their areas to perform those tasks.

### Check out a demo of up-keep:

![Preventative Gif](/public/img/pictures/preventative.gif)

![Preventative Gif](/public/img/pictures/howto.gif)

<!-- ![Preventative Gif](/public/img/pictures/preventative.gif) -->

### It's also mobile friendly:

![Mobile Gif](/public/img/pictures/mobile.gif)

### Built with MySQL, Node, Express, Handlebars, Sequelize and APIs.

### How to run it locally?

* Clone the repo using a terminal:
`https://github.com/PurpleTreeUofU/upkeep.git`

* Install dependencies:
`npm install`

* Open MySQL Workbench(Windows) or Sequel Pro(Mac) and create a database `upkeep_bd`. Then, run the following to seed the database:
`sequelize db:seed:all`

* Go to `config.json` file and update the development credentials to yours from MySQL:
`"development": {
      "username": "YOUR_USERNAME",
      "password": "YOUR_PASSWORD",
      "database": "upkeep_db",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }`

* Start the server:
`npm start`