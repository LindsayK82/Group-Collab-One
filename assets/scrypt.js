// put before api links https://russelldev-cors-anywhere.herokuapp.com/
const aries = document.getElementById('b1');
const taurus = document.getElementById('b2');
const gemini = document.getElementById('b3');
const cancer = document.getElementById('b4');
const leo = document.getElementById('b5');
const virgo = document.getElementById('b6');
const libra = document.getElementById('b7');
const scorpio = document.getElementById('b8');
const sagittarius = document.getElementById('b9');
const capricorn = document.getElementById('b10');
const aquarius = document.getElementById('b11');
const pisces = document.getElementById('b12');

const body = document.querySelector('body');
const horoSignData = document.createElement('h1');
var dailyhoro = document.createElement('p')
horoSignData.style.backgroundColor = 'silver';
dailyhoro.style.backgroundColor = 'silver';
var PLaquarius = 'PLjOdFlSYCsZa8T4TBnNiPDKMJjtBejzlJ'
var PLcapricorn ='PLjOdFlSYCsZaNSNnF7p0AVbJKUWbf1FpT'
var PLleo = 'PLjOdFlSYCsZa5YvAqk6IAoTq9A5oFEnTQ'
var PLpisces = 'PLjOdFlSYCsZZDRX2lblTVtzTJs81-N_hs'
var PLtaurus = 'PLjOdFlSYCsZYpqRhAQcvVnVVJ0K0e6eGu'
var PLsagittarius = 'PLjOdFlSYCsZbJ_qhkcdq-Rj86xBlgog_4'
var PLvirgo = 'PLjOdFlSYCsZb2H8y8sMPzdIweDX5O0Meb'
var PLgemini = 'PLjOdFlSYCsZZewgfb00iHkhl2eRFuJ2LV'
var PLaries = 'PLjOdFlSYCsZbkyebxcOii6AyxshEOkeUU'
var PLlibra = 'PLjOdFlSYCsZb4klE2-YGA1rS-gavOpxZL'
var PLcancer = 'PLjOdFlSYCsZaWxuQ5ZcWNGbl2PFk9SqV2'
var PLscorpio = 'PLjOdFlSYCsZY0Gps3un7gz0E1i3hS6dF1'
var options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b162444521msh0778d5dface58a5p1bf93ejsn1f79ea6325b3',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const zizi = (zodiac, string) => {
fetch(`https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=${zodiac}&part=snippet&maxResults=50`, options)
  .then(response => response.json())
  
  .then(response => {
  var playlist = response.items[0].snippet.playlistId
  var link = `https://www.youtube.com/playlist?list=${playlist}`
  var anchor = document.createElement('a')
  anchor.setAttribute('href', link)
  anchor.setAttribute('target', "_blank")
  anchor.innerHTML = string
  body.appendChild(anchor)
  })
};


aries.addEventListener("click", function () {zizi(PLaries, "Aries Playlist") })
taurus.addEventListener("click", function () {zizi(PLtaurus, "Taurus Playlist") })
gemini.addEventListener("click", function () {zizi(PLgemini, "Gemini Playlist") })
cancer.addEventListener("click", function () {zizi(PLcancer, "Cancer Playlist") })
leo.addEventListener("click", function () {zizi(PLleo, "Leo Playlist") })
virgo.addEventListener("click", function () {zizi(PLvirgo, "Virgo Playlist") })
sagittarius.addEventListener("click", function () {zizi(PLsagittarius , "Sagittarius Playlist") })
pisces.addEventListener("click", function () {zizi(PLpisces, "Pisces Playlist") })
libra.addEventListener("click", function () {zizi(PLlibra, "Libra Playlist") })
scorpio.addEventListener("click", function () {zizi(PLscorpio, "Scorpio Playlist") })
capricorn.addEventListener("click", function () {zizi(PLcapricorn, "Capricorn Playlist") })
  



aquarius.addEventListener("click", function () {
    zizi(PLaquarius, "Aquarius Playlist") 
});

const signAr = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=aries&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('#b1').forEach(item => {
    item.addEventListener('click', function () { signAr() })
})

const signTa = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=taurus&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('#b2').forEach(item => {
    item.addEventListener('click', function () { signTa() })
})

const signGe = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=gemini&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('#b3').forEach(item => {
    item.addEventListener('click', function () { signGe() })
})

const signCa = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=cancer&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('#b4').forEach(item => {
    item.addEventListener('click', function () { signCa() })
})

const signLeo = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=leo&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('#b5').forEach(item => {
    item.addEventListener('click', function () { signLeo() })
})

const signVi = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=Virgo&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('#b6').forEach(item => {
    item.addEventListener('click', function () { signVi() })
})

const signLi = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=libra&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('#b7').forEach(item => {
    item.addEventListener('click', function () { signLi() })
})

const signSc = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=scorpio&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('#b8').forEach(item => {
    item.addEventListener('click', function () { signSc() })
})

const signSa = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=sagittarius&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('#b9').forEach(item => {
    item.addEventListener('click', function () { signSa() })
})

const signCap = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=capricorn&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('#b10').forEach(item => {
    item.addEventListener('click', function () { signCap() })
})

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

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('#b11').forEach(item => {
    item.addEventListener('click', function () { signAq() })
})

const signPi = () => {
    fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=pisces&type=daily&day=today`)
        .then(response => response.json())

        .then(data => {
            var signdata = data;

            var horoSign = signdata[0].sign
            var horoCapital = horoSign.replace(/^./, horoSign[0].toUpperCase())
            var horotext = signdata[0].text
            var horoStr = horotext.split(/<.*?>/gm).join('')
            console.log(horoStr)
            console.log(horoCapital)

            horoSignData.textContent = horoCapital
            dailyhoro.textContent = horoStr;

            body.appendChild(horoSignData);
            body.appendChild(dailyhoro);


        })

}

document.querySelectorAll('#b12').forEach(item => {
    item.addEventListener('click', function () { signPi() })
})

