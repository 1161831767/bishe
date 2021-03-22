//router.js
module.exports = app=> {
	const { router, controller } = app;

	router.post("/zhuce",  controller.userController.zhuce);
	router.post("/login",  controller.userController.login);
	router.get("/shangchuan",  controller.lostController.shangchuan);
	router.post("/uploadImg",  controller.lostController.uploadImg);
	router.get("/showlist",  controller.lostController.showlist);
	router.post("/fabu",  controller.taskController.fabu);
	router.get("/showlist1",  controller.taskController.showlist1);
	router.get("/status",controller.taskController.status)
	router.post("/updataimg",  controller.myController.updataimg);
	router.post("/gaitel",  controller.myController.gaitel);
	router.post("/gaipwd",  controller.myController.gaipwd);
	router.get("/lostlist",  controller.myController.lostlist);
	router.get("/dellost",  controller.myController.dellost);
	router.get("/tasklist",  controller.myController.tasklist);
	router.get("/complete",  controller.myController.complete);
	 

	
};