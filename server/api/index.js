import db from './database/query'

export default defineEventHandler(async (event) => {
  // const body = await readBody(event)
  const resp = await db('SELECT * FROM briyan')
  // console.log(resp[0].id)
  // const query = getQuery(event)
  return {
    test: 'Hellow ' + resp[0].name,
  }
})