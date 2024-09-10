import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { fetchUsers, selectUserStatus, selectUsers } from '../features/users/usersSlice';

export const useFetchUsers = () => {
  const userStatus = useAppSelector(selectUserStatus);
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  return { users, userStatus };
};
