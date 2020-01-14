import React from 'react';
import useResources from './useResources';
import UserList from './UserList';

const ResourceListHooks = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      <UserList />
      <ul>
        {resources.map(data => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul>
    </div>
  )
};

export default ResourceListHooks;