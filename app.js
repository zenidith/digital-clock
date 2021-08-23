function clock(){
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    var h = new Date.UTC().getHours();
    var m = new Date.UTC().getMinutes();
    var s = new Date.UTC().getSeconds();

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

}

