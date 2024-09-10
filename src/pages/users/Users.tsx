import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchUsers, selectUsers, selectUserStatus } from '../../features/users/usersSlice';

const Users = () => {
	const users = useAppSelector(selectUsers);
	const userStatus = useAppSelector(selectUserStatus);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (userStatus === 'idle') {
			dispatch(fetchUsers());
		}
	}, [userStatus, dispatch]);

	return (
		<div>
			<h1>User Management Table</h1>
			<h2>
				{userStatus === 'loading' && 'Loading...'}
				{userStatus === 'failed' && 'Failed to fetch users'}
			</h2>
			{userStatus === 'succeeded' && (
				<ul>
					{users.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Users;
