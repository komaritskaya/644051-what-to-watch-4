import React, {PureComponent, createRef} from 'react';

interface VideoPlayerProps {
  src: string;
  poster: string;
  isPlaying: boolean;
}

interface VideoPlayerState {
  isLoading: boolean;
}

class VideoPlayer extends PureComponent<VideoPlayerProps, VideoPlayerState> {
  constructor(props: VideoPlayerProps) {
    super(props);

    this.state = {
      isLoading: true,
    };

    this._videoRef = createRef();

    this._onVideoCanPlayThrough = this._onVideoCanPlayThrough.bind(this);
  }

  private _videoRef: React.RefObject<HTMLVideoElement>;

  componentDidMount() {
    const {src, poster} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = `img/${poster}`;
    video.muted = true;

    video.addEventListener(`canplaythrough`, this._onVideoCanPlayThrough);
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.removeEventListener(`canplaythrough`, this._onVideoCanPlayThrough);
  }

  _onVideoCanPlayThrough() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    return (
      <video
        ref={this._videoRef}
        className="player__video"
        width="280"
        height="175"
      />
    );
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }
}

export default VideoPlayer;
