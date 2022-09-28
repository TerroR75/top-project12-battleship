export function mouseOverTile(tiles) {
    tiles.forEach(tile => {
        tile.addEventListener('mouseenter', () => {
            tile.classList.toggle('mouse-over');
        })
        tile.addEventListener('mouseout', () => {
            tile.classList.toggle('mouse-over');
        })
    });
}