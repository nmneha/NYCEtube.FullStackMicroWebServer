import React, { Component } from 'react';
// import "node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

class VideoApp extends Component {
    player = {}
    state = {
        video: {
            src: 'src/main/webapp/content/videosample/sora',
            poster: '/webapp/content/images/jhipster_family_member_0_head-192.png'
        }
    }

    onPlayerReady(player){
        this.player = player;
    }

    render() {
        return (
            <div>
          
    }
}
export default VideoApp;