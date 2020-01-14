import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceListHooks = () => {
  const [resources, setResources] = useState([]);

  const fetchResource = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

    this.setState({ resources: response.data });
  }

  return (
    <div>
      <ul>
        {resources.map(data => (
          <li>{data.title}</li>
        ))}
      </ul>
    </div>
  )
};

export default ResourceListHooks;