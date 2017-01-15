var NCMB = require("ncmb");
var serialport = require("serialport");

var app_key = "756b1daf9fec0415980c27527ffc3bda367dac55314756ad760c3095e3983f90";
var client_key = "143921116f66ecb1f39062f21ff7bb7d5fbea8698b3146eb7b73d82b85abaa8c";
var ncmb = new NCMB(app_key, client_key);

var sp = new serialport("/dev/ttyACM0", {
  baudrate: 9600,
  parser:serialport.parsers.readline("\n")
});

var books = ncmb.DataStore("Books");

sp.on('data', function(data){
var distance = data;
var Books = new books({cm:distance});
      if(distance>=0&&distance<14){
        Books.set("position",6);
      }else if(distance>=14&&distance<28){
        Books.set("position",7);
      }else if(distance>=28&&distance<44){
        Books.set("position",8);
       }
    if(distance<44){
      Books.save()
        .then(function(cm){
         console.log(distance);
       })
      .catch(function(err){
         console.log(err);
       }); 
   }
 });