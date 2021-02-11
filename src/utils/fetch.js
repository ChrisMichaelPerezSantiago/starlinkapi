const axios = require('axios').default;

const f = async(url) =>{
  return new Promise(async(resolve, reject) =>{
    try {
      const opts ={
        url: url,
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
      }
      const { data } = await axios(opts);
      resolve(data);
    } catch (error) {
      const e = new Error(error);
      reject(e);
    }
  });
};

module.exports = { f };