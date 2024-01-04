// components/PhaserGame.js
import React, { useEffect, useState } from 'react';
import styles from "../styles/GameWindow.module.css";

// import Phaser Dependencies
import { Game as GameType } from 'phaser';

// import Game Dependencies and Logic


const PhaserGame = () => {
    const isDevelopment = process?.env?.NODE_ENV !== 'production';
    const [game, setGame] = useState<GameType>(); // using useState over useRef
    
    const dialogMessages = useState([]);
    const menuItems = useState([]);
    const gameTexts = useState([]);

    const [messages, Setmessages] = useState({});
    
    console.log("Initializing Alephium Lands");           // metaverse?               
  
    // Create Game inside useEffect
    // creation only once
    useEffect(() => {
      async function initPhaser() {
        const Phaser = await import('phaser');
        //const { default: GridEngine } = await import('grid-engine');

        const { default: PreLoader } = await import('../phaser/assetload/scene');
        const { default: TestScene } = await import('../phaser/assetload/testscene');
        
        const phaserGame = new Phaser.Game({
          type: Phaser.AUTO,
          title: 'Alephium Lands',
          parent: 'game-content',
          // orientation
          // localstoragename
          width: 1366,
          height: 768,
          // zoom
          // any other booleans
          pixelArt: true,
          scale: {
            zoom: 1
            // autocenter
            // mode
          },
          scene: [
            PreLoader
          ],
          physics: {
            default: 'arcade',
            arcade: {
              debug: isDevelopment
              // gravity: { y: 0 }
            }
          },
          backgroundColor: '#000000'
        });

        // if (isDevelopment) {
        //    window.phaserGame = phaserGame; 
        // }

        setGame(phaserGame);
      }

      initPhaser();

    }, []);
  
    return (
      <>
        <div className={styles.container}>
          <div id="game-content" key="game-content">
            {/* this is where the game canvas will be rendered */}
          </div>
        </div>
      </>
    )
};

export default PhaserGame