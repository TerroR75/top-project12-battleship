import GameBoard from "../classes/GameBoard";
import Ai from "../classes/AI";
import { utils } from "../utils/utils";
import { announcer } from "../index.js"
import { refreshTiles } from "../domManip/GameBoard";

export default class GameManager {
    constructor() {
        this.humanTurn = true;
        this.humanGameBoard = new GameBoard('player');
        this.aiGameBoard = new GameBoard('ai');
        this.gameOver = false;
        this.ai = new Ai();
    }


    // AI related
    aiTurn() {
        let randomArrayIndex = this.ai.possibleHitPositions[utils.randomIntFromInterval(0, this.ai.possibleHitPositions.length - 1)];
        announcer.innerText = 'AI turn!';


        setTimeout(() => {
            this.humanGameBoard.hit(randomArrayIndex, this.ai);
            this.ai.removePositionFromArray(randomArrayIndex)

            refreshTiles(this.humanGameBoard, 'player');

            this.humanTurn = true;
            announcer.innerText = 'Your turn!';
            console.log(this.ai.lastSuccessHit);
        }, 2000)


    }

    #canShoot(index) {

    }



}