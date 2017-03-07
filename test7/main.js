
$(document).ready(function(){
	newGame();
});

function newGame(){

	//坐标
	i=5;
	j=5;

	//角度
	n=0;
	//初始化棋盘格子
	goBoardView(i,j);

}


//向上移动
function goBoardView(i,j){

	$("#grid-container").append("<div class='colorcell-"+i+"-"+j+"'><div class='bluediv'></div><div class='reddiv'></div></div>");
	var theNumberCell = $('.colorcell-'+i+'-'+j);

	theNumberCell.css('position','absolute');
	theNumberCell.css('top',getPosTop(i,j));
	theNumberCell.css('left',getPosLeft(i,j));

	theNumberCell.css('transform','rotate('+n+'deg)');

}

//旋转
function rotateBoardView(i,j,n){

	var theNumberCell = $('.colorcell-'+i+'-'+j);

	theNumberCell.css('transform','rotate('+n+'deg)');
}
	

function runInstrctions(){
	//获取用户指令
	var ins =  $("#instructionsId").val();

	//判断任务种类
	if( ins=='GO' ){

		//任务是否可行
		if(checkTheborder()){
			
			$(".colorcell-"+i+"-"+j).remove();

			blueDirection();

			//向蓝色边所面向的方向前进一格
			goBoardView(i,j);

		}
		else
		{
			alert("请在边框内移动！！！");
		}

	}
	else if( ins=='TUN LEF' ){
		
		//向左转（逆时针旋转90度）
		n -= 90;
		n = n%360;
		rotateBoardView(i,j,n);

	}
	else if( ins=='TUN RIG' ){

		//向右转（顺时针旋转90度）
		n += 90;
		n = n%360;
		rotateBoardView(i,j,n);

	}
	else if( ins=='TUN BAC' ){
		
		//向右转（旋转180度）
		n += 180;
		n = n%360;
		rotateBoardView(i,j,n);

	}
	else
	{
		alert("请输入正确的指令！！！");
	}
}

//计算div小方格距离顶端的距离
function getPosTop(i,j){

	return 71+i*48;
}

//计算div小方格距离左端的距离
function getPosLeft(i,j){

	return 71+j*48;
}

//检查是否可以移动
function checkTheborder(){

	if( i < 9 && i > 0 && j > 0 && j < 9){

		return true;
	}
	else if( n == 0 && i > 0 ){
		return true;
	}
	else if( n == 90 && j < 9 ){
		return true;
	}
	else if( n == 180 && i < 9 ){
		return true;
	}
	else if( n == -90 && j > 0){
		return true;
	}
	else if( n == 270 && j >0 ){
		return true;
	}

	return false;

}

//判断蓝色色块朝向
function blueDirection(){

	if( n < 0 ){

		n += 360;
	}

	if( n == 0 ){
		i -= 1;
	}
	else if( n == 90 ){
		j +=1;
	}
	else if( n == 180 ){
		i +=1;
	}
	else if( n == 270 ){
		j -=1;
	}

}