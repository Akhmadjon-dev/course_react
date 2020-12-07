import React from "react";
import Card from "./card";
import "./style.css";
class imgList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { img } = this.props;

    return (
      <div className="image">
        {img.map((item) => (
          <Card key={item.id} img={item} />
        ))}
      </div>
    );
  }
}

export default imgList;
