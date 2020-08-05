import React, {PureComponent} from 'react';

interface WithActiveMovieState {
  activeMovieId: string;
}

const withActiveMovie = (Component) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  class WithActiveMovie extends PureComponent<any, WithActiveMovieState> {
    constructor(props) {
      super(props);
      this.state = {activeMovieId: null};

      this._onCardHover = this._onCardHover.bind(this);
      this._onCardLeave = this._onCardLeave.bind(this);
    }

    _onCardHover(id: string) {
      this.setState({
        activeMovieId: id,
      });
    }

    _onCardLeave() {
      this.setState({
        activeMovieId: null,
      });
    }

    render() {
      const {activeMovieId} = this.state;
      return (
        <Component
          {...this.props}
          onCardHover={this._onCardHover}
          onCardLeave={this._onCardLeave}
          activeMovieId={activeMovieId}
        />
      );
    }
  }


  return WithActiveMovie;
};

export default withActiveMovie;


