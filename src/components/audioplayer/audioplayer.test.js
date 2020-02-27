import React from 'react';
import renderer from 'react-test-renderer';

import Audioplayer from './audioplayer.jsx';

const mock = {
  song: {
    src: `https://store.vas-stream.ru/uploads/mts-rbt/cms/preview/file/27313/cf1cae78ccb896cd22790f4c2a649ab2.mp3?timestamp=1580999601`
  }
};

it(`Audioplayer is rendered correctly`, () => {
  const {song} = mock;

  const tree = renderer.create(<Audioplayer
    autoplay={false}
    isActive={false}
    onActivate={() => {}}
    audioSrc={song.src}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
