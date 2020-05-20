import express from 'express'
import playlistController from './playlist.controller'

export const playlistRouter = express.Router()

playlistRouter.route('/')
    .get((req, res) => res.send('this is the playlist router'))