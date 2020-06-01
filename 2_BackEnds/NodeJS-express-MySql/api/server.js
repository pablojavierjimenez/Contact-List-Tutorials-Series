// @ts-nocheck
const express = require('express');
const routes = require('./routes.js');
const CONFIG = require('./config.js');

const API_URL = CONFIG.BASE_URL+CONFIG.API_URL_VERSION;
const server = express();
server.use(express.json());

server.use(API_URL, routes);

module.exports = server;
