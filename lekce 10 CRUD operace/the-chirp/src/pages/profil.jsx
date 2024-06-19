import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { fetchUsers } from '../functions/fc';

const params = new URLSearchParams(window.location.search);
const userId = params.get('user');

const user = await fetchUsers(userId)

document.querySelector('#root').innerHTML = render(
  <>
    <h1>Profil uživatele - {user.name}</h1>
    <img src={`http://localhost:4000${user.avatar}`}/>
    <p>{user.bio}</p>
  </>
);