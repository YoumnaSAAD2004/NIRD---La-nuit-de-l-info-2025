// CurrentTime.jsx
import React, { useState, useEffect } from 'react';

// Ce composant affiche l'heure actuelle et la met à jour chaque seconde
const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Mettre à jour l'heure toutes les 1000 millisecondes (1 seconde)
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Fonction de nettoyage : arrête le timer lorsque le composant est démonté
    return () => clearInterval(timerId);
  }, []);

  // Options pour formater l'heure de manière 'chic'
  // Exemple : 02:42:53 AM
  const formattedTime = time.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // Affichage sur 24 heures
  });

  // Options pour formater la date
  // Exemple : Vendredi 5 décembre
  const formattedDate = time.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <div className="current-time-display">
      <span className="date-text">{formattedDate}</span>
      <span className="time-text">{formattedTime}</span>
    </div>
  );
};

export default CurrentTime;