# Taking_Notes_With_Express

Project description:

For this project, we are using Express.JS we are going to be making a note taking app. This is an application that I recived starter code for. The css styling, as well as the majority of javascript was already given to me for this project. The file that I created from scratch is the server.js file. In order to create this file and make the entire application functional, I had to take take the following steps. Firstly. we need to install all of the necessary packages, and use them in the projects by using the require method. These include express.js, the database folder, path, fs, uuid (for generating a unique id), and specify the port that our project will use(3001). In order to create a new post on the application, we use a post method, and create a new instance of a note, that countains a title, text, and unique id. We then push this new note into the notes array, and use the writeFile method to add the notes to the database. This app contains a landing page and then also a note taking page. This note page will allow user to title their note and write the text for their note and then save that note.

User instructions:

In order to use this app, you must first install all the necessary packages to run the project. You will need to install express JS. You will need to install UUID. Firstly you will open the server.JS file in the integrated terminal, then you will run the command node server. This will run the project at the port 3001 then you will go to your browser and search for local host 3001. There will be a landing page that is loaded and you will click on the enter new note button, you will then fill in your title and you will fill in what you want the note to say in the text box. Upon clicking ont the enter button, your new note will be saved and stored on the left hand side of the screen.


How to contribute:

In order to contribute to this page, you need to have permission from the repository owner. It is publicly viewable, but changes have to be from users that have been granted permission to make edits on the page.

Screenshots:
![Screenshot 2024-09-21 at 11 47 15 AM](https://github.com/user-attachments/assets/c2230143-2fc1-4471-8069-4068e9d4086b)

![Screenshot 2024-09-21 at 11 44 25 AM](https://github.com/user-attachments/assets/010d3179-41bd-4bfd-aefa-937feda4da88)

Sources:

For this project, I did not copy any source code, but I did have the help of one tutor named Charlie. I was having a couple issues and he was able to help me resolve them. For example, originally I was not using the uuid correctly, and therefore a unique id was not being generated. The correct notation is: const {v4: uuidv4} = require('uuid');. However I had const uuid = require('uuid'). Help me fix this error and use correct notation, making it work properly. Additionally, there is another error, that I could not solve, where I kept seeing my console saying undefined. Additionally, i could write a note but when I saved it, it disappeared. He helped me resolve this issue and it allowed each new note to save before when I entered a note. The issue was that I had forgotten to add the middleware, specifically the following code: 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
Upon fixing that issue, the application functioned as it was supposed to.

License: 

MIT License

License Explanation:

Copyright (c) 2024 iancorbettPermission is hereby granted, free of charge, to any person obtaining a copyof this software and associated documentation files (the "Software"), to dealin the Software without restriction, including without limitation the rightsto use, copy, modify, merge, publish, distribute, sublicense, and/or sellcopies of the Software, and to permit persons to whom the Software isfurnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in allcopies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS ORIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THEAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHERLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THESOFTWARE.

Contact:

My GitHub username is iancorbett. Here is a link to my Github: github.com/iancorbett E-mail: iancorbett1324@gmail.com
