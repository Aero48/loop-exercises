function setup(){
    createCanvas(400,400);
    background("#d9d9d9");
    fill("#d9d9d9");
    var diameter = 200;
    for(i = 0; i<40; i++){
        circle(200,200,diameter);
        diameter = diameter - 5;
        console.log(diameter);
    }
}