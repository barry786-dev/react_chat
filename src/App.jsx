import { useState } from 'react';
import './App.css';
import data from './mock-data.json';

const App = () => {
  const [contacts, setContacts] = useState(data);

  return (
    <div className='app-container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            const { fullName, email, address, phoneNumber } = contact;
            return (
              <tr>
                <td>{fullName}</td>
                <td>{address}</td>
                <td>{phoneNumber}</td>
                <td>{email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
