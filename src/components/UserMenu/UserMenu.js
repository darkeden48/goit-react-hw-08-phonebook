import { useDispatch, useSelector } from 'react-redux';
import { authApi, authSelectors } from '../../redux';
// import { FaSignInAlt } from 'react-icons/fa';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'unset',
    fontSize: 'x-large',
    fontWeight: 'bold',
    borderRadius: '50%',
    border: '1px solid #024972',
    backgroundColor: '#4299c2',
  },
  button: {
    marginLeft: '10px',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);
//   const name = "acci";
//   const [letter] = name.split('');

  return (
    <div style={styles.container}>
      <span style={styles.name}>{name}</span>
      <button
        type="button"
        style={styles.button}
        onClick={() => dispatch(authApi.logOut())}
      >
      </button>
    </div>
  );
}