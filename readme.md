# IE-Code-Challenge

This project was written in HTML, CSS and Javascript.

## Usage

To run the app, click and open the HTML file or run in live server mode in VS Code.

## Description

- The application is a simulation of Pacman moving on in a grid, of dimensions 5 units x 5 units.
- There are no other obstructions on the grid.
- Pacman is free to roam around the surface of the grid, but must be prevented from moving off the grid. Any movement that would result in Pacman moving off the grid must be prevented, however further valid movement commands must still be allowed.
- Create an application that can read in commands of the following form -

```
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```

- PLACE will put the Pacman on the grid in positon X,Y and facing NORTH,SOUTH, EAST or WEST.
- The origin (0,0) can be considered the SOUTH WEST most corner.
- The first valid command to Pacman is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
- MOVE will move Pacman one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate Pacman 90 degrees in the specified direction without changing the position of Pacman.
- REPORT will announce the X,Y and F of Pacman. This can be in any form, but standard output is sufficient.
- Pacman that is not on the grid can choose the ignore the MOVE, LEFT, RIGHT and REPORT commands.

## Implement

Run the simulation by enter a command into the input box and click submit:

`PLACE 0,0,NORTH`

or a group of commands:

```
PLACE 0,0,NORTH
LEFT
MOVE
REPORT
```
