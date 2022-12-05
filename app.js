let userTemp = document.getElementById('temp').value
let dropDown = document.getElementById('values')

let answer = document.querySelector('.answer')

let submitBtn = document.getElementById('btn')

let convertedTemp;

submitBtn.onclick = function(){
  
    if(dropDown.value === 'celsius'){
        convertedTemp =toFar(userTemp)
        answer.textContent = `${convertedTemp}°F `
        
        
    }

    else if(dropDown.value = 'fahrenheit'){
        convertedTemp =toCel(userTemp)
        answer.textContent = `${convertedTemp}°C `

    }
    

   

   
}


function toCel(t){
    return 5/9*(t - 32)
}



function toFar(t){
    return  (t * 9/5) + 32 
}


