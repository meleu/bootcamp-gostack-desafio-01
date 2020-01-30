<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Challenge #1: NodeJS (and CRUD) concepts
</h3>

## :rocket: About

Create, from scratch, an aplication to store projects and your tasks using [Express](https://expressjs.com/pt-br/).

This is a challenge from the 1st module of [GoStack bootcamp, from Rocketseat](https://rocketseat.com.br/gostack). It's a really intesive Node.js, React and React Native training I [@meleu](https://github.com/meleu) took in January/2020.


### Routes

- `POST /projects`: The route must receive `id` and `title` from the body and register a new project in an array with the following format: `{ id: "1", title: "New project", tasks: [] }`. Make sure to send the new project's ID and the title as a string with double quotes.

- `GET /projects`: The route used to list all projects and their tasks.

- `PUT /projects/:id`: The route must change only the title of the project with the given `id`.

- `DELETE /projects/:id`: The route must delete the project with the given `id`

- `POST /projects/:id/tasks`: The route must receive a `title` field and register a new task in the task's array of the project with the given `id`.


### Example

When calling the route `POST /projects` with `{ id: 1, title: 'New project' }` and the route `POST /projects/1/tasks` with `{ title: 'New task' }`, the projects array should be like this:

```js
[
  {
    id: "1",
    title: "New project",
    tasks: ["New task"]
  }
];
```

### Middlewares

- Create a middleware to check if a given ID really exists and use it on all routes receiving a project's ID from the URL. If the given ID doesn't exist, return an error, otherwise, the request can go ahead.

- Create a global middleware called in all requests to `console.log` a counter of how many requests were made up to now.


## :memo: License

[MIT LICENSE](LICENSE.md).
