import React, { Component } from 'react';
import Draggable from 'react-draggable';

class Sticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
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
        handle=".dragger"
      >
        <div>
          <div className="dragger">X</div>
          <img src={this.props.img} alt="img" />
        </div>
      </Draggable>
    );
  }
}

export default Sticker;
