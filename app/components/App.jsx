import AltContainer from 'alt-container';
import React, {Component} from 'react';
import Notes from './Notes.jsx';

import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';


export default class App extends Component {

  render() {
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>

        <AltContainer
          stores={[NoteStore]}
          inject={{
            notes: () => NoteStore.getState().notes
          }}
        >
          <Notes onEdit={this.editNote} onDelete={this.deleteNote}/>
        </AltContainer>
      </div>
    );
  }

  addNote = () => {
    NoteActions.create({task: 'new task'});
  }

  editNote = (id, task) => {
    NoteActions.update({id, task});
  }

  deleteNote = (id) => {
    NoteActions.delete(id);
  }
}