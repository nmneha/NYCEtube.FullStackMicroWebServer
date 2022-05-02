import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Player } from 'video-react';

class VideoApp extends Component {
    player = {}
    state = {
        video: {

            src: "https://www.youtube.com/watch?v=Rd836cv4QwA",

            src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',

            poster: '/webapp/content/images/jhipster_family_member_0_head-192.png'
        }
    }

    onPlayerReady(player){
        this.player = player;
    }

    render() {
        return (
            <div>
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="720"
                    height="420"
                    onReady={this.onPlayerReady.bind(this)}
                    type="video/mp4"
                />
            </div>
        );
    }
}
export default VideoApp;
