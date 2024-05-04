import React, { useState } from 'react';
import styles from '../styles/login-form.module.scss';
import styles1 from '../../../styles/main.module.scss';
import Link from 'next/link';
import { AuthService } from '../service/auth-service';
import {useRouter} from 'next/router'

export default function LoginForm() {
  const [select, setSelect] = useState(true);
  const [loginState, setLoginState] = useState({
    email: '',
    password: ''
  });
  const [registerState, setRegisterState] = useState({
    surname: '',
    name: '',
    phoneNumber: '',
    email: '',
    password: ''
  });
  const router=useRouter()
  const setAuth = async () => {
    if (select) {
      await AuthService.login(loginState.email, loginState.password);
    } else {
      await AuthService.registration(registerState.surname, registerState.name, registerState.phoneNumber, registerState.email, registerState.password);
    }

    router.push('/user/profile')
  }

  return (
    <div className={styles.form_wrapper}>
      <div className={styles.create_account_text}>{select ? 'Ввійти в акаунт' : 'Створити акаунт'}</div>

      <div className={styles.create_or_signup}>
        <a href="#" className={select ? `${styles.choose_autho} ${styles.underline}` : styles.choose_autho} onClick={() => setSelect(true)}>Вхід</a>
        <span className={styles.span}>/</span>
        <a href="#" className={!select ? `${styles.choose_autho} ${styles.underline}` : styles.choose_autho} onClick={() => setSelect(false)}>Реєстрація</a>
      </div>

      {select ? (
        <div>
          <input className={styles1.input_form} type="input" placeholder="Ел. пошта:" value={loginState.email} onChange={(e) => setLoginState({ ...loginState, email: e.target.value })} />
          <input className={styles1.input_form} placeholder="Пароль:" value={loginState.password} onChange={(e) => setLoginState({ ...loginState, password: e.target.value })} />
        </div>
      ) : (
        <div>
          <input className={styles1.input_form} type="input" placeholder="Прізвище:" value={registerState.surname} onChange={(e) => setRegisterState({ ...registerState, surname: e.target.value })} />
          <input className={styles1.input_form} type="input" placeholder="Ім'я:" value={registerState.name} onChange={(e) => setRegisterState({ ...registerState, name: e.target.value })} />
          <input className={styles1.input_form} type="input" placeholder="Номер телефону:" value={registerState.phoneNumber} onChange={(e) => setRegisterState({ ...registerState, phoneNumber: e.target.value })} />
          <input className={styles1.input_form} type="input" placeholder="Ел. пошта:" value={registerState.email} onChange={(e) => setRegisterState({ ...registerState, email: e.target.value })} />
          <input className={styles1.input_form} type="password" placeholder="Пароль:" value={registerState.password} onChange={(e) => setRegisterState({ ...registerState, password: e.target.value })} />
        </div>
      )}

      <div className={styles.btn_register_signup}>
        <Link className={styles.create_account_btn} href="/user/catalog">Назад</Link>
        <a className={styles.create_account_btn} onClick={setAuth}>Ввійти</a>
      </div>
    </div>
  );
}
