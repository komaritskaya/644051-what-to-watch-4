import React from 'react';

interface ControlsProps {
  onExitButtonClick: () => void;
  onPlayButtonClick: () => void;
  onFullScreenButtonClick: () => void;
  isPlaying: boolean;
}

const Controls: React.FC <ControlsProps> = ({onExitButtonClick, onPlayButtonClick, isPlaying, onFullScreenButtonClick}) => {
  return (
    <React.Fragment>
      <button
        type="button"
        className="player__exit"
        onClick={onExitButtonClick}
      >
        Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onPlayButtonClick}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}></use>
            </svg>
            <span>{isPlaying ? `Pause` : `Play`}</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreenButtonClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Controls;
