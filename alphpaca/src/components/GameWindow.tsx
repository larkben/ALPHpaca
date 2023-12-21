// component: GameWindow.tsx
import React from 'react'
import { FC, useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// Alephium Imports
import { TxStatus } from './TxStatus'
import { useAlephiumConnectContext } from '@alephium/web3-react'
import { node } from '@alephium/web3'
import { TokenFaucetConfig } from '@/services/utils'

// three.js
import * as THREE from 'three';

export const GameWindow: FC<{
  config: TokenFaucetConfig
}> = ({ config }) => {
  const context = useAlephiumConnectContext()
  const addressGroup = config.groupIndex

  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000033); // Dark blue background

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true; // Enable shadow mapping
    mountRef.current.appendChild(renderer.domElement);

    // Torus Knot geometry
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);

    // Blue material
    const material = new THREE.MeshStandardMaterial({ color: 0x0044ff });

    // Create torus knot mesh
    const torusKnot = new THREE.Mesh(geometry, material);
    torusKnot.castShadow = true; // Allow it to cast shadows
    scene.add(torusKnot);

    // Ambient light (for general illumination)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Directional light (for shadows)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true; // Allow it to cast shadows
    scene.add(directionalLight);

    // Animation loop
    const animate = function () {
        requestAnimationFrame(animate);
        torusKnot.rotation.x += 0.01;
        torusKnot.rotation.y += 0.01;
        renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
        if (mountRef.current) {
            mountRef.current.removeChild(renderer.domElement);
        }
    };
    
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className={styles.threeindexjs}>
        <div ref={mountRef} />
    </div>
  );
};