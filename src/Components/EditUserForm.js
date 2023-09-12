import React, { useState } from 'react';

function EditUserForm({ user, editUser, onCancel }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const updatedUser = {
        id: user.id,
        name,
        email,
        phone
      };

      editUser(updatedUser);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container mb-3'>
      <strong><label htmlFor="formGroupExampleInput" className="form-label">Name:</label></strong>

        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className='container mb-3'>
      <strong><label for="formGroupExampleInput" class="form-label">Email:</label> </strong>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className='container mb-3'>
        <strong><label for="formGroupExampleInput" class="form-label">Phone:</label></strong>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
      <div className="d-grid gap-4 mx-2 my-2 d-md-block">
      <button className="btn btn-primary mx-2" type="submit">Save</button>
      <button  className="btn btn-primary" type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default EditUserForm;
