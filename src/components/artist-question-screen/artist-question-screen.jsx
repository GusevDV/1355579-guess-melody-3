import React from 'react';
import PropTypes from 'prop-types';
import {artistQuestionType} from '../../types/questions-types';

const ArtistQuestionScreen = (props) => {
  const {onAnswer, question, renderPlayer} = props;
  const {answers, song} = props.question;

  const renderAnswer = (answer, i) => {
    return (
      <div key={answer.artist} className="artist">
        <input
          className="artist__input visually-hidden"
          type="radio"
          name="answer"
          value={`artist-${i}`}
          id={`answer-${i}`}
          onChange={() => onAnswer(question, answer)}
        />
        <label className="artist__name" htmlFor={`answer-${i}`}>
          <img className="artist__picture" src={answer.picture} alt={answer.artist} />
          {answer.artist}
        </label>
      </div>
    );
  };

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          {renderPlayer(song.src, 0)}
        </div>
      </div>

      <form className="game__artist">
        {answers.map(renderAnswer)}
      </form>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: artistQuestionType,
  renderPlayer: PropTypes.func.isRequired
};

export default ArtistQuestionScreen;
