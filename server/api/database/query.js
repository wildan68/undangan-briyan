import config from './config.js'

const db = async (query) => {
  return await new Promise((resolve) => {
    config.query(query, (err, res) => {
      if (err) return resolve(err)
      resolve(res)
    })
  })
}

export default db