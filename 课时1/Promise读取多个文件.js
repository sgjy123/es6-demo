// 引入 fs 模块
const fs = require('fs');

// 原始方式
/* fs.readFile('./../public/为学.md', (err, data1)=>{
	fs.readFile('./../public/江南.md', (err, data2)=>{
		fs.readFile('./../public/咏鹅.md', (err, data3)=>{
			let result = data1 + '\r\n\n' + data2 + '\r\n\n' + data3;
			console.log(result);
		});
	});
}); */

// 使用promise实现
const p = new Promise(function(resolve, reject) {
	fs.readFile('./../public/为学.md', (err, data) => {
		resolve(data);
	});
});
p.then((value) => {
	return new Promise(function(resolve, reject) {
		fs.readFile('./../public/江南.md', (err, data) => {
			resolve([value, data]);
		});
	});
}).then((value) => {
	return new Promise(function(resolve, reject) {
		fs.readFile('./../public/咏鹅.md', (err, data) => {
			value.push(data);
			resolve(value);
		});
	});
}).then((value)=>{
	console.log(value.join('\r\n\n'));
});
