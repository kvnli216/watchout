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

let player = d3.select('body').append('svg');

player.attr('width', 100).attr('height', 100);
player.append('circle').attr('cx', 50).attr('cy', 50).attr('r', 10).attr('fill', 'dodgerblue');



