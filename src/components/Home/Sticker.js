import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './Home.scss';

class Sticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: this.props.x,
      y: this.props.y,
    };
  }

  handleDrag = (e, ui) => {
    const { x, y } = this.state;
    this.setState({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
  };

  render() {
    return (
      <Draggable
        position={{
          x: this.state.x, y: this.state.y,
        }}
        onDrag={this.handleDrag}
        defaultPosition={{ x: this.props.x, y: this.props.y }}
      >
        <div className="sticker">
          <img src={this.props.img} draggable="false" alt="img" style={{ width: this.props.width }} />
        </div>
      </Draggable>
    );
  }
}

export default Sticker;
