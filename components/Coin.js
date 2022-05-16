
AFRAME.registerComponent("coins", {
    init:function(){
        for(var i=1;i<=20;i++){
            const id=`hurdle${i}`;

            
            const posX=Math.floor(Math.random()*3000 + -1000)
            const posY=Math.floor(Math.random()*2 + -1)
            const posZ=Math.floor(Math.random()*3000 + -1000)

            const position={x:posX,y:posY,z:posZ}

            //Call the Function
            this.coins(id,position)

        }
    },

    coins:function(id,position){
        //Get terrain elements
        const terrainE1=document.querySelector("#terrain")
        
        //Create bird model entity
        var coinE1=document.createElement("a-entity")
        
        //Setting multiple attributes
        coinE1.setAttribute("id",id)

        coinE1.setAttribute("position",position)
        coinE1.setAttribute("material","color","#ff9100",)
        coinE1.setAttribute("geometry",{primitive:"cricle",radius:1})
        coinE1.setAttribute("animation",{
            property:"rotation",
            to:"0 360 0",
            loop:"true",
            dur:"1000"
        })

        coinE1.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:2,
        })

        //Append bird entity as the child
        terrainE1.appendChild(coinE1)
    }
})