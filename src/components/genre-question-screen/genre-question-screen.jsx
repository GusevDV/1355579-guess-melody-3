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
        {this.props.renderPlayer(answer.src, i, i === 0 && true)}
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
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={(e) => this.handleFormAnswerSubmit(e)}>
          {answers.map((answer, i) => this.renderAnswer(answer, i))}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: genreQuestionType,
  renderPlayer: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;
