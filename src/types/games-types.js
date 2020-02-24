import PropTypes from 'prop-types';
import {QuestionType} from '../../const.js';

export const gameType = PropTypes.oneOf([QuestionType.ARTIST, QuestionType.GENRE]).isRequired;
