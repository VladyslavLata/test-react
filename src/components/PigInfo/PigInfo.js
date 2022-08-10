import { Box } from "components/Box/Box";
import { Component } from "react";

export class PigInfo extends Component{
//   state = {
//     isOpen: false,
// }

  // toggleLabel = () => {this.setState((prevState) => ({isOpen: !prevState.isOpen}))}

  render() {
    const { pig: { img, label }, onSelect, onToggle, currentImg } = this.props;
    return (
      <Box border="normal" onClick={() => {
        onSelect(label);
        onToggle(img);
        // this.toggleLabel();
      }}>
        <img src={img} alt={label} />
        {currentImg && <h2>{label}</h2>}
        {/* {this.state.isOpen && <h2>{label}</h2>} */}
  </Box>)
  }
}

