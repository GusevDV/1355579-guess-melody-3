import React from 'react';
import Audioplayer from '../../components/audioplayer/audioplayer.jsx';

const withAudioplayer = (Component) => {
  class WithAudioplayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0,
      };
    }
    handlePlayPauseButtonClick(id) {
      const {activePlayerId} = this.state;
      this.setState({
        activePlayerId: activePlayerId === id ? -1 : id
      });
    }

    render() {
      return <Component
        {...this.props}
        renderPlayer={(audioSrc, id) => {
          const {activePlayerId} = this.state;
          return (
            <Audioplayer
              audioSrc={audioSrc}
              isPlaying={id === activePlayerId}
              onPlayPauseButtonClick={() => this.handlePlayPauseButtonClick(id)}
            />
          );
        }}
      />;
    }
  }
  WithAudioplayer.propTypes = {};

  return WithAudioplayer;
};

export default withAudioplayer;
