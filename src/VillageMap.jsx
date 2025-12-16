import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BatimentCard from './BatimentCard';

// ✔️ Import correct des images
import salle1 from "./EnigmeImage.jpg";
import salle2 from "./Serveur.jpg";
import salle3 from "./souris.jpg";
import salle4 from "./LinuxMeme.jpg";


const cartes = [
  { title: "Salle 1", description: "Les Licences Logiciels à Risques", id: "salle1", image: salle1 },
  { title: "Salle 2", description: "Les Enjeux du Stockage des Données", id: "salle2", image: salle2 },
  { title: "Salle 3", description: "Réemploi & Durabilité", id: "salle3", image: salle3 },
  { title: "Salle 4", description: "La Souveraineté Numérique", id: "salle4", image: salle4 }
];

export default function VillageMap({ onCardClick }) {
  const radius = 5;

  return (
    <Canvas camera={{ position: [0, 5, 15], fov: 50 }} style={{ background: '#0b0d3a' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls />

      {cartes.map((c, index) => {
        const angle = (index / cartes.length) * Math.PI * 2;
        const x = radius * Math.sin(angle);
        const z = radius * Math.cos(angle);

        return (
          <BatimentCard
            key={c.id}
            position={[x, 0.75, z]}
            title={c.title}
            description={c.description}
            image={c.image}
            onClick={() => onCardClick(c.id)}
          />
        );
      })}
    </Canvas>
  );
}
