window.onload = function(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let clicks = [[0, 0]];// [{x:0, y:0}] пустой массив, потом запишем координаты

    canvas.onclick = function(e){
        e = e || window.event;
        let x = e.offsetX;
        let y = e.offsetY;
        let xy = [x, y];
        console.log(xy);
        clicks.push(xy);
        console.log(clicks);

        ctx.moveTo(clicks[clicks.length - 2][0], clicks[clicks.length-2][1]);//начальные координаты x , y
        ctx.lineTo(x, y);// до точки клика
        if (clicks.length > 2){
            ctx.moveTo(clicks[clicks.length - 3][0], clicks[clicks.length-3][1]);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    }

}