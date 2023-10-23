import { Component } from "react";
class Img extends Component {
  render() {
    return <img src={this.props.imageSrc} alt="Immagine carina" />;
  }
}
export default Img;
