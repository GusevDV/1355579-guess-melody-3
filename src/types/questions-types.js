import PropTypes from 'prop-types';
import {gameType} from './games-types.js';

export const artistQuestionType = PropTypes.shape({
  answers: PropTypes.arrayOf(PropTypes.shape({
    artist: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })).isRequired,
  song: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  type: gameType
}).isRequired;


export const genreQuestionType = PropTypes.shape({
  answers: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
  genre: PropTypes.string.isRequired,
  type: gameType
}).isRequired;
