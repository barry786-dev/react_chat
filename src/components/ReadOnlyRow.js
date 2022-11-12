import React from 'react';

const ReadOnlyRow = ({ contact, editClicked, deleteClicked }) => {
  const { id, fullName, email, address, phoneNumber } = contact;
  return (
    <tr key={id}>
      <td>{fullName}</td>
      <td>{address}</td>
      <td>{phoneNumber}</td>
      <td>{email}</td>
      <td>
        <button onClick={(e) => editClicked(e, id)}>Edit</button>
        <button onClick={(e) => deleteClicked(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
