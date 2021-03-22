const Service = require('egg').Service;

class lostService extends Service {


    async fabu(names, times,spot,description,phone,money,user_id1) {
      
            let sql= "insert into task(name,times,spot,description,phone,money,user_id1)values(?,?,?,?,?,?,?)";
            let list = await this.ctx.app.mysql.query(sql, [names,times,spot,description,phone,money,user_id1])
            // console.log(list);
            return list;
        
    }
    async showlist1() {
        let sql = "select * from task  where status = 0";
        let list = await this.ctx.app.mysql.query(sql)
        return list;
    }
   
    async status(id,user_id2) {
        let sql = `update  task set status=1,user_id2=${user_id2} where id = ${id}`;
        let list = await this.ctx.app.mysql.query(sql,[id,user_id2])
        console.log(list);
        return list;
    }
   
}

module.exports = lostService;