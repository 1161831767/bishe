let Controller = require("egg").Controller;
const fs = require('fs');
const path = require("path");
class lostController extends Controller {
	async fabu() {
		let names= this.ctx.request.body.names;
		let times = this.ctx.request.body.times;
		let spot = this.ctx.request.body.spot;
		let description = this.ctx.request.body.description;
		let phone = this.ctx.request.body.phone;
		let money = this.ctx.request.body.money;
		let user_id1 = this.ctx.request.body.user_id1;

        let list = await this.ctx.service.taskService.fabu(names,times,spot,description,phone,money,user_id1);
		this.ctx.response.body =list
	}
	async showlist1() {
		let list = await this.ctx.service.taskService.showlist1();
		this.ctx.response.body =list
	}

    async status() {
        let id= this.ctx.request.query.id;
        let user_id2= this.ctx.request.query.user_id2;

		let list = await this.ctx.service.taskService.status(id,user_id2);
		this.ctx.response.body =list
	}
	



    
}
module.exports=lostController;