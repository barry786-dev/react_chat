import React, { useState } from 'react';

const EditableRow = ({ contact, editContact, cancelEdit }) => {
  const [EditedContactData, setEditedContactData] = useState(contact);
  const { id, fullName, email, address, phoneNumber } = EditedContactData;
  const handelEditContactInput = (e) => {
    setEditedContactData({
      ...EditedContactData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <tr key={id}>
      <td>
        <input
          type='text'
          name='fullName'
          id=''
          placeholder='Enter a name'
          required
          value={fullName}
          onChange={handelEditContactInput}
        />
      </td>
      <td>
        <input
          type='text'
          name='address'
          id=''
          placeholder='Enter an address'
          required
          value={address}
          onChange={handelEditContactInput}
        />
      </td>
      <td>
        <input
          type='text'
          name='phoneNumber'
          id=''
          placeholder='Enter a phone number'
          required
          value={phoneNumber}
          onChange={handelEditContactInput}
        />
      </td>
      <td>
        <input
          type='email'
          name='email'
          id=''
          placeholder='Enter an email'
          required
          value={email}
          onChange={handelEditContactInput}
        />
      </td>
      <td>
        <button type='' onClick={(e) => editContact(e, EditedContactData)}>
          Save
        </button>
        <button onClick={() => cancelEdit()}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;
