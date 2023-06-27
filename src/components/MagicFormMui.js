import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField } from '@mui/material';

const schema = yup.object().shape({
  name: yup.string().required('Имя обязательно'),
  email: yup.string().required('Email обязателен').email('Неверный формат email'),
});

const MagicFormMui = () => {
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
          <label htmlFor="name">Имя:</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.name}
                helperText={errors.name && errors.name.message}
                fullWidth
                variant="outlined"
              />
            )}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
                fullWidth
                variant="outlined"
              />
            )}
          />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default MagicFormMui;
