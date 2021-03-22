let Controller = require("egg").Controller;
const fs = require('fs');
const path = require("path");
class lostController extends Controller {
	async shangchuan() {
		let name = this.ctx.request.query.name;
		let times = this.ctx.request.query.times;
		let spot = this.ctx.request.query.spot;
		let description = this.ctx.request.query.description;
		let phone = this.ctx.request.query.phone;
		let user_id = this.ctx.request.query.user_id;
		let data = {
			name:name,
			times:times,
			spot:spot,
			description:description,
			phone:phone,
			uid:user_id
		}
        let list = await this.ctx.service.lostService.shangchuan(data);
		this.ctx.response.body =list
	}
	async uploadImg() {
		const { ctx } = this;
		//记得去public下创建好upload文件夹
		const dest = '/public/upload/';
		const file = this.ctx.request.files[0];
		let to = path.dirname(__dirname) + dest + path.basename(file.filepath);
		await fs.copyFileSync(file.filepath, to);
		await fs.unlinkSync(file.filepath);

		//上传文件的网络访问 url
		const newUrl = "http://localhost:7001" + dest + path.basename(file.filepath);
		let upList = await ctx.service.lostService.uploadImg(newUrl)
		ctx.response.body = upList
	}

	async showlist() {
		let list = await this.ctx.service.lostService.showlist();
		
		this.ctx.response.body =list
	}



    
}
module.exports=lostController;