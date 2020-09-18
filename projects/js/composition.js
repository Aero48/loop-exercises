function setup(){
    //Initial canvas setup
    createCanvas(1920,720);
    background("black")
    strokeWeight(0);

    //Position for the first planet (sun)
    let x = 20;

    //Array that stores all of the planet diameters in order
    let planetSizes = [150,5,9,9,6,45,40,15,15,2];

    //Array that stores all of the planet colors in order
    let planetColors = ["yellow","gray","tan","blue","red","orange","yellow","blue","cyan","brown"];

    //Array that stores all of the ring sizes for the planets
    let ringSizes = [0,0,0,0,0,0,150,0,0,0];

    //This generates 120 stars in random positions across the canvas
    for(let j = 0; j<120; j++){
        circle(Math.random() * width, Math.random() * height, 1);
    }

    //This loop builds the planets based on the data from the above arrays
    for(let i = 0; i<10; i++){

        //Fills in the color based on the color array
        fill(planetColors[i]);

        //Generates the planet circles based on the size array
        circle(x,360,planetSizes[i]);

        //I have the rings always be brown for now
        fill("brown");

        //Generates rings based on the ring size array
        ellipse(x,360,ringSizes[i],10);

        //Each planet's center is 200 pixels away from the next (for now)
        x = x + 200;
    }

    /*
    Future plans for this:
    - Allow for random solar system generation
    - Add more details to planets
    - Improve ring design
    - Make the planets properly to scale (not by distance though)
    - Make everything configurable
    */
}