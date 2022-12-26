# About project

This project is an extended version of [this to-do app prototype](https://github.com/emlevina/she-codes-todo) with set up Node.js REST API and data stored in Mongo.db database.

### How to navigate the project

- All operations (CRUD) on tasks are handled via [Express router](./routes/tasks.js) and performed [asynchronously](./controllers/tasks.js).
- There is a middleware for [error handling](./middleware/error-handler.js) which enables creating meaningful custom errors, e.g. if the task wasn't found.
- To connect the database I used [Mongoose library](./db/connect.js) and creacted a [Mongo.db schema](./models/Task.js) for tasks.
- On the client side CRUD operations are performed with `fetch()` method and are separated to the [separate file](./client/src/actions/index.js) for manageability. 
- Ability to access and change state is done through `useState` and `useContext` hooks, e.g. in [Task component](./client/src/components/Task.js). The context is created in [TasksContext file](./client/src/TasksContext.js) and provided to the app in [index.js](./client/src/index.js)


### Why I built the project this way

- The main idea was connect existing frontend project to Node.js server side.
- Non-relational database (as Mongo.db) was considered a good choice for this kind of app as it stores data in a form of documents, so it works perfectly with json.
- I tried to create a transparent structure of files and folders to make it easily maintainable. 