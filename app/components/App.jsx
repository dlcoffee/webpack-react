import uuid from 'node-uuid';
import React, {Component} from 'react';
import Notes from './Notes.jsx';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'learn webpack',
        },
        {
          id: uuid.v4(),
          task: 'learn react',
        },
        {
          id: uuid.v4(),
          task: 'make coffee',
        }
      ]
    };
  }

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes notes={notes} onEdit={this.editNote} onDelete={this.deleteNote}/>
      </div>
    );
  }

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'new task'
      }])
    });
  }

  editNote = (id, task) => {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.task = task;
      }

      return note;
    });

    this.setState({notes});
  }

  deleteNote = (id) => {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id)
    });
  }
}