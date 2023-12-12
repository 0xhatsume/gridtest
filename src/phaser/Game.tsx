import React, {useState, useEffect} from 'react';
import { usePhaserGame } from '../hooks/usePhaserGame';
import GameScene from './GameScene';
import { GridEngine, GridEngineHeadless } from "grid-engine";

const Game = () => {

    const gameConfig = {
        type: Phaser.AUTO,
        parent: "taxi-game",
        backgroundColor: '#ffffff',
        render: {
            antialias: false,
        },
        scale:{
            width: 480,
            height: 480,
            //mode:  Phaser.Scale.FIT,
            //mode:  Phaser.Scale.RESIZE,
            autoCenter: Phaser.Scale.Center.CENTER_BOTH,
            // width: '100%',
            // height: '100%'
        },
        physics:{
            default: 'arcade',
            arcade:{ gravity: { y: 0 } }
        },
        plugins: {
            scene: [
                {
                    key: "gridEngine",
                    plugin: GridEngine,
                    mapping: "gridEngine",
                },
            ],
        },
        scene: [GameScene]
    }
    const game = usePhaserGame(gameConfig);

    return (
        <div className="flex flex-row justify-start
        mt-8
        ">
            {/* THE GAME */}
            <div className="
            border-2 border-orange-600 rounded-lg
            overflow-hidden
            w-[480px] h-[480px]" id="taxi-game">

            </div>

        </div>
    )

}

export default Game
