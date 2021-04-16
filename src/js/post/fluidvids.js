const fluidvids = require('fluidvids.js/dist/fluidvids.js');

// Init FluidVids
export default function fluidvidsInit() {
  fluidvids.init({
    selector: ['iframe', 'object'],
    players: ['www.youtube.com', 'player.vimeo.com'],
  });
}
