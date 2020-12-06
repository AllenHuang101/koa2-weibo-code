/** 
 * @description sequelize 同步
 * @author Allen H.
*/

const seq = require('./seq')

// 測試連接
seq.authenticate().then(() => {
    console.log('auth ok')
}).catch(()=>{
    console.log('auth error')
})

// 執行同步
seq.sync({force: true}).then(() => {
    console.log('sync ok')
    process.exit()
})