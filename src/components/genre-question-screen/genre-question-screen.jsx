import React from 'react';
import PropTypes from 'prop-types';
import {genreQuestionType} from '../../types/questions-types';

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: props.question.answers.map(() => false),
    };

    this.handleInputAnswerChange = this.handleInputAnswerChange.bind(this);
    this.handleFormAnswerSubmit = this.handleFormAnswerSubmit.bind(this);
  }

  handleInputAnswerChange(e, i) {
    let userAnswers = [...this.state.answers];
    userAnswers[i] = e.target.checked;
    this.setState({answers: userAnswers});
  }

  handleFormAnswerSubmit(e) {
    e.preventDefault();
    this.props.onAnswer(this.props.question, this.state.answers);
  }

  renderAnswer(answer, i) {
    return (
      <div key={answer.genre} className="track">
        <button className="track__button track__button--play" type="button"></button>
        <div className="track__status">
          <audio src={answer.src}></audio>
        </div>
        <div className="game__answer">
          <input
            className="game__input visually-hidden"
            type="checkbox"
            name="answer"
            value={`answer-${i}`}
            id={`answer-${i}`}
            checked={this.state.answers[i]}
            onChange={(e) => this.handleInputAnswerChange(e, i)}
          />
          <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
        </div>
      </div>
    );
  }
  render() {
    const {genre, answers} = this.props.question;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
          </svg>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks" onSubmit={(e) => this.handleFormAnswerSubmit(e)}>
            {answers.map((answer, i) => this.renderAnswer(answer, i))}
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: genreQuestionType
};

export default GenreQuestionScreen;
