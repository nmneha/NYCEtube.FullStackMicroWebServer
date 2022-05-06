import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';



    class VideoApp extends Component {
    player = {}
    state = {
        video: {

            src: 'https://zcw-cohort8zero.s3.amazonaws.com/videoapp/sora1.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220506T020228Z&X-Amz-SignedHeaders=host&X-Amz-Expires=215999&X-Amz-Credential=AKIAUTLWJ537YFVAWF46%2F20220506%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8632b5367d02ae706ac3c7023e530274f9375385615b2e1a00495ed3d0a0ca2e',


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
