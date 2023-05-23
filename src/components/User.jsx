import { useSelector, useDispatch } from 'react-redux';
import { setUser, unsetUser } from '../reducers/user/userSlice';

const User = () => {
  const dispatch = useDispatch();
  const { email, fullName } = useSelector((state) => state.user);
  return (
    <div>
      <h2>User: {fullName}</h2>
      <h2>email: {email}</h2>
      <button
        onClick={() => {
          dispatch(
            setUser({
              email: 'tony@stark.com',
              fullName: 'Tony Stark',
              token: '12345',
            })
          );
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(unsetUser());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default User;
