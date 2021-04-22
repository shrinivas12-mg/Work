var cors = require("cors");
var express = require("express");
var favicon = require("serve-fevicon");
var path =require("pth");
var logger=require("morgan");
var cookieParser=require("cookie-parser");
var bodyParser=require("body-parser");
var index=require("./routes/index");
var q=require("q");
var _=require("lodash");
var app=require("express")();
app.use(cors())

app.listen(8080);

app.set('views',path.join(_dirname,'views'));
app.set('view engine','hjs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(expree.static(path.join(_dirname,'public')));

app.use('/',index);

app.use(function(req,res,next)
{
  var err=new Error("Not found");
  err.status=404;
  next(err);
});

app.use(function(req,res,next)
{
  res.locals.message=err.message;
  res.locals.error=req.app.get('env')==='development'?err:{};
  res.status(err.status||500);
  res.render("error");
});

module.exports=app;