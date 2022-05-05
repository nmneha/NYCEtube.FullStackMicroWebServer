import './home.scss';

import React, { Component } from 'react';
import ReactPlayer from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';
import VideoApp from '../home/videoapp';
import { VideoPlayer } from 'react-video-js-player';
import VideoJS from '../home/videojs';
import Player from 'video-react';
import {VideosUser} from 'app/entities/videos-user/videos-user';

export const Home = (ReactElement) => {
  const account = useAppSelector(state => state.authentication.account);

  // const VideoUser = (props: RouteComponentProps<{ url: string }>) => {
  return (
    <Row>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
      <Col md="9">
        <p></p>
        <p></p>
        <h2>Welcome, NYCEtube!</h2>
        <p className="lead">NYCE to see you ^_^</p>
        {account?.login ? (
          <div>
            <Alert color="success">You are logged in as user {account.login}.</Alert>
          </div>
        ) : (
          <div>
          </div>
        )}
         <div>
        <VideoApp/>
      </div>
      <div>
      
        {/* <VideosUser {...props} /> */}
        
      </div>
      </Col>
    </Row>
  );
};
// }

export default Home;
