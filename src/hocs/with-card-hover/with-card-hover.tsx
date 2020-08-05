import React, {PureComponent} from 'react';
import {VIDEO_PLAYER_TIMEOUT} from '../../const';

interface WithCardHoverState {
  isPlaying: boolean;
}

const withCardHover = (Component) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  class WithCardHover extends PureComponent<any, WithCardHoverState> {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._timeout = null;
    }

    private _timeout: NodeJS.Timeout;

    componentWillUnmount() {
      clearTimeout(this._timeout);
    }

    render() {
      const {isPlaying} = this.state;
      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
        />
      );
    }

    componentDidUpdate() {
      if (this.props.isActive) {
        this._timeout = setTimeout(() => {
          this.setState({
            isPlaying: true,
          });
        }, VIDEO_PLAYER_TIMEOUT);
      } else {
        clearTimeout(this._timeout);
        this.setState({
          isPlaying: false,
        });
      }
    }
  }

  return WithCardHover;
};

export default withCardHover;
