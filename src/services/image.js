const axios = require('axios')

exports.genImage = async category => {
  let obj = await axios.get(`https://source.unsplash.com/featured/?${category}`)
  return obj.request.res.responseUrl
}