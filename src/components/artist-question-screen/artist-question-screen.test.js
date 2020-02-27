import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';
import {QuestionTypes} from '../../../const.js';

const question = {
  type: QuestionTypes.ARTIST,
  song: {
    artist: `Loboda`,
    src: `https://store.vas-stream.ru/uploads/mts-rbt/cms/preview/file/15336/319fce3a4c1668930a0b24a2ceac7fa2.optimized.mp3`,
  },
  answers: [{
    picture: `https://igapi.megafon.ru/static/thumbs/singers/Loboda/244x244`,
    artist: `Loboda`,
  }, {
    picture: `https://igapi.megafon.ru/static/thumbs/singers/Zivert/244x244`,
    artist: `Zivert`,
  }, {
    picture: `https://store.vas-stream.ru/uploads/mts-rbt/cms/image/file/7906/optimized_default.jpg`,
    artist: `KAZKA`,
  }],
};

it(`ArtistQuestionScreen is rendered correctly`, () => {
  const tree = renderer.create(
      <ArtistQuestionScreen
        question={question}
        onAnswer={() => {}}
        renderPlayer={() => {}}
      />,
      {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
