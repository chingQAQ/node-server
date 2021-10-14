# nodejs-server-native
- Spin up a Node.js-driven Server (on port 3000)
- Handle two Routes: '/' and 'users'
  - Return some greeting text on '/'
  - Return a list of dummy users
- Add a form with a 'username' `<input>` to the '/' page and submit a POST request to '/create-user' upon a button click
- Add the '/create-user' route and parse the incoming data (i.e this username) and simply log it to the console