// components/PhaserGame.js
import React, { useEffect, useRef } from 'react';
import Phaser, { Game } from 'phaser';
import styles from "../styles/GameWindow.module.css";

import { Example } from '@/phaser/assetload/scene';

const PhaserGame = () => {
    const gameRef = useRef<Phaser.Game | null>(null);
    console.log("Initializing Phaser game");
  
    useEffect(() => {
      import('phaser').then(Phaser => {
        const config = {
          type: Phaser.AUTO,
          width: 700,
          height: 800,
          parent: 'phaser-container', // Use the ID of the container
          scene: Example
        };
  
        // Create and store the game instance
        gameRef.current = new Phaser.Game(config);
      });
      
      return () => {
        if (gameRef.current) {
          gameRef.current.destroy(true); // Destroy the game instance on cleanup
          console.log("Cleaning up Phaser game");
        }
      };
    }, []);
  
    return (
      <div className={styles.container}>
        <div id="phaser-container"></div>
      </div> // Assign the ID here
    )
};

export default PhaserGame