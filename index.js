import express from 'express'
import router from './src/models/user/user.router.js'
const app = express()
const port = 2000

app.use(express.json());
app.use('/users',router)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))