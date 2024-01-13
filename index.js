const axios = require('axios');

class AzuryConfig {
  constructor({ apiKey, model, baseURL = 'https://ts.azury.cc/api/v1/' }) {
    this.apiKey = apiKey;
    this.model = model;
    this.baseURL = baseURL;

    this.completions = {
      create: this.createCompletion.bind(this)
    };
  }

  getBaseURL() {
    return this.baseURL;
  }

  getApiKey() {
    return this.apiKey;
  }

  getModel() {
    return this.model;
  }

  async createCompletion({ content }) {
    const url = `${this.getBaseURL()}${this.getModel()}?apiKey=${this.getApiKey()}&content=${content}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = AzuryConfig;