let arrow=document.querySelector('.arrow');
window.addEventListener('scroll',function(){
    if(this.scrollY > 200){
        arrow.style.display='block';
    }else{
        arrow.style.display='none';
    }

})
arrow.addEventListener('click',function(){
    window.scrollTo(0,0);
})
