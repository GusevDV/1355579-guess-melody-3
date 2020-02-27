import React, {createRef} from 'react';
import PropTypes from 'prop-types';

class Audioplayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: false
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
      progress: Math.floor(audio.currentTime)
    });

    if (this.props.autoplay) {
      audio.play();
    }

  }
  componentDidUpdate() {
    const audio = this.audioRef.current;
    if (!this.props.isActive && this.state.isPlaying) {
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
    const audio = this.audioRef.current;

    if (!this.props.isActive) {
      this.props.onActivate();
    }

    if (this.state.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

  }
  render() {
    return (
      <>
        <button
          className={`track__button track__button--${this.state.isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={this.state.isLoading}
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
  onActivate: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  autoplay: PropTypes.bool,
  audioSrc: PropTypes.string.isRequired,
};

export default Audioplayer;
