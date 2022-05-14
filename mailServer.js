var fs = require("fs"); 
var nt = require("net");

var srv=nt.createServer();
srv.on("connection",Connection);

srv.listen(8080,function(){
	console.log("mail server")
});

function Connection(connection){
	var d = Date();
	console.log(d);
connection.on('data',onData);
connection.on('close',onClose);
connection.on('error',onError);
	function onData(data){
		var v="";
		vv=data.toString();
		vv=vv.replace(/;/g,"\n",true);
		vv=connection.remoteAddress+" : " + vv;
		console.log(vv);
		connection.end("\n\rok\n\r");
		connection.destroy();
	}
	function onClose(){
		var d = Date();
		console.log(d);
		connection.destroy();
	}
	function onError(data){
		console.log(data);
		connection.destroy();
	}



}
