import React from 'react';
import useResources from './useResources';

const ResourceListHooks = ({ resource }) => {
  const resources = useResources(resource);

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