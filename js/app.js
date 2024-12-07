function clock(){
    const time = new Date();
    let hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    let amOrPm ='AM'
    if(hours>12){
        amOrPm ="PM"
        hours = hours - 12

    }
    if(hours == 0){
        hours = 12
    }
   document.getElementById('show-clock').innerText = hours +":"+ minutes+ ":" +seconds +" "+ amOrPm

}
setInterval(clock , 1000)

