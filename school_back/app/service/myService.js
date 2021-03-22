const Service = require('egg').Service;

class lostService extends Service {



  async updataimg(data) {

    const row = {
      headimg: data.url
    };

    const options = {
      where: {
        id: data.u_id
      }
    };
    const result = await this.app.mysql.update('user', row, options);
    return result
  }

  async gaitel(tel, id) {
    let sql = "update user set tel=? where id=?";
    let list = await this.ctx.app.mysql.query(sql, [tel, id]);
    // console.log(list);
    return list.affectedRows;
  }

  async gaipwd(pwd, id) {
    let sql = "update user set pwd=? where id=?";
    let list = await this.ctx.app.mysql.query(sql, [pwd, id]);
    // console.log(list);
    return list.affectedRows;
  }

  async lostlist(id) {
    let sql = "select * from goods where user_id=?";
    let list = await this.ctx.app.mysql.query(sql, [id])
    console.log(list);
    return list;
  }

  async dellost(id) {
    let sql = "delete from goods where id=?";
    let list = await this.ctx.app.mysql.query(sql, [id])
    
    return list.affectedRows;
  }

  async tasklist(id) {
    let sql = "select * from task where user_id1=?";
    let list = await this.ctx.app.mysql.query(sql, [id])
    console.log(list);
    return list;
  }

  async complete(id) {
    let sql = "update task set status=2 where id=?";
    let list = await this.ctx.app.mysql.query(sql, [id])
    console.log(list);
    return list.affectedRows;
  }
}

module.exports = lostService;