import kaboom from 'kaboom';

kaboom({
  width: 800,
  height: 500,
  background: [255, 255, 255],
});

scene('game', () => {
  const player = add([
    rect(100, 100),
    color(0, 0, 0),
    pos(10, 10),
    area(),
    body(),
  ]);

  const land = add([
    rect(width(), 50),
    pos(0, height() - 48),
    color(255, 153, 183),
    area(),
    solid(),
  ]);
});

scene('game_over', () => {
  add([text('Game Over'), origin('center'), pos(center())]);
});

scene('win', () => {
  add([text('You win'), origin('center'), pos(center())]);
});

go('game');
// go('game_over');
// go('win');
