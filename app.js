const clockP=document.querySelector("#clock")//시계

const img=["0.jpg","1.jpg","2.jpg"]//랜덤 배경화면
const chooseImg=img[Math.floor(Math.random()*img.length)] 
const bgImg=document.createElement("img")
bgImg.src=`img/${chooseImg}`
console.log(chooseImg)

function clock(){
    const today=new Date()
    const hour=String(today.getHours()).padStart(2,"0")
    const minutes=String(today.getMinutes()).padStart(2,"0")
    const second=String(today.getSeconds()).padStart(2,"0")
    clockP.innerText=`${hour}:${minutes}:${second}`
}

document.body.appendChild(bgImg)
clock()
setInterval(clock,1000)

