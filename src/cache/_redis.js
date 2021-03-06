/** 
 * @description 連接 redis 的方法 get set
 * @author Allen H.
*/

const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

// 創建客戶端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClient.on('error', err => {
    console.log('redis error', err)  
})

/**
 *
 * @param {*} key 鍵
 * @param {*} val 值
 * @param {number} timeout 過期時間, 單位 s
 * */
function set(key, val, timeout = 60 * 60) {
    if (typeof val === 'object') {
        val = JSON.stringify(val)
    }
    redisClient.set(key, val)
    redisClient.expire(key, timeout)
}

/**
 * redis get
 * @param {string} key 鍵
 */
function get(key) {
    const promise = new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err)
                return
            }
            if (val == null) {
                resolve(null)
                return 
            }
            try {
                resolve(JSON.parse(val))
            } catch(ex) {
                resolve(val)
            }
        })
    })
    return promise
}

module.exports = {
    set,
    get
}