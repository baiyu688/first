const bu1= document.getElementById('xia');
    bu1.onclick=function(){
    location.href="./index.html";
};
const bu2=document.getElementById('bei');
bu2.addEventListener('click',function(){
	if(document.body.classList.contains('deep')){
		document.body.classList.remove('deep');
		bu2.textContent="点击查看贝贝背景";}
	else{document.body.classList.add('deep');
		bu2.textContent='点击换回原背景';
	}
});
