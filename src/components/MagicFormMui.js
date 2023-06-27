import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AbstractTextField from './AbstractTextField';

const schema = yup.object().shape({
  name: yup.string().required('Имя обязательно'),
  email: yup.string().required('Email обязателен').email('Неверный формат email'),
});

const App = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
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
      <h1>Форма</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <AbstractTextField
                selectLabel="Имя"
                {...field}
                formState={{ errors }}
              />
            )}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div style={{paddingTop: '20px'}}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <AbstractTextField
                selectLabel="Email"
                {...field}
                formState={{ errors }}
              />
            )}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default App;

