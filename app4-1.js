var app=express();

app.use(function(req,resm,next){
    // var person={name:"소녀시대",age:20};
    // resm.writeHead('200',{'Content-Type':'application/json;charset=utf8'});
    // resm.end(person);

    // var person={name:"소녀시대",age:20};
    // var personStr=JSON.stringify(person);
    // resm.writeHand('200',{'Content-Type':'application/json;charset=utf8'});
    // resm.end(personStr);

    // var person={name:'소녀시대',age:20};
    // var personStr=JSON.stringify(person);
    // resm.end(personStr);

    // var person={name:'소녀시대',age:20};
    // var personStr=JSON.stringify(person);
    // resm.send(personStr);

    // var person={name:'소녀시대',age:20};
    // resm.send(person);

    // req.user='suney';
    // resm.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
    // resm.end('<h1>Express 서버에서 '+req.user+'풀 res,wirteHead와 end로 응답한 결과입니다.</h1>');

    req.user='sunny';
    resm.send('<h1>Express서버에서'+req.user+'을 send로 응답한 결과입니다.</h1>');
});