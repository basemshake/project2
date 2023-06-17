



function hello(){
    let tata2 = document.querySelector(".tata2")
    let tata3 = document.querySelector(".tata3")
      
    tata2. classList.toggle('funcshin2')
    tata3.classList.toggle('funcshin3')
    tata2.style.position="fixed"
    tata3.style.position="fixed"
   
}
hello();


function hello2(id){
    let img = document.querySelector(".img")
    img.src = id
    
}



function hello3(src){
    let xx = document.querySelector('#xx')
    let xxxx = document.querySelector('#xxxx')
    let span = document.querySelector('span')
    let tota1 = document.querySelector('.tota p span')
    let tota2 = document.querySelector('.tota span')
    let toto = document.querySelector('#toto')
    let toto1 = document.getElementsByTagName('a')
    
    let body = document.body;
   xx.style.background = src
   xxxx.style.background = src
   body.style.background = src
   span.style.color = src
   tota1.style.color = src
   tota2.style.color = src
   toto.style.color = src
   toto1.style.color = src
   
   window.onload()
 
}
function hello5(src){

    let img1=document.querySelector('.img1')
    let img=document.querySelector('.img')
    img1.src = src
}
 