// @refresh reset

// components/PhaserGame.js
import dynamic from 'next/dynamic';
import React, { useEffect, useRef } from 'react';
import Phaser, { Game } from 'phaser';

export const PhaserGame = () => {
    const gameRef = useRef<Phaser.Game | null>(null);
    console.log("Initializing Phaser game");
  
    useEffect(() => {
      import('phaser').then(Phaser => {
        const config = {
          type: Phaser.AUTO,
          width: 800,
          height: 600,
          parent: 'phaser-container', // Use the ID of the container
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
  
    return <div id="phaser-container"></div>; // Assign the ID here
  };
  
  export default dynamic(() => Promise.resolve(PhaserGame), { ssr: false });