import React from 'react';
import { Html } from '@react-three/drei';

export default function BatimentCard({ position, title, description, image, onClick }) {
  return (
    <mesh position={position} onClick={onClick}>
      <boxGeometry args={[1, 1.5, 0.2]} />
      <meshStandardMaterial color="#ffcc00" />

      <Html distanceFactor={10} center>
        <div
          style={{
            width: '150px',
            height: '220px',
            display: 'flex',
            flexDirection: 'column',
            background: '#171a51ff',
            color: '#d5d7dbff',
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'center',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            overflow: 'hidden',
          }}
        >
          <h4 style={{ margin: "0 0 5px 0" }}>{title}</h4>
          <p style={{ margin: "0 0 8px 0", fontSize: "12px" }}>{description}</p>

          {image && (
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                flexGrow: 1,
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
          )}
        </div>
      </Html>
    </mesh>
  );
}
