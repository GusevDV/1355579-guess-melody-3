import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {QuestionTypes} from '../../../const.js';

const Questions = [
  {
    type: QuestionTypes.GENRE,
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
  }, {
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
  }
];

it(`Should App component render correctly`, () => {
  const tree = renderer
    .create(<App
      errorsCount={3}
      questions={Questions}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
