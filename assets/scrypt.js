// put before api links https://russelldev-cors-anywhere.herokuapp.com/





fetch(`https://russelldev-cors-anywhere.herokuapp.com/https://any.ge/horoscope/api/?sign=aquarius&type=daily&day=today`)
.then(response => response.json())
.then(data => {
    console.log(data)
});





