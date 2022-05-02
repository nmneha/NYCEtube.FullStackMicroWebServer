import React from 'react';
import VideoPlayer from 'react-video-js-player';

const VideoJS = () => {
    const videoSrc = "https://www.youtube.com/watch?v=Rd836cv4QwA";
    const videoSrc = 'src/main/webapp/content/videosample/sora.mp4';
    const poster = '/webapp/content/images/jhipster_family_member_0_head-192.png';

    return (
        <div className="App">
            <p>
                <VideoPlayer src={videoSrc} poster={poster} width="720" height="420" type="video/mp4" />
            </p>
        </div>

    );
};

export default VideoJS;
