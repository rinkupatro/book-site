function mouse(){
    var main = document.querySelector("#page1")
 var curcle = document.querySelector("#goal")
main.addEventListener("mousemove",function(ball){
curcle.style.left = ball.x+"px"
curcle.style.top = ball.y+"px"

})


}
mouse()
let btn = document.querySelector("#btn")
let menu = document.querySelector("#menubar2")
let vel = 0
btn.addEventListener("click",function(){
    if(vel == 0){
        menu.style.marginLeft = "85%";
vel = 1
    }
else{
    menu.style.marginLeft = "100%";
vel = 0
}
    })
