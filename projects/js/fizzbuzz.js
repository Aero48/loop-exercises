function setup() {
    createCanvas(1600,1200)
    var x = 25;
    
    for(var i=1; i<26; i++){
        if(i % 3 == 0 && i % 5 == 0){
            fill(0,0,255);
            rect(x-20, 80, 40, 40);
        }else if(i % 3 == 0){
            fill(125,0,255)
            circle(x, 100, 20);
        }else if(i % 5 == 0){
            fill(0,255,0);
            rect(x-20, 80, 40, 40);
        }
        else{
            fill(0,0,0)
            circle(x, 100, 20);
        }
        x += 45;
    }
}