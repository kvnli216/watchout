// start slingin' some d3 here.

/*
update scoreboard parameters
  - high score
  - current score
  - collisions

objects
  - enemies
    - function to move the enemies
    - boundaries/limitations for movement algorithm 
  - player
    - system track the player position 
      - collisions
      - manipulating movement with mouse

css make pretty
*/

// implement a player
// - create a player object into the DOM
// - allow the player object to be interactable
//   - click-draggable

let board = d3.select('body').append('svg');
let drag = d3.behavior.drag();
let player = board.append('circle'); // separate appending the new circle and referring to it in this declaration; refer to d3 docs for referring

drag.on('dragstart', function() {
  d3.event.sourceEvent.stopPropagation(); // silence other listeners
});
drag.on('drag', function() {
  player.attr('cx', d3.event.x).attr('cy', d3.event.y);
});

board.attr('width', 100).attr('height', 100); // update to size of screen
player.attr('id', 'player').attr('cx', 50).attr('cy', 50).attr('r', 10).attr('fill', 'dodgerblue');
player.call(drag);
// debugger;
