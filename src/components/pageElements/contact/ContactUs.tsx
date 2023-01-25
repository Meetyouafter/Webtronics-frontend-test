import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import React from 'react';
import Input from '../../items/Input';
import style from './ContactUs.module.scss';
import Button from '../../items/Button';

type FormRequestParams = {
  name: string;
  phone: string;
  email: string;
};

const formRequest = ({ name, phone, email }: FormRequestParams) => axios.post('http://localhost:3004/feedback', { name, phone, email });

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  name: Yup
    .string()
    .required('Name is required'),
  phone: Yup
    .string().matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone is required'),
  email: Yup
    .string()
    .required('Email is required')
    .email('Email is not valid'),
});

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRequestParams>({ resolver: yupResolver(validationSchema) });

  const onSubmit = handleSubmit((data) => {
    formRequest(data)
      .then((res) => {
        alert('Thank you! Our manager will call you');
      })
      .catch((err) => {
        alert('Sorry, something went wrong! Please, try again later');
      });
  });

  return (
    <section className={style.wrapper}>
      <div className={style.borderWrapper}>
        <div className={style.innerWrapper}>
          <div className={style.flexWrapper}>
            <h2 id="contact" className={style.header}>
              Contact Us
            </h2>
            <p className="paragrath16px">
              Do you have any kind of help please contact with us.
            </p>
            <form onSubmit={onSubmit}>
              <div className={style.inputGroup}>
                <Input
                  register={{ ...register('name') }}
                  placeholder="Name"
                  type="text"
                  errorMessage={errors.name?.message}
                />
                <Input
                  register={{ ...register('phone') }}
                  placeholder="Phone"
                  type="tel"
                  errorMessage={errors.phone?.message}
                />
                <Input
                  register={{ ...register('email') }}
                  placeholder="E-mail"
                  type="email"
                  errorMessage={errors.email?.message}
                />
              </div>
              <Button type="submit" className="long_button title_button">Send</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
