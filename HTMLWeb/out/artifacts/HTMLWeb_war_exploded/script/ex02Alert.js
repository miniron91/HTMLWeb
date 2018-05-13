/**
 *
 */

var hello = function(){
//	alert('Hello JavaScript~~');
}
var showMsg = function(msg){
//	alert(msg);
    var obj = window.document.getElementById('result');
    //obj가 div객체
    obj.innerHTML="<h2>"+msg+"</h2>";
}

//hideMsg함수를 구성하세요
//id가 result인 객체를 찾아서 해당 객체 안에 빈문자열('')을 넣어
//기존에 썻던 문장을 초기화하세요.


var hideMsg = function(){
    var obj = window.document.getElementById('result');
    obj.innerHTML="";
}