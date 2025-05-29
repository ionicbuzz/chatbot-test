# Simple Chatbot App for Jokes and Cat Images

This is a simple chatbot app that the users can ask for jokes and cat pictures. The jokes and cat pictures are taken from [JokeAPI](https://sv443.net/jokeapi/v2/) and [TheCatAPI](https://thecatapi.com/).

## How to Run

This chatbot consists of a backend component utilizing [Express.js](https://expressjs.com/) and a frontend component utilizing [Next.js](https://nextjs.org/).

The backend can be run from the project root directory:
1. Open a terminal in the project root directory.
2. Run `npm install` to install all dependencies.
3. Run `npm run server`.

The frontend can be run in a separate terminal in the `/chatbot-app` directory:
1. Open a terminal in the `/chatbot-app` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm run dev`. (**Disclaimer**: This runs the Next.js app in a developer environment. For production-ready pipelines, this needs to be compiled into a smaller package and served by a web server instead.)

There are no environment variables setup needed. All parts are already hard-coded into the code.

### **For developmental purposes only**

Hard-coding sensitive info into code is generally an unsafe method of running an app. So beware of using this code in a production pipeline!

Once the backend and frontend are running, you can access the chatbot through `http://localhost:3000`.

## How to Use (not to be confused with how to *run*)

You can insert any text into the input field. However, the chatbot only responds to the keywords `joke` and `cat`. Other than those, it will return a message telling the user it does not understand the request.

### This is a Development In Progress

This chatbot is a playground for me to discover a bit of frontend technology and I may add new functionality from time to time. If there are any queston, feel free to reach out to me on Github!