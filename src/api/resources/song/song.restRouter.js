import express from 'express'
import songController from './song.controller'

export const songRouter = express.Router()

songRouter.route('/')
    .get((req, res) => res.send('this is the song router'))