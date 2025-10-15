const axios = require('axios');
const { stringify } = require('querystring');
const ApiError = require('./errors/ApiError');

module.exports = async function (method, settings = {}) {
  const { data } = await axios.post(`https://api.vk.ru/method/${method}`, stringify({
    v: 5.199,
    ...settings,
  }));

  if (data.error) {
    throw new ApiError(data.error);
  }

  return data;
};
