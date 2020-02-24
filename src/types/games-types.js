import PropTypes from 'prop-types';

export const QuestionType = {
  ARTIST: `artist`,
  GENRE: `genre`,
};

export const gameType = PropTypes.oneOf([QuestionType.ARTIST, QuestionType.GENRE]).isRequired;
