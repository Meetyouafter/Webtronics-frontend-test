import React from 'react';
import Button from '../../items/Button';
import Input from '../../items/Input';
import style from './ContactUs.module.scss';

const Contact = () => (
  <form className={style.container}>
    <h2>Contact us</h2>
    <p className="paragrath16px">Do you have any kind of help please contact with us.</p>
    <Input text="Name" />
    <Input text="Phone" />
    <Input text="E-mail" />
    <Button type="submit" className="long_button">Send</Button>
  </form>
);

export default Contact;
