import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost/Crud-app/backend/read.php');
    setUsers(response.data);
  };

  const createUser = async () => {
    await axios.post('http://localhost/Crud-app/backend/create.php', { username, email, message });
    fetchUsers();
    setUsername('');
    setEmail('');
    setMessage('');
  };

  const updateUser = async () => {
    await axios.post('http://localhost/Crud-app/backend/update.php', { id: editUser.id, username, email, message });
    fetchUsers();
    setUsername('');
    setEmail('');
    setMessage('');
    setEditUser(null);
  };

  const deleteUser = async (id) => {
    await axios.post('http://localhost/Crud-app/backend/delete.php', { id });
    fetchUsers();
  };

  return (
    <div className='min-h-screen flex my-7 justify-center '>
      <div className='max-w-5xl w-full'>
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Create a user</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-center">Add a message</h3>
    <input type="text" placeholder="Username:" className="mt-4 input w-full"  value={username}
        onChange={(e) => setUsername(e.target.value)}/>
    <input type="email" placeholder="Email:" className="mt-4 input w-full"  value={email}
        onChange={(e) => setEmail(e.target.value)} />
    <textarea className="textarea mt-4 w-full" placeholder="Message"  value={message}
        onChange={(e) => setMessage(e.target.value)}></textarea>
    <button className="btn btn-neutral mt-4 w-full" onClick={editUser ? updateUser : createUser}>
    {editUser ? 'Update' : 'Create'}
    </button>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
<div className="overflow-x-auto">
  <table className="table max-w-4xl">
   
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Message</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.message}</td>
              <td>
                <div className='flex gap-3 max-w-3'>
                <button className="btn" onClick={() =>
                 {
                  document.getElementById('my_modal_1').showModal()
                  setEditUser(user);
                  setUsername(user.username);
                  setEmail(user.email);
                  setMessage(user.message);
                }}>Update</button>
                  <button className="btn btn-neutral"onClick={() => deleteUser(user.id)}>Delete</button>
              
              </div>
              </td>
              
              
      </tr>
    ))}
    </tbody>
  </table>
</div>
</div>
    </div>
  );
};

export default App;
