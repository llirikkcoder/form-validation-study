import React, { useState } from 'react';

const style = {color: "red", paddingLeft: '10px'}

const SimpleForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!name) {
      errors.name = 'Имя обязательно';
    }

    if (!email) {
      errors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Неверный формат email';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Отправка данных формы
      console.log('Форма отправлена');
      // Сброс полей формы
      setName('');
      setEmail('');
      setErrors({});
    }
  };

  return (
    <div>
      <h1>Простая форма:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span style={style}>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span style={style}>{errors.email}</span>}
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default SimpleForm;
