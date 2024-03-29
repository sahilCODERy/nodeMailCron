const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();

app.use(router.routes())

router.get('/', (ctx, next) => {
    return ctx.body = "Hello"
})

let jobs = require('./cron')
jobs.forEach((cron) => {
    cron.start();
});

app.listen(process.env.PORT, ()=>{
    console.log(`Running at ${process.env.PORT}`)
})