const Service = require('egg').Service;

class lostService extends Service {


    async shangchuan(data) {
        const result = await this.app.mysql.insert('goods',
         { name: `${data.name}`,times: `${data.times}`,
         spot: `${data.spot}`,
         description: `${data.description}`,
         phone:` ${data.phone}`,user_id: `${data.uid}`,})
            // let sql= "insert into goods(name, times,spot,description,phone,user_id)values(?,?,?,?,?,?,?)";
            // let list = await this.ctx.app.mysql.query(sql, [name, times,spot,description,phone,user_id])
            // console.log(list);
            const insertSuccess = result.affectedRows === 1;
            return result;
        
    }

    async uploadImg(url) {
        let sql = "select * from goods"
        let list = await this.ctx.app.mysql.query(sql)
        let num = list.slice(-1)[0].id;
        // console.log(num)
        let sql2 = 'update goods set url=? where id=?'
        let list2 = await this.ctx.app.mysql.query(sql2, [url, num])
    }

    async showlist() {
        let sql = "select * from goods ";
        let list = await this.ctx.app.mysql.query(sql)
        return list;
    }
   
}

module.exports = lostService;