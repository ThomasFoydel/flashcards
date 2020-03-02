<div align="center"> <h1>flashcards</h1> </div>

### A flashcard app built in MERN stack! [live demo here](https://mern-flashcards.herokuapp.com/)

This is a fullstack project built with mongodb, node/express, react, and the react-spring animation library. It uses a jwt and bcrypt based authentication flow and a redux state management flow.

<img src="/client/src/img/screenshot.jpg" width="100%" >

    I was playing with react-spring again, this time making elements 3d rotate based on a css keyframe animation method I picked up for the online user icons in http://socketchat.xyz. I got the idea to make a flash card application with it and thought hey, I can stick authentication on this. The main goal of this project was to keep my redux skills sharp after focusing on context for a while.


    To run on your machine:

1. clone or download and unzip
2. open terminal from the root folder of the project and run `npm i` then `npm run client-install`
3. start the project with `npm run dev` or, alternatively, first start the backend server with `npm start` and then open a second terminal and run `cd client` followed by `npm start`
   project front-end should be running at http://localhost:3000 and back-end running at http://localhost:8000
4. project should be running back-end on http://localhost:8000 and front-end on http://localhost:3000
