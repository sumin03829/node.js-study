var app=express();

app.use(function(req,res,next){
    console.log('첫번쨰 미들웨어에서 요청을 처리함');

    res.redirext('http://google.co.kr');
});