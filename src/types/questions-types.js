import PropTypes from 'prop-types';

export const artistQustionType = PropTypes.shape({
  answers: PropTypes.arrayOf(PropTypes.shape({
    artist: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })).isRequired,
  song: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
}).isRequired;


export const genreQuestionType = PropTypes.shape({
  answers: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
  genre: PropTypes.string.isRequired,
  type: PropTypes.oneOf([`artist`, `genre`]).isRequired,
}).isRequired;
