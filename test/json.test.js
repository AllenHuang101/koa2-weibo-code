/**
 * @description json demo
 * @author Allen H.
 */

const { TestScheduler } = require("jest")

 const server = require('./server')

 test('json 接口返回數據格式正確', async() => {
     const res = await server.get('/json')
     expect(res.body).toEqual({
         title: 'koa2 json'
     })

     expect(res.body.title).toBe('koa2 json')
 })