# Azury API NODEJS
Hello, this is the Azury API for NodeJS, this API is used to connect to the Azury API and use it in your NodeJS project.

## Installation
To install the Azury API, you need to install it with NPM:
```bash
npm install azury-api-nodejs
```

## Usage
To use the Azury API, you need to import it in your project:
```js
const AzuryConfig = require("azury-api-nodejs");
```
Then, you need to create a new instance of the Azury API:
```js
const AzuryAPI = new AzuryConfig({
  apiKey: 'yourownapikey',
  model: 'gpt3'
});
```
You can now use the Azury API in your project, for example:
```js
AzuryAPI.completions.create({ content: 'wassup' })
  .then(response => console.log(response))
  .catch(error => console.error(error));
  ```

The response should be like this
```json
{
  status: 200,
  result: "Hey! Not much, just here and ready to chat. What's up with you? Anything exciting going on?"
}
```

- This NODEJS Package was programmed by criticaldevx#0