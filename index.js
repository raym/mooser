var down = false;

const
  ctx = new (window.AudioContext || window.webkitAudioContext)(),
  gainNode = ctx.createGain(),
  osc = ctx.createOscillator()
;

gainNode.gain.value = 0;
gainNode.connect(ctx.destination);

osc.type = 'sine';
osc.frequency.value = 741;
osc.detune.value = 0;
osc.start(ctx.currentTime);
osc.connect(gainNode);

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 32 && !down) {
    gainNode.gain.value = 0.3;
    down = true;
  }
}, false);

document.addEventListener('keyup', function(e) {
  if (e.keyCode === 32 && down) {
    gainNode.gain.value = 0;
    down = false;
  }
}, false);
