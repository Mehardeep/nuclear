import React from 'react';

import styles from './styles.css';

import AlbumInfo from './AlbumInfo';
import AlbumOverlay from './AlbumOverlay';

class AlbumCover extends React.Component {

  render() {
    return (
      <div className={styles.album_cover_container}>
        <AlbumOverlay
          handlePlay={this.props.handlePlay}
        />
        <img src={this.props.album.cover}/>

        <AlbumInfo
          album={this.props.album}
        />
      </div>
    );
  }
}

export default AlbumCover;