const fs = require('fs');
// 读取文件
function readJN() {
	return new Promise((resolve, reject) => {
		fs.readFile("../public/江南.md", (err, data) => {
			if (err) reject(err);
			resolve(data);
		})
	})
}

function readWX() {
	return new Promise((resolve, reject) => {
		fs.readFile("../public/为学.md", (err, data) => {
			if (err) reject(err);
			resolve(data);
		})
	})
}

function readYE() {
	return new Promise((resolve, reject) => {
		fs.readFile("../public/咏鹅.md", (err, data) => {
			if (err) reject(err);
			resolve(data);
		})
	})
}

async function mian() {
	let jn = await readJN();
	let wx = await readWX();
	let ye = await readYE();
	console.log(jn.toString());
	console.log(wx.toString());
	console.log(ye.toString());
}
mian();