import { MongoHelper } from '../external/repositories/mongodb/helpers/mongo-helper'

MongoHelper.connect('mongodb://192.168.0.76:27017/local') //process.env.MONGO_URL
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen( 3030 || 5000, () => { console.log(`Server running at http://localhost:3030`) }) //process.env.PORT
  })
  .catch(console.error)