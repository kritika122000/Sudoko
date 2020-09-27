var board=new Array(9);
for(var i=0;i<9;i++){
	board[i]=new Array(9);
}
 var all0=[[0,0,0,9,1,0,5,8,0],[8,0,0,0,0,4,0,7,2],[0,2,0,0,0,0,1,0,0],[0,0,4,0,7,0,0,0,1],[1,9,0,2,3,8,0,6,5],[6,0,0,0,4,0,7,0,0],[0,0,9,0,0,0,0,1,0],[7,5,0,1,0,0,0,0,8],[0,1,8,0,6,7,0,0,0]];
 var all1=[[0,0,0,0,0,3,0,4,0],[0,0,0,0,0,6,0,0,0],[0,0,0,0,0,0,0,0,0],[0,1,4,0,0,0,8,0,0],[0,0,0,8,1,0,0,6,2],[0,9,0,7,0,0,3,0,1],[6,3,0,0,4,2,0,7,0],[7,0,5,9,8,1,6,2,3],[0,0,0,6,3,7,5,1,0]];
 var all2=[[0,0,0,0,0,0,2,5,0],[2,0,0,1,0,8,0,7,0],[0,6,0,0,0,9,1,0,4],[0,2,3,0,0,0,0,9,7],[0,5,6,8,9,7,0,0,0],[0,8,0,0,1,0,4,0,0],[3,0,0,7,0,0,9,8,6],[6,0,1,0,0,4,0,2,3],[0,9,2,0,0,6,0,4,1]];
 var all3=[[0,6,0,0,0,0,5,0,0],[0,0,0,0,0,0,0,0,0],[5,0,0,0,4,0,0,0,6],[0,1,0,0,0,5,8,0,0],[0,0,0,0,0,8,0,2,3],[7,0,8,2,0,0,0,0,0],[0,0,0,0,0,0,9,4,8],[8,0,0,9,3,0,0,0,2],[9,7,0,6,8,4,0,0,0]];
 var all4=[[3,0,6,5,0,8,4,0,0],[5,2,0,0,0,0,0,0,0],[0,8,7,0,0,0,0,3,1],[0,0,3,0,1,0,0,8,0],[9,0,0,8,6,3,0,0,5],[0,5,0,0,9,0,6,0,0],[1,3,0,0,0,0,2,5,0],[0,0,0,0,0,0,0,7,4],[0,0,5,2,0,6,3,0,0]];
function InternalsetBoard(board){
	for(var i=0;i<9;i++){
		for(var j=0;j<9;j++){
			if(document.getElementById(i * 9 + j).innerText != " " ){
			   board[i][j]=document.getElementById(i * 9 + j).innerText;	
			}
		else{
			board[i][j]=0;
		}
		}
	}	
//	alert(board[0][0]);
}


function getNew(){
	//alert(all[0][0]);
   var arr=[all0,all1,all2,all3,all4];
   var ran=Math.floor(Math.random()*5);
 //  alert(ran);
	for(var i=0;i<9;i++){
		for(var j=0;j<9;j++){
			if(arr[ran][i][j]!=0){
			    document.getElementById(i*9+j).innerText=arr[ran][i][j];
				document.getElementById(i*9+j).style.color="green";
			}	
			else{
				document.getElementById(i*9+j).innerText= " " ;
				
			}
		}
	}
}


function isSolvable(board,i,j,val){
	//alert("hey");
	for(var k=0;k<9;k++){
		if(board[k][j]==val){
			return false;
		}
	}
	for(var k=0;k<9;k++){
		if(board[i][k]==val){
			return false;
		}
	}
	//var rn=Math.sqrt(9);
    var i1=i - i % 3;
    var j1=j - j % 3;
    
    for(var n=i1;n<i1+3;n++){
		for(var m=j1;m<j1+3;m++){
			if(board[n][m]==val){
				return false;
			}
		}
	}
return true;	
}

function show(board){
//	alert("k");
	for(var i=0;i<9;i++){
		for(var j=0;j<9;j++){
		//	if(document.getElementById(i * 9 + j).innerText != " " ){
				document.getElementById(i*9+j).innerText=board[i][j];
		//	}
		//	else{
		//		document.getElementById(i*9+j).innerText=board[i][j];
		//			document.getElementById(i*9+j).style.color="red";		
	//		}
			
		}
	}
	
}

function helper(board,i,j){
	if(i==9){
		//alert("hey");
		show(board);
		//exit();
		return;
	}
	if(j==9){
		helper(board,i+1,0);
		return ;
		
	}
	if(board[i][j]!=0){
		//alert(0);
		helper(board,i,j+1)
		return ;
		
	}
	
	for(var val=1;val<=9;val++){
		if(isSolvable(board,i,j,val) == true){
			board[i][j]=val;
		//	document.getElementById(i*9+j).innerText=board[i][j];
			helper(board,i,j+1)
			board[i][j]=0;
		}
	}
	//console.log("hey");
//	return false;
}


function solve(){
	InternalsetBoard(board);
	var t=helper(board,0,0);
	//alert("hell");
//show();
}

