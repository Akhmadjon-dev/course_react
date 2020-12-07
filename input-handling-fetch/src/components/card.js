import React from "react";
import "./style.css";
class card extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = {
      spans: 0,
    };
  }
  componentDidMount() {
    console.log(this.imgRef.current.clientHeight);
    this.imgRef.current.addEventListener("load", this.setSpan);
  }
  setSpan = () => {
    const height = this.imgRef.current.clientHeight;

    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { img } = this.props;
    return (
      <div
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        key={img.id}
        className="card"
      >
        <img
          ref={this.imgRef}
          alt={img.alt_description}
          className="card-img-top img"
          src={img.urls.regular}
        />
      </div>
    );
  }
}

export default card;
