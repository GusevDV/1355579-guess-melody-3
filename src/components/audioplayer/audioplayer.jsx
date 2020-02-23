import React, {createRef} from 'react';
import PropTypes from 'prop-types';

class Audioplayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: this.props.isPlaying
    };

    this.audioRef = createRef();
    this.handlePlayPauseButtonClick = this.handlePlayPauseButtonClick.bind(this);
  }
  componentDidMount() {
    const audio = this.audioRef.current;
    audio.src = this.props.audioSrc;

    audio.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    audio.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    audio.onpause = () => this.setState({
      isPlaying: false,
    });

    audio.ontimeupdate = () => this.setState({
      progress: audio.currentTime
    });

  }
  componentDidUpdate() {
    const audio = this.audioRef.current;
    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  componentWillUnmount() {
    const audio = this.audioRef.current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
  }
  handlePlayPauseButtonClick() {
    this.setState((prevState) => ({
      isPlaying: !prevState.isPlaying
    }));
    this.props.onPlayPauseButtonClick();
  }
  render() {
    return (
      <>
        <button
          className={`track__button track__button--${this.props.isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={this.isLoading}
          onClick={this.handlePlayPauseButtonClick}
        />
        <div className="track__status">
          <audio
            ref={this.audioRef}
          />
        </div>
    </>
    );
  }
}

Audioplayer.propTypes = {
  onPlayPauseButtonClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  audioSrc: PropTypes.string.isRequired,
};

export default Audioplayer;
