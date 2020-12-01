var starTime = new Date().getTime();

function getRandomColor(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters [Math.floor(Math.random() * 16)]
    }
    return color;
}

var makeShapeVisible = function(){
    var circle = document.getElementById('circle');
    var top = Math.random() * 400;
    var left = Math.random() * 800;
    var widht = Math.random() * 200 + 50;
    circle.style.top = top + 'px';
    circle.style.left = left + 'px';
    circle.style.width = widht + 'px';

    if(Math.random() < 0.3){
        circle.style.borderRadius = '50%';
        circle.style.backgroundColor = getRandomColor;
        circle.style.borderBottom = '0';
    }else if(Math.random() >= 0.3 && Math.random() <= 0.7){
        circle.style.borderRadius = '0';
        circle.style.backgroundColor = getRandomColor;
        circle.style.borderBottom = '0';
    }else if(Math.random () > 0.7) {
        circle.style.borderRadius = '0';
        circle.style.left = '0';
        circle.style.width = '0';
        circle.style.borderLeft = '70px solid transparent';
        circle.style.borderRight = '70px solid transparent';
        circle.style.borderBottom = '140px solid ' + getRandomColor;
        circle.style.backgroundColor = 'transparent';
    }

    circle.style.display = 'block';
    starTime = new Date().getTime();
}

setTimeout(makeShapeVisible, Math.random() * 3000);

document.getElementById('circle').onclick = function(){
    var circle = document.getElementById('circle');
    
    circle.style.display = 'none';
    
    var fifnishTime = new Date().getTime();
    var reactionTime = (fifnishTime - starTime)/1000;
    document.getElementById('reactionTime').innerHTML = reactionTime + ' seconds.'
    setTimeout(makeShapeVisible, Math.random() * 3000);
}
