import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import useStyles from './ContactInfoStyles';

const ContactInfo = () => {
  const classes = useStyles();
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
  const [address, setAddress] = useState(localStorage.getItem('address') || '');

  const onNameChange = (e) => {
    setName(e.target.value);
    localStorage.setItem('name', e.target.value);
  };

  const onPhoneChange = (e) => {
    let reg = new RegExp('^[0-9 ]*$');
    if (reg.test(e.target.value)) {
      setPhone(e.target.value);
      localStorage.setItem('phone', e.target.value);
    }
  };

  const onAddressChange = (e) => {
    setAddress(e.target.value);
    localStorage.setItem('address', e.target.value);
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete='off'>
        <TextField
          id='name'
          label='Name'
          variant='outlined'
          value={name}
          onChange={onNameChange}
        />
        <div>
          <TextField
            id='phone'
            label='Mobile Number'
            variant='outlined'
            value={phone}
            onChange={onPhoneChange}
          />
        </div>
        <div>
          <TextField
            id='address'
            label='Shipping Address'
            multiline
            rows={4}
            variant='outlined'
            value={address}
            onChange={onAddressChange}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactInfo;
