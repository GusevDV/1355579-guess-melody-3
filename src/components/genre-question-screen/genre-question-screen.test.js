import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen.jsx';

const question = {
  type: `genre`,
  genre: `jazz`,
  answers: [{
    src: `https://store.vas-stream.ru/uploads/mts-rbt/cms/preview/file/27313/cf1cae78ccb896cd22790f4c2a649ab2.mp3?timestamp=1580999601`,
    genre: `pop`,
  }, {
    src: `https://store.vas-stream.ru/uploads/mts-rbt/cms/preview/file/7143/0fc58601e2e1a3531a8edfdf0d6a956a.optimized.mp3`,
    genre: `hip-hop`,
  }, {
    src: `https://store.vas-stream.ru/uploads/mts-rbt/cms/preview/file/767/34961638a25cb4827248fd1fe2e4d78e.optimized.mp3`,
    genre: `jazz`,
  }, {
    src: `https://store.vas-stream.ru/uploads/mts-rbt/cms/preview/file/5622/9c994526d37b56cd609f904822ffbe53.optimized.mp3`,
    genre: `rock`,
  }],
};

it(`GenreQuestionScreen is rendered correctly`, () => {
  const tree = renderer.create((
    <GenreQuestionScreen
      question={question}
      onAnswer={() => {}}
    />
  ), {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
