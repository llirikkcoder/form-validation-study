import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const style = {color: "red", paddingLeft: '10px'}

const schema = yup.object().shape({
  name: yup.string().required('Имя обязательно'),
  email: yup.string().required('Email обязателен').email('Неверный формат email'),
});

const MagicForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Отправка данных формы
    console.log('Форма отправлена');
    // Сброс полей формы
    reset();
  };

  return (
    <div>
      <h1>Magic Форма:</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Имя:</label>
          <input type="text" id="name" {...register('name')} />
          {errors.name && <span style={style}>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" {...register('email')} />
          {errors.email && <span style={style}>{errors.email.message}</span>}
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default MagicForm;

