const p_btns = document.querySelector(".portfolio-buttons");

const p_btn  = document.querySelectorAll(".p-btn");

const overlay = document.querySelectorAll(".overlay-image"); 

const cgpaData = document.querySelectorAll(".ViewCgpa");

p_btns.addEventListener('click',(e)=> {

    const p_btn_data = e.target; 

    if(!p_btn_data.classList.contains("p-btn")) return;
   
    p_btn.forEach((element)=> {
       
        element.classList.remove("p-btn-active");
   
    });
  
    p_btn_data.classList.add("p-btn-active");

    const p_btn_values = p_btn_data.dataset.btnNum;
    
    const overlayImg = document.querySelectorAll(`.p-btn--${p_btn_values}`);

    overlay.forEach((element)=> {
        
        element.classList.add("p-btn-not-active");
   
    });
   
    cgpaData.forEach((element)=> {
    
        element.classList.add("p-btn-not-active");

    });

    overlayImg.forEach((element)=> {    
    
        element.classList.remove("p-btn-not-active")
    
    });
    
});