import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GameScreen from "../game-screen/game-screen.jsx";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import withAudioplayer from "../../hocs/with-audioplayer/with-audioplayer.js";
import PropTypes from 'prop-types';

const GenreQuestionScreenWrapped = withAudioplayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withAudioplayer(ArtistQuestionScreen);

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

    switch (question.type) {
      case `artist`:
        return (
          <GameScreen type={question.type}>
            <ArtistQuestionScreenWrapped
              question={question}
              onAnswer={this.handleAnswerChange}
            />
          </GameScreen>
        );
      case `genre`:
        return (
          <GameScreen type={question.type}>
            <GenreQuestionScreenWrapped
              question={question}
              onAnswer={this.handleAnswerChange}
            />
          </GameScreen>
        );
      default:
        return null;
    }

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
            <ArtistQuestionScreenWrapped
              question={questions[1]}
              onAnswer={() => {}}
            />
          </Route>
          <Route exact path="/genre">
            <GenreQuestionScreenWrapped
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
