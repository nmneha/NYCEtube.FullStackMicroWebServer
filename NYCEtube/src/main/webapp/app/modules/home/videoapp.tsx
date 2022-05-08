// import { url } from 'inspector';
import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';


const videoName = "sora1.mp4";
const uri = '/videos/bucket/' + videoName;

    class VideoApp extends Component {
       

        // urlString = '/videos/bucket/'+videoName;
      url = encodeURI(uri);
    player = {}
    state = {
        video: {
            src: this.url,
            // src: 'https://zcw-cohort8zero.s3.amazonaws.com/videoapp/sora1.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220506T020228Z&X-Amz-SignedHeaders=host&X-Amz-Expires=215999&X-Amz-Credential=AKIAUTLWJ537YFVAWF46%2F20220506%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8632b5367d02ae706ac3c7023e530274f9375385615b2e1a00495ed3d0a0ca2e',
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
                    // src = "/videos/bucket/{videoName}"
                    poster={this.state.video.poster}
                    width="720"
                    height="420"
                    onReady={this.onPlayerReady.bind(this)}
                    type="video/mp4"
                />
                   {/* <video width="640" height="480" controls>
  <source src = {this.state.video.src} type="video/mp4"/>
Your browser does not support the video tag.
</video>       */}
                </div>
        );
    }
}




export default VideoApp;
