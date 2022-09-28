import GameBoard from "../classes/GameBoard";
import { utils } from "../utils/utils";
import { announcer } from "../index.js"
import { refreshTiles } from "../domManip/GameBoard";

export default class GameManager {
    constructor() {
        this.humanTurn = true;
        this.humanGameBoard = new GameBoard('player');
        this.aiGameBoard = new GameBoard('ai');
        this.gameOver = false;
    }


    // AI related
    aiTurn() {
        let randomArrayIndex = utils.randomIntFromInterval(0, 99);
        announcer.innerText = 'AI turn!';


        setTimeout(() => {
            this.humanGameBoard.hit(randomArrayIndex);

            refreshTiles(this.humanGameBoard, 'player');

            this.humanTurn = true;
            announcer.innerText = 'Your turn!';
        }, 2000)
    }

    #canShoot(index) {

    }



}