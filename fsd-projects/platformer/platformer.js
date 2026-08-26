$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(60,650,70,10,"lime")
    createPlatform(700,550,70,10,"lime")
    createPlatform(900,550,70,10,"lime")
    createPlatform(1100,450,70,10,"lime")
    createPlatform(900,320,70,10,"lime")
    createPlatform(500,320,70,10,"lime")
    createPlatform(700,320,70,10,"lime")
    createPlatform(300,320,70,10,"lime")
    createPlatform(100,120,70,300,"lime")
    createPlatform(250,650,70,10,"lime")
    createPlatform(450,650,70,10,"lime")
    createPlatform(450,200,70,10,"lime")
    createPlatform(250,200,70,10,"lime")
    createBadPlatform(3,740,1400,1000)



    // TODO 3 - Create Collectables
    createCollectable("database",100 , 50)
    createCollectable("database",320,280)
    createCollectable("database",500,280)
    



    
    // TODO 4 - Create Cannons
    createCannon("left",250,2000)
    createCannon("right",600,2000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
