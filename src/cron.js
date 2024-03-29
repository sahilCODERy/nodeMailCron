const cron = require('node-cron');
const email = require('./email');

const job = cron.schedule('*/10 * * * *', () => {
    email.sendMail();
})
const job2 = cron.schedule('30 21 * * *', () => {
    email.sendMail();
})
const job3 = cron.schedule('00 22 * * *', () => {
    email.sendMail();
})

module.exports = [ job, job2, job3 ]
