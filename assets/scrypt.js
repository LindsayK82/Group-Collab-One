// put before api links https://russelldev-cors-anywhere.herokuapp.com/
const aries = document.querySelector('b1');
const taurus = document.querySelector('b2');
const gemini = document.querySelector('b3');
const cancer = document.querySelector('b4');
const leo = document.querySelector('b5');
const virgo = document.querySelector('b6');
const libra = document.querySelector('b7');
const scorpio = document.querySelector('b8');
const sagittarius = document.querySelector('b9');
const capricorn = document.querySelector('b10');
const aquarius = document.querySelector('.b11');
const pisces = document.querySelector('b12');

const body = document.querySelector('body');
const Aq = document.createElement('h1');
var dailyhoro = document.createElement('p')



const signAq = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=aquarius&type=daily&day=today`)
    .then(response => response.json())
    
    .then(data => {
       var signdata = data; 
       
       var horoSign = signdata[0].sign
       var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
       var horotext = signdata[0].text
       var horoStr = horotext.split(/<.*?>/gm).join('')
       console.log(horoStr)
        console.log(horoCapital)

        Aq.textContent = horoCapital
        dailyhoro.textContent = horoStr;
        
       body.appendChild(Aq);
       body.appendChild(dailyhoro);
       
       
    })

}

aquarius.addEventListener('click' , function () {signAq()})


