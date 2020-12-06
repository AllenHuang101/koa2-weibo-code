/**
 * @description jest server
 * @author Allen H.
 */

 const request = require('supertest')
 const server = require('../src/app').callback()

 module.exports = request(server)