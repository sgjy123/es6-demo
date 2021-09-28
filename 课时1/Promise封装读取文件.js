// 引入fs模块
const fs = require('fs');
// 调用方法读取文件

// 方法一
/* fs.readFile('./../public/为学.md', (err, data)=>{
	if(err) throw err;
	console.log(data.toString());
}); */

// 方法二
const P = new Promise(function(resolve, reject){
	fs.readFile('./../public/为学.md', (err, data)=>{
		if(err) reject(err);
		resolve(data);
	});
});
/* P.then(function(value){
	console.log(value.toString());
}, function(error){
	console.error(error);
}); */
P.then(function(value){
	console.log(value.toString());
}, function(error){
	console.error(error);
});
