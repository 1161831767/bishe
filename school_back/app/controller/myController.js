let Controller = require("egg").Controller;
const fs = require('fs');
const path = require("path");
class lostController extends Controller {


//修改头像
    async updataimg() {
        const { ctx } = this;
        //记得去public下创建好upload文件夹
        // var bitmap = new Buffer(base64str, 'base64');
        // fs.writeFileSync(file, bitmap);
        console.log("111",this.ctx.request.files[0]);
        const dest = '/public/upload/';
        const file = this.ctx.request.files[0];
        let to = path.dirname(__dirname) + dest + path.basename(file.filepath);
        await fs.copyFileSync(file.filepath, to);
        await fs.unlinkSync(file.filepath);
        let url1 = this.ctx.request.url
        let id = url1.split('/')
        let len = id.length
        
        const newUrl = "http://localhost:7001" + dest + path.basename(file.filepath);
        //上传文件的网络访问 url
        let data = {
            u_id:id[len-1],
            url:newUrl
        }
        
        let upList = await ctx.service.myService.updataimg(data)
        
        ctx.response.body = upList
    }


//修改电话
    async gaitel() {
        let tel= this.ctx.request.body.tel;
        let id= this.ctx.request.body.id;

		let list = await this.ctx.service.myService.gaitel(tel,id);
		this.ctx.response.body =list
	}
    async gaipwd() {
        let pwd= this.ctx.request.body.pwd;
        let id= this.ctx.request.body.id;

		let list = await this.ctx.service.myService.gaipwd(pwd,id);
		this.ctx.response.body =list
	}
    
	async lostlist() {
		let id = this.ctx.request.query.id;
		
        let list = await this.ctx.service.myService.lostlist(id);
		this.ctx.response.body =list
	}
    //删除失物招领
	async dellost() {
		let id = this.ctx.request.query.id;
        let list = await this.ctx.service.myService.dellost(id);
		this.ctx.response.body =list
	}

    async tasklist() {
		let id = this.ctx.request.query.id;
		
        let list = await this.ctx.service.myService.tasklist(id);
		this.ctx.response.body =list
	}

    async complete() {
		let id = this.ctx.request.query.id;
        let list = await this.ctx.service.myService.complete(id);
		this.ctx.response.body =list
	}

}
module.exports = lostController;