import app from './app'
import mongoose from 'mongoose'
import config from './config'

// getting-started.js

async function server() {
  try {
    await mongoose.connect(config.database_url_local as string)
    console.log('connected to MongoDB')
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

server().catch((err) => console.log(err))
