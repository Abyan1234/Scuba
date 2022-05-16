AFRAME.registerComponent("collide", {
    schema:{
        elementId:{type:"string",default:"#coins"},
    },
    update:function(){
        this.isCollided(this.data.elementId)
    },
    
    isCollided:function(elementId){
        const element=document.querySelector(elementId)
        element.addEventListener("collide",(e)=>{
            if(elementId.includes("#coin")){
                console.log(elementId + " collision")
            }else if(elementId.includes("#hurdle")){
                console.log("coinCollision")
            }
        })
    }
    
    }
    )