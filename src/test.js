const mount = require('koa-mount');
const Koa = require('koa');

const a = new Koa();
a.context.test = "hallo";

a.use(async function (ctx, next){
    ctx.body = "test:" + ctx.test;
    return next();
});

// app

const app = new Koa();

app.use(mount('/hello', a));
app.listen(3000)
a.listen(3001);
