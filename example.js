const axios = require('axios');
const AzuryConfig = require('./index');

const AzuryAPI = new AzuryConfig({
  apiKey: 'yourownapikey',
  model: 'gpt3'
});

AzuryAPI.completions.create({ content: 'wassup' })
  .then(response => console.log(response))
  .catch(error => console.error(error));