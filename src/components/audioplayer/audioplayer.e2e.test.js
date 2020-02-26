import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";


import Audioplayer from "./audioplayer.jsx";

configure({adapter: new Adapter()});

const mock = {
  song: {
    src: `https://store.vas-stream.ru/uploads/mts-rbt/cms/preview/file/27313/cf1cae78ccb896cd22790f4c2a649ab2.mp3?timestamp=1580999601`
  }
};

it(`onPlayPauseButtonClick should be called`, () => {

  jest
  .spyOn(window.HTMLMediaElement.prototype, `play`)
  .mockImplementation(() => {});

  const onActivate = jest.fn();

  const screen = mount(<Audioplayer
    autoplay={false}
    isActive={false}
    onActivate={onActivate}
    audioSrc={mock.song.src}
  />);

  const trackButton = screen.find(`button.track__button`).at(0);

  trackButton.simulate(`click`);
  expect(onActivate).toHaveBeenCalledTimes(1);
});

it(`onPlayPauseButtonClick don't should be called`, () => {

  jest
  .spyOn(window.HTMLMediaElement.prototype, `play`)
  .mockImplementation(() => {});

  const onActivate = jest.fn();

  const screen = mount(<Audioplayer
    autoplay={false}
    isActive={true}
    onActivate={onActivate}
    audioSrc={mock.song.src}
  />);

  const trackButton = screen.find(`button.track__button`).at(0);

  trackButton.simulate(`click`);
  expect(onActivate).toHaveBeenCalledTimes(0);
});

it(`Click on play button should work correctly`, () => {

  jest
  .spyOn(window.HTMLMediaElement.prototype, `pause`)
  .mockImplementation(() => {});

  jest
  .spyOn(window.HTMLMediaElement.prototype, `play`)
  .mockImplementation(() => {});

  const onActivate = jest.fn();

  const screen = mount(<Audioplayer
    autoplay={false}
    isActive={true}
    onActivate={onActivate}
    audioSrc={mock.song.src}
  />);

  const trackButton = screen.find(`button.track__button`).at(0);


  trackButton.simulate(`click`);
  expect(screen.find(`button.track__button`).at(0).hasClass(`track__button--pause`)).toBeTruthy();

  trackButton.simulate(`click`);
  expect(screen.find(`button.track__button`).at(0).hasClass(`track__button--play`)).toBeTruthy();

});

it(`Click on play button should change state correctly`, () => {
  const onPlayPauseButtonClick = jest.fn();

  const screen = mount(<Audioplayer
    autoplay={false}
    isActive={true}
    onActivate={onPlayPauseButtonClick}
    audioSrc={mock.song.src}
  />);

  const trackButtons = screen.find(`button.track__button`);
  const trackButtonOne = trackButtons.at(0);

  trackButtonOne.simulate(`click`);

  expect(screen.state().isPlaying).toBeTruthy();

  trackButtonOne.simulate(`click`);

  expect(screen.state().isPlaying).toBeFalsy();

});
