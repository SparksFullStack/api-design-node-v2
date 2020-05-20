import express from 'express'
import setupMiddware from './middleware'
import { restRouter } from './api'
import { connect } from './db'
import { signin, protect } from './api/modules/auth'
// Declare an app from express
const app = express()

app.use('/rest', restRouter)
app.get('*', (req, res) => {
    res.send('testeroo')
})

export default app
