import { Component } from 'react';
import { InfoPigText } from './InfoPigText/InfoPigText';
import { PigsList } from './PigsList/PigsList';
import dataPigs from '../dataPigs.json';

export class App extends Component {
  state = {
    selectedCardLabel: 'Choose a pig',
  };

  selectCardLabel = label => {
    this.setState({ selectedCardLabel: label });
  };

  render() {
    return (
      <>
        <InfoPigText text={this.state.selectedCardLabel} />
        <PigsList dataPigs={dataPigs} onSelect={this.selectCardLabel} />
      </>
    );
  }
}
