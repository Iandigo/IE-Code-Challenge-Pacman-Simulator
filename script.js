class Pacman {
  constructor() {
    this.outputString = " ";
    this.x = 0;
    this.y = 0;
    this.minX = 0;
    this.maxX = 4;
    this.minY = 0;
    this.maxY = 4;
    this.direction = ["NORTH", "EAST", "SOUTH", "WEST"];
    this.isPlaced = false;
  }

  // Take commands from user inputs and convert into array
  takeCommands(commands) {
    commands = document.getElementById("commands").value;
    let commandArray = commands.replace(/\n/g, " ").split(" ");
    // Iterate over the array, looking for keyworks to execute functions
    for (let i = 0; i < commandArray.length; i++) {
      // Find PLACE keywords then run place function
      if (commandArray[i].toString().toUpperCase() == "PLACE") {
        this.place(commandArray[i + 1]);

        // turn LEFT command
      } else if (
        commandArray[i].toString().toUpperCase() == "LEFT" &&
        this.isPlaced == true
      ) {
        this.left();
        document.getElementById("executed-lines").innerHTML =
          "LEFT command is executed";

        // turn RIGHT command
      } else if (
        commandArray[i].toString().toUpperCase() == "RIGHT" &&
        this.isPlaced == true
      ) {
        this.right();
        document.getElementById("executed-lines").innerHTML =
          "RIGHT command is executed";

        // MOVE command
      } else if (
        commandArray[i].toString().toUpperCase() == "MOVE" &&
        this.isPlaced == true
      ) {
        this.move();
        document.getElementById("executed-lines").innerHTML =
          "MOVE command is executed";

        // REPORT command
      } else if (
        commandArray[i].toString().toUpperCase() == "REPORT" &&
        this.isPlaced == true
      ) {
        this.report();
        document.getElementById("executed-lines").innerHTML =
          "REPORT command is executed";
      }
    }
  }

  // place function places pacman in X, Y coordinates and a facing direction
  place(commands) {
    let inputs = commands.split(",");
    if (
      // conver strings to integers using parseInt
      parseInt(inputs[0]) >= this.minX &&
      parseInt(inputs[0]) <= this.maxX &&
      parseInt(inputs[1]) >= this.minY &&
      parseInt(inputs[1]) <= this.maxY &&
      (inputs[2].toString().toUpperCase() == "NORTH" ||
        inputs[2].toString().toUpperCase() == "SOUTH" ||
        inputs[2].toString().toUpperCase() == "EAST" ||
        inputs[2].toString().toUpperCase() == "WEST")
    ) {
      this.isPlaced = true;
      this.x = parseInt(inputs[0]);
      this.y = parseInt(inputs[1]);
      this.facingIndex = this.direction.indexOf(
        inputs[2].toString().toUpperCase()
      );
      document.getElementById("executed-lines").innerHTML =
        "PLACE commands is executed.";
      return true;
    } else {
      document.getElementById("executed-lines").innerHTML =
        "Please enter a VALID place command to start the game based on this form: place x,y,facing (x, y < 5 and a valid direction)!";
      return true;
    }
  }

  // turn pacman to the left function
  left() {
    this.facingIndex == 0 ? (this.facingIndex = 3) : (this.facingIndex -= 1);
  }

  // turn pacman to the right function
  right() {
    this.facingIndex == 3 ? (this.facingIndex = 0) : (this.facingIndex += 1);
  }

  // move pacman in facing position only if it's currently in the grid
  move() {
    if (this.facingIndex == 0 && this.y < this.maxY) {
      this.y += 1;
    } else if (this.facingIndex == 1 && this.x < this.maxX) {
      this.x += 1;
    } else if (this.facingIndex == 2 && this.y > this.minY) {
      this.y -= 1;
    } else if (this.facingIndex == 3 && this.x > this.minX) {
      this.x -= 1;
    }
  }

  // Output the coordinates and facing direction of pacman
  report() {
    this.outputString =
      this.x + "," + this.y + "," + this.direction[this.facingIndex];
    document.getElementById("report").innerHTML = this.outputString;
  }
}

const pacman = new Pacman();
