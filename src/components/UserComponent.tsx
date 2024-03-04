import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { fetchUsers } from '../features/userSlice';
import { AppDispatch } from '../store/store';

const UserComponent = () => {
  const dispatch = useDispatch<AppDispatch>(); // Provide the correct type for dispatch
  const users = useSelector((state: RootState) => state.users.data);
  const status = useSelector((state: RootState) => state.users.status);
  const error = useSelector((state: RootState) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User Data:</h1>
      {users?.map((user) => (
        <div key={user.id}>
          <p><b>Title:</b> {user.title}</p>
          <p><b>Description:</b> {user.description}</p>
          <p><b>Price:</b> {user.price}</p>
          <p><b>Category:</b> {user.category}</p>
          <img width={23} src={user.image} alt={user.name} />
        </div>
      ))}
    </div>
  );
};

export default UserComponent;
