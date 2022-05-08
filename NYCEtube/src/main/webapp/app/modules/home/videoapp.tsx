// import { url } from 'inspector';
import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';


// const videoName = "sora1.mp4";
// const uri = '/videos/bucket/' + videoName;

    class VideoApp extends Component {
       

        // urlString = '/videos/bucket/'+videoName;
      // url = encodeURI(uri);
    player = {}
    state = {
        video: {
            // src: this.url,
            src: 'https://zcw-cohort8zero.s3.amazonaws.com/videoapp/sora1.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220508T182219Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604799&X-Amz-Credential=AKIAUTLWJ537YFVAWF46%2F20220508%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=256e531a89a03143e89b4f2e79c25e4e2bceacadbe4029c31e96d95dffc548bf',
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
