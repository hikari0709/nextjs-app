import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

function Card({ foundation, children, innerSize }) {
  const card = foundation ? 'card-foundation' : 'card';
  return (
    <div class={card}>
      <div class={`card-inner-${innerSize}`}>{children}</div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  foundation: PropTypes.bool,
  innerSize: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.string.isRequired
};

// Card.defaultProps = {
//   foundation: false,
//   size: 'medium'
// };
