import AltContainer from 'alt-container';
import React, {Component} from 'react';

import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';


export default class App extends Component {

  render() {
    return (
      <div>
        <button className="add-lane" onClick={this.addLane}>+</button>

        <AltContainer
          stores={[LaneStore]}
          inject={{
            lanes: () => LaneStore.getState().lanes || [],
          }}
        >

        <Lanes />
        </AltContainer>
      </div>
    );
  }

  addLane = () => {
    LaneActions.create({name: 'new lane'});
  };
}