import db from './database/query'

export default defineEventHandler(async (event) => {
  try {
    const { name, message, present } = await readBody(event)
    if (!name || !message) {
      return {
        status: 400,
        data: {
          message: 'Bad Request',
        },
      }
    }
    await db(`INSERT INTO briyan (name, message, present) VALUES ('${name}', '${message}', ${present})`)
    //   const query = getQuery(event)
    return {
      status: 200,
      data: {
        message: 'Success',
      }
    }
  }
  catch (err) {
    throw new Error(err)
  }
})