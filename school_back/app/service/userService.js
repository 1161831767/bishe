const Service = require('egg').Service;

class userService extends Service {

    // //登录
    async login(username, pwd) {
        let sql = "select id,username,headimg,name,tel,pwd from user where username=? and pwd=?";
        //判断数据库是否有该用户
        let list = await this.ctx.app.mysql.query(sql, [username, pwd]);
        return list;
    }

    async zhuce(username, pwd,name,call) {
        let sql = "select username from user where username=?"
        let list = await this.ctx.app.mysql.query(sql, [username]);
        // console.log(list.length)
        if (list.length === 0) {
            let sql1 = "insert into user(username,pwd,name,tel)values(?,?,?,?)";
            let list1 = await this.ctx.app.mysql.query(sql1, [username, pwd,name,call])
            // console.log(list);
            return list1.affectedRows;
        }else{
            return "用户名已存在"
        }
    }
   
}

module.exports = userService;