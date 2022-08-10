import { Box } from "components/Box/Box"
import { PigInfo } from "components/PigInfo/PigInfo"
import { Component } from "react";

export class PigsList extends Component {

  state = {
    selectedImg: null,
  }

selectImg = (img) =>{this.setState({selectedImg: img})}

  render() {
    const { dataPigs, onSelect } = this.props;
      return (
    <Box as="ul" display="flex" p={5} gridGap={4} >{dataPigs.map((pig, i) => 
      <li key={i}>
        <PigInfo pig={pig} onSelect={onSelect} onToggle={this.selectImg}
          currentImg={this.state.selectedImg === pig.img } />
      </li>)}</Box>
  )

  }

}

