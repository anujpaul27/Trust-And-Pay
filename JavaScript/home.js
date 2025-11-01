// Login validation 
let number = document.getElementById('number').value
let pin = document.getElementById('pin').value 
document.getElementById('login-btn').addEventListener('click',function(){
    
    if (number === '01646267167' && pin === '1144')
    {
        window.location.href = 'home.html'
    }
    else 
    {
        alert('Something is wrong!. try again')
    }
})


// Show Balance 
balance = 1200

const val= document.getElementById('balance')
val.addEventListener('click',function(){
   val.innerText = balance
   console.log("Hello Bs")
})