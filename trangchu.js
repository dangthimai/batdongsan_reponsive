var dangnhap=document.querySelector('.dangnhap');
var dangki=document.querySelector('.dangki');
var popupdangnhap=document.querySelector('.popupdangnhap');
var popupdangki=document.querySelector('.popupdangki');
var manhinhden=document.querySelector('.manhinhden');
var manhinhdendk=document.querySelector('.manhinhdendk');

hienthidangnhap=function(){
  console.log("asfsGva");

popupdangnhap.classList.remove('an');
popupdangnhap.classList.add('hien');

}
dangnhap.addEventListener('click',hienthidangnhap);
trangbandau=function(){
  console.log("trang bna dau");
  popupdangnhap.classList.add('an');
  popupdangnhap.classList.remove('hien');
}
manhinhden.addEventListener('click',trangbandau);


hienthidangki=function(){
  console.log("dk");
  popupdangki.classList.remove('an');
popupdangki.classList.add('hien');
  
}
dangki.addEventListener('click', hienthidangki);

trangbandaudk=function(){
  console.log("trang bna dau");
  popupdangki.classList.add('an');
  popupdangki.classList.remove('hien');
}
manhinhdendk.addEventListener('click',trangbandaudk);
function dangki(){
let a= $('#form').serialize();
console.log(a)
};
// js nbảavar
var bars= document.querySelector('.fa-bars');
var navhien=document.querySelector('.nav__hover');
var trangthai='in';
bars.addEventListener('click', function(){
  if(trangthai=="in"){
    console.log("aaaa");
    navhien.classList.add('divao');
    trangthai='out';
  }
  else{
    navhien.classList.remove('divao');
    trangthai='in';
  }
 
})