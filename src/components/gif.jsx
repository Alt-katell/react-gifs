import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render () {
    const source = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={source} alt="gif" className="gif" onClick={this.handleClick}/>
    );
  }
}


export default Gif;
