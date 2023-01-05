import db from './database/query'

export default defineEventHandler(async (event) => {
  // const body = await readBody(event)
  const resp = await db('SELECT * FROM briyan')
  //   const query = getQuery(event)
  // reverse array resp
  resp.reverse()
  return {
    status: 200,
    data: resp,
  }
})