import uuid from 'node-uuid';
import assign from 'object-assign';
import alt from '../libs/alt';
import LaneActions from '../actions/LaneActions';

class LaneStore {

  constructor() {
    this.bindActions(NoteActions);

    this.lanes = [];
  }

  create(lane) {
    const lanes = this.lanes;

    lane.id = uuid.v4();
    lane.notes = lanes.notes || [];

    this.setState({
      lanes; lanes.concat(lane);
    });
  }
}

export default alt.createStore(LaneStore, 'LaneStore');
