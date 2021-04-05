var app=express();

app.use(function(req,resm,next){
    console.log('첫번쨰 미들웨어에서 요청을 처리함');

    var person={name:'방탄소년단',age:20};

    var person={name:'방탄소년단',age:20};
    resm.send(person);

    var personStr=JSON.stringify(person);
    resm.send(personStr);

    resm.writeHead('200',{"context-Type":"application/json; charset=utf8"});
    resm.write(personStr);
    resm.end();
});