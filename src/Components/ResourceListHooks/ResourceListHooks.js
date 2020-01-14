import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceListHooks = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

      setResources(response.data);
    })(resource);
  }, [resource]);

  return (
    <div>
      <ul>
        {resources.map(data => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul>
    </div>
  )
};

export default ResourceListHooks;