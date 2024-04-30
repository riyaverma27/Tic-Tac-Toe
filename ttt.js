var player1 = prompt("Please enter name of Player 1(X)");
var player2 = prompt("Please enter name of Player 2(O)");

const arr=["img.jpg","img2.jpg","img.jpg","img2.jpg","img.jpg","img2.jpg","img.jpg","img2.jpg","img.jpg"];
var win = [[0,1,2], [0,3,6], [0,4,8], [1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
var i=0;
var arrVal=[];
var flag=1;

function makeMove(val){
    if(flag==1){

        while(arrVal.includes(val)){
            alert("Please click on other box");
            return;
        }
        arrVal.push(val);
        var a=document.getElementById(`${val}`);
        
        a.innerHTML += `<img src="images/${arr[i]}" width="100px" height="100px">`;
                i++; 
            console.log(val);
            console.log(a.innerHTML);
        
        if(i>4){
            final();
            if(i==9 && document.getElementById("result").innerHTML==""){
                document.getElementById("result").innerHTML="Draw";
            }
        }
        
    }
}

function final(){
    // var win = [[0,1,2], [0,3,6], [0,4,8], [1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
    for (var i in win){
        var a=document.getElementById(`${win[i][0]}`).innerHTML;
        var b=document.getElementById(`${win[i][1]}`).innerHTML;
        var c=document.getElementById(`${win[i][2]}`).innerHTML;
        if((a==b && b==c)&&(a==`<img src="images/img.jpg" width=\"100px\" height=\"100px\">`)){
            document.getElementById("result").innerHTML=`${player1} wins :)`;
            flag=0;
        }
        else if((a==b && b==c)&&(a==`<img src="images/img2.jpg" width=\"100px\" height=\"100px\">`)){
            document.getElementById("result").innerHTML=`${player2} wins :)`;
            flag=0;
        }
    }

}



