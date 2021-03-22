let Controller = require("egg").Controller;
const fs = require('fs');
const path = require("path");
class userController extends Controller {
	async zhuce() {
		let username = this.ctx.request.body.username;
		let pwd = this.ctx.request.body.pwd;
		let name = this.ctx.request.body.name;
		let call = this.ctx.request.body.call;

        let list = await this.ctx.service.userService.zhuce(username,pwd,name,call);
		this.ctx.response.body =list
	}

	async login() {
		let username = this.ctx.request.body.username;
		let pwd = this.ctx.request.body.pwd;

        let list = await this.ctx.service.userService.login(username,pwd);
		this.ctx.response.body =list
	}



}
module.exports=userController;