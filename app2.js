var app=exports();

app.use(function(req,res,next){
    console.log('첫번째 미들웨어에서 요청을 처리함');

    res.writeHead('200',{'Content-Type':'text/html;charset=utf-8'});
    res.end('<h1>Express 서버에 응답한 결과입니다.</h1>');
});