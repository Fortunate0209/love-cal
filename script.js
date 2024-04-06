

function check(){
    if (inputOne.value === '' || inputTwo.value === ''){
        // alert ('can not be blank')
        errorMsg.style.display= 'block'
        show.style.display='none '
    
    } else {
        if (inputOne.value === 'Ola' && inputTwo.value === 'Juwon'){
            show.innerHTML = ('100%')
            show.style.display='none'
            document.getElementById('inputOne').value=''
            document.getElementById('inputTwo').value=''
        } else {
            errorMsg.style.display='none'
            show.style.display='block'
            let ans= Math.round(Math.random()*100)
            console.log(ans + '%');
            // document.getElementById('show').innerHTML= (ans + '%')
            show.innerHTML =(ans + '%')
            document.getElementById('inputOne').value=''
            document.getElementById('inputTwo').value=''
        }

        
    }
    setTimeout(()=>{
        errorMsg.style.display='none'
        show.style.display='none '
    },7000)
}

