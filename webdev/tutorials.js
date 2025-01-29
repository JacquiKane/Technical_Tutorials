/** @format */

const tutorials = {
  WD_001: [
    "<h3>Purdue Pete's Meetings App</h3> (#1 of 3) <h4>Uses:Node.js, EJS</h4>",
    " <p>Node.js is a cross-platform, open-source JavaScript runtime environment that can run on multiple operating systems, like Windows and macOS. EJS is a templating engine. What's a template engine? Software that supports injecting data into HTML, and supporting the dynamic generation of HTML content.</p>",
    "<p>In this tutorial, you will see how the EJS templating engine is brought into your Node.js application to create dynamic page content, and modularize the code base. You will be creating a simple application that shows a list of reminders. That list is rendered using EJS, to selectively display items in a list, and pass values dynamically to the display.</p><a href='./documents/crud_ejs-tutorial1.pdf'>Purdue Pete's Meetings App with Node.js and EJS</a>",
    "tut1.png",
  ],
  WD_002: [
    "<h3>Purdue Pete's Meetings App++</h3> (#2 of 3) <h4> Uses: Node.js, EJS, SQLite</h2>",
    "<p>Purdue Pete needs to persist real meeting data! In the last Node/Express/EJS tutorial, you used dummy data from an array, to represent meetings. If these were real meetings, you would expect them to come from a central source, like a database.</p>",
    "<p>In this tutorial, you will <ul><li>add support for a relational database, which is the one with tables! <li> use SQLite and SQLite3, to build the code base we need for the database connection and query. Remember, a query is how we get data back from a database.<li>apply Bootstrap styling</ul><a href='./documents/crud_ejsTutorialPlusSQL2.pdf'>Purdue Pete's Meetings App++ with SQLite</a></p>",
    "tut2.png",
  ],
  WD_003: [
    "<h3>Oh CRUD! Purdue Pete's Meetings App++</h3> (#3 of 3) <h4>Uses: Node.js, EJS, SQLite</h4>",
    "<p> Purdue Pete can create a new meeting, but what if he decides to cancel the odd meeting, maybe update a time, review some details? There is a special term for this - CRUD, Create, Read, Update, Delete ... meetings from the Meetings Database. So far, you have the Read covered. Now let’s tackle the other 3! </p>",
    "In this tutorial, you will create a CRUD application. A CRUD application is a key building block for software engineers, and concerns data management. CRUD is an acronym for<ul><li>Create – the process of adding a product or service<li>Read – getting the details about a product or service<li>Update – modifying the details of a product or service<li>Delete – removing a product or service from the company’s offerings</ul><a href='./documents/crud_ejs-CreateUpdateDelete3.pdf'>Purdue Pete's CRUD App</a>",
    "tut3.png",
  ],
  WD_004: [
    "<h3>Purdue Pete's React-ive Meetings App</h3>#1 of 3 <h4>Uses: React, JSX</h4>",
    "<p>Welcome to React, one of the most popular libraries supporting JavaScript to create lean, modularized and effective web pages!The average time to learn React ranges from 1 month to 6 months, so, consider this tutorial an introduction to thinking in components, and familiarization with the concepts and techniques used in a component based architecture. </p>",
    "<p>In this tutorial, you will:<ul><li>use the npx utility, with create-react-app, to scaffold a boiler-plate React application<li>use JSX to represent a variable on your web page<li>create your own component<li>use the props object to pass data between react components<li>use the JavaScript Array map method to create a list of objects<li>use JSX to create a list of components, based on one component declaration<li>style a React component<li>use a hook in React to coordinate changing the state of a variable, with an action in your application</ul><a href='./documents/reacttutorial1(1).pdf'>React ... With Caution!</a></p>",
    "tut4.png",
  ],
  WD_005: [
    "<h3>Purdue Pete's React-ive Meetings App - What Route Will You Take?</h3>#2 of 3<h4>Uses: React, JSX, React Router</h4>",
    "<p>In React, every application is a single page one, hence the efficiency, not much content(.html files)  to be served to a client. However, 'pages' are used to differentiate content in a suite of pages. Special software, React Router, supports adding multiple routes to app, and ability to navigate to home page, about page, contact page.</p> ",
    "<p>In this tutorial, you will<ul><li>Create a set of 3 routes using React<li>enable ‘navigation’ to other ‘panels’. The panels are virtual pages, because they are not stored as markup in traditional .html files<li>Wire the routes to React code that handles each route and render the expected content</ul><a href='./documents/reactroutes(2).pdf'>Choose Your Route Carefully!</a></p>",
    "tut5.png",
  ],
  WD_006: [
    "<h3>Purdue Pete's React-ive Meetings App - React Responsively...</h3> #3 of 3<h4>Uses: React, React Router, JSX</h4>",
    "<p>Responsiveness is key - mobile first, the importance of prioritizing layouts on smaller devices like cell phones. Especially important in commercial applications - user experience may lead to a sale! </p>",
    "<p>Traditionally, we integrate responsiveness by using key features of HTML/CSS, like Flexbox and media queries. In this tutorial, you will see how to use JSX to apply styles depending on the status of the application, and so enable responsiveness in terms of a hamburger menu. This is a small and specific example, however you can use the techniques presented to add your own extended strategy for responsive layouts.</p><a href='./documents/reactresponsiveness(3).pdf'>React Responsively!</a> </p>",
    "tut6.png",
  ],
};
