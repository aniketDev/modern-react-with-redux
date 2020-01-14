import React from 'react';
import axios from 'axios';

class ResourceListHooks extends React.Component {
  state = { resources: [] };

  async componentDidMount() {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

    this.setState({ resources: response.data });
  }

  async componentDidUpdate(previousProps) {

    if (previousProps.resource !== this.props.resource) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

      this.setState({ resources: response.data });
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.resources.map(data => (
            <li>{data.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ResourceListHooks;