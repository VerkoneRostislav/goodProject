let menu=document.querySelector(".fixed-menu")

menu.addEventListener('click', function(event){
  let clickTarget=event.target;
  let activeBtn=document.querySelector.apply('.active');

  if (clickTarget.classList.contains('nav-link')){
    clickTarget.classList.add('active');
    activeBtn.classList.remove('active');
  }
});

let classLink='.main-link';
window.onscroll=function(){
  
}


