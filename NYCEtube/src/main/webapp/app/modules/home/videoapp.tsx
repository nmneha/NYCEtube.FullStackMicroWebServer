import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';



    class VideoApp extends Component {
    player = {}
    state = {
        video: {
            src: 'https://zcw-cohort8zero.s3.amazonaws.com/videoapp/sora.mp4',
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