// import { url } from 'inspector';
import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import Videos from 'url'

// const videoName = "sora1.mp4";
// const uri = '/videos/bucket/' + videoName;
let resultUrl = " ";

    class VideoApp extends Component {
       
     
        // urlString = '/videos/bucket/'+videoName;
      // url = encodeURI(uri);
    player = {}

    state = {
        video: {
            // src: this.url,
           // src: 'https://zcw-cohort8zero.s3.amazonaws.com/videoapp/sora.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220509T183032Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604799&X-Amz-Credential=AKIAUTLWJ537YFVAWF46%2F20220509%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=69c99954726330f49a4a5bc58f975fd236de3a010e615feb10d7ad2b8cc31428',
            src: " ",
            poster: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg'
        }
    }
    

    onPlayerReady(player, url :string){
        this.player = player;
        // go get the url that we need 
        resultUrl = url;
        // assign the url we got from
        // this.state.video.src = resultUrl;
        // get url from rest api
    }

    render() {
        return (
            <div>
           <VideoPlayer
                    controls={true}
                    // src={this.state.video.src}
                    src = {resultUrl}
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
