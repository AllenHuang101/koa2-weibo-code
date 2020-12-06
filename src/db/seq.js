/**
 * @description sequelize 實例
 * @author Allen H.
 */
const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { isProd } = require('../utils/env')
const { host, user, password, database } = MYSQL_CONF

const conf = {
    host,
    dialect: 'mysql'
}

if (isTest) {
    conf.logging = () => {}
}

// 線上環境，使用連接池
if (isProd) {
    conf.pool = {
        max: 5,      // 連接池中最大的連接數量
        min: 0,      // 最小
        idle: 10000  //如果一個連線 10 秒沒被使用, 則釋放
    }
}

const seq = new Sequelize(database, user, password, conf)

module.exports = seq




