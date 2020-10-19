import React from 'react';

import { ClientService } from "./ClientService.js"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      clientName: ClientService.getClientNameById(event.target.value),
      id: event.target.value
    });
  }

  render() {
    return (
      <form  >
        <label>
          Id:
          <input type="text" value={this.state.id} onChange={this.handleChange} />
        </label>
        <div> {this.state.clientName} </div>
      </form>
    );
  }
}