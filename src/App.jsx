import { nanoid } from 'nanoid';
import { useState } from 'react';
import './App.css';
import EditableRow from './components/EditableRow';
import ReadOnlyRow from './components/ReadOnlyRow';
import data from './mock-data.json';

const App = () => {
  const [contacts, setContacts] = useState(data);
  const init = {
    id: '',
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  };
  const [addFormData, setAddFormData] = useState(init);
  const [editContactId, setEditContactId] = useState(null);

  const handelAddFormChange = (e) => {
    setAddFormData({
      ...addFormData,
      [e.target.name]: e.target.value,
      id: nanoid(),
    });
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, addFormData]);
    setAddFormData(init);
  };

  const handelEditClick = (e, id) => {
    e.preventDefault();
    setEditContactId(id);
  };
  const handelCancelEdit = () => {
    setEditContactId(null);
  };

  const handelDeleteClicked = (id) => {
    const copyOfContactsArray = [...contacts];
    const TheUpdatedContactsArray = copyOfContactsArray.filter(
      (contact) => contact.id !== id
    );
    setContacts(TheUpdatedContactsArray);
  };
  const handelEditContact = (e, contact) => {
    e.preventDefault();
    const index = contacts.findIndex((object) => object.id === contact.id);

    const copyOfContactsArray = [...contacts];

    // Object.assign(copyOfContactsArray[index], contact);
    copyOfContactsArray[index] = contact;

    setContacts(copyOfContactsArray);
    setEditContactId(null);
  };

  return (
    <div className='app-container'>
      <form action=''>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <>
                {editContactId === contact.id ? (
                  <EditableRow
                    contact={contact}
                    editContact={handelEditContact}
                    cancelEdit={handelCancelEdit}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    editClicked={handelEditClick}
                    deleteClicked={handelDeleteClicked}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a Contact</h2>
      <form action='' onSubmit={handelOnSubmit}>
        <input
          type='text'
          name='fullName'
          id=''
          value={addFormData.fullName}
          required
          placeholder='Enter a name...'
          onChange={handelAddFormChange}
        />
        <input
          type='text'
          name='address'
          id=''
          value={addFormData.address}
          required
          placeholder='Enter an address...'
          onChange={handelAddFormChange}
        />
        <input
          type='text'
          name='phoneNumber'
          id=''
          value={addFormData.phoneNumber}
          required
          placeholder='Enter a phone number...'
          onChange={handelAddFormChange}
        />
        <input
          type='email'
          name='email'
          id=''
          value={addFormData.email}
          required
          placeholder='Enter an email...'
          onChange={handelAddFormChange}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default App;
