import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
  const [user] = useAuthState(auth);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };

  const handleAddressBlur = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneBlur = (e) => {
    setPhone(e.target.value);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    const shipping = { name, address, phone };
    console.log(shipping);
  };
  return (
    <div className="form-container">
      <div>
        <div>
          <h2 className="form-title">Shipping Information</h2>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                onBlur={handleNameBlur}
                required
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                value={user?.email}
                required
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input
                onBlur={handleAddressBlur}
                readOnly
                type="text"
                name="address"
                id="address"
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                required
                onBlur={handlePhoneBlur}
                type="text"
                name="phone"
                id="phone"
              />
            </div>
            <input
              className="form-submit"
              type="submit"
              value="Confirm Order"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
