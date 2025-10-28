import React from 'react';

const GameCard = ({ game }) => {
  const { title, genre, imageUrl } = game;

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    width: '300px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  };

  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt={title} style={imageStyle} />
      <h3>{title}</h3>
      <p>{genre}</p>
    </div>
  );
};

export default GameCard;
