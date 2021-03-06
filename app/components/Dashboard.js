import React, { Component } from 'react';

import Heading from './Heading';
import PitchforkReviewMini from './PitchforkReviewMini';
import TopTracksListContainer from '../containers/TopTracksListContainer';

import styles from './Dashboard.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.dashboard_container}>
        <Heading
          text={'Top tracks'}
        />
        <TopTracksListContainer
          switchToArtistView={this.props.switchToArtistView}
          home={this.props.home}
        />
        <Heading
          text={'Best new music'}
        />
        {
          this.props.bestNewAlbums.map((el, i) => {
            return (
              <PitchforkReviewMini
                album={el}
                switchToArtistView={this.props.switchToArtistView}
              />
            )
          })
        }
      </div>
    );
  }

}
