import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import logo from './logo.png';
import './App.css';
import { getItemStyle, getListStyle, reorder } from './utils';
import { uploadList, reorderList, clearList } from './state/actions/listActions';

class App extends Component {

  onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.props.list,
      result.source.index,
      result.destination.index
    );
    this.props.reorderList(items)
  }

  handleCsvUpload = e => {
    this.props.uploadList(e)
  }

  clearList = () => {
    this.props.clearList()
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div id="app-container">
          <header className="header">
            <img src={logo} className="logo" alt="logo" />
            <h1 className="title">Setlist Uploader</h1>
          </header>
          <div className="form-container">
            <form>
              <label className="custom-file-upload">
                <input type="file" onChange={this.handleCsvUpload} />
                Upload File
              </label>
              <label className="custom-clear-button" onClick={this.clearList}>
                Clear List
              </label>
            </form>
          </div>
          <div id="setlist">
            <DragDropContext  onDragEnd={this.onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={this.props.list.length ? getListStyle() : {display: 'none'}}
                  >
                    {this.props.list.map((song, index) => (
                      <Draggable key={song[0]} draggableId={song[0]} index={index} className="song">
                        {(provided, snapshot) => (
                          <div>
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, song[2])}
                            >
                            {song[1]}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </Provider>
    );
  }
}

App.proptypes = {
  uploadList: PropTypes.func.isRequired,
  reorderList: PropTypes.func.isRequired,
  clearList: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  list: state.list.list
})

export default connect(mapStateToProps, { uploadList, reorderList, clearList })(App);
