const santa1 = document.getElementById("santa1");
const santa2 = document.getElementById("santa2");
const santa3 = document.getElementById("santa3");
const santa4 = document.getElementById("santa4");


let isDisplayed = true;

santa1.addEventListener("click", function(){
    if(isDisplayed){
this.className = "hidden";
isDisplayed=false
    }else{
        this.classList.remove("hidden");
        isDisplayed=true;
        
    }
})
santa2.addEventListener("click", function(){
    if(isDisplayed){
        this.className = "hidden";
        isDisplayed=false
            }else{
                this.classList.remove("hidden");
                isDisplayed=true;
                
            }
})
santa3.addEventListener("click", function(){
    if(isDisplayed){
        this.className = "hidden";
        isDisplayed=false
            }else{
                this.classList.remove("hidden");
                isDisplayed=true;
                
            }
})
santa4.addEventListener("click", function(){
    if(isDisplayed){
        this.className = "hidden";
        isDisplayed=false
            }else{
                this.classList.remove("hidden");
                isDisplayed=true;
                
            }
})