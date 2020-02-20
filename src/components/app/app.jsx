import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import PropTypes from 'prop-types';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };
    this.handleWelcomeButtonClick = this.handleWelcomeButtonClick.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
  }
  handleWelcomeButtonClick() {
    this.setState({
      step: 0,
    });
  }
  handleAnswerChange() {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  }
  renderGameScreen() {
    const {errorsCount, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorsCount={errorsCount}
          onWelcomeButtonClick={this.handleWelcomeButtonClick}
        />
      );
    }

    if (!question) {
      return null;
    }

    switch (question.type) {
      case `artist`:
        return (
          <ArtistQuestionScreen
            question={question}
            onAnswer={this.handleAnswerChange}
          />
        );
      case `genre`:
        return (
          <GenreQuestionScreen
            question={question}
            onAnswer={this.handleAnswerChange}
          />
        );
    }

    return null;

  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderGameScreen()}
          </Route>
          <Route exact path="/artist">
            <ArtistQuestionScreen
              question={questions[1]}
              onAnswer={() => {}}
            />
          </Route>
          <Route exact path="/genre">
            <GenreQuestionScreen
              question={questions[0]}
              onAnswer={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
