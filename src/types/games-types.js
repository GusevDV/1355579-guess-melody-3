import PropTypes from 'prop-types';
import {QuestionTypes} from '../../const.js';

export const gameType = PropTypes.oneOf([QuestionTypes.ARTIST, QuestionTypes.GENRE]).isRequired;
