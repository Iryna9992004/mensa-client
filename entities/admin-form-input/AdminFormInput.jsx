import React, { useState } from 'react';
import styles from '../../features/admin-add-form/admin-add-form.module.scss';
import $api from '../../http';
import { useRouter } from 'next/router';

export default function AdminFormInput(props) {
  const [good, setGood] = useState({
    name: '',
    description: '',
    price: ''
  });

  const router=useRouter()
  const [files, setFiles] = useState([]);

  const close = () => {
    props.closeForm(false);
  };

  const add = async () => {
    try {

      const formData = new FormData();
      formData.append('name', good.name);
      formData.append('description', good.description);
      formData.append('price', good.price);
      files.forEach(file => {
        formData.append('file', file);
      });

      const response = await $api.post('/goods/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      router.reload()
      console.log(response.data);
      close();
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  return (
    <div className={styles.container1}>
      <div className={styles.input}>
        <input
          className={styles.input_form}
          value={good.name}
          onChange={(e) => setGood({ ...good, name: e.target.value })}
          type="input"
          placeholder="Ім'я товару:"
        />
        <input
          className={styles.input_form}
          value={good.description}
          onChange={(e) => setGood({ ...good, description: e.target.value })}
          type="input"
          placeholder="Опис:"
        />
        <input
          className={styles.input_form}
          value={good.price}
          onChange={(e) => setGood({ ...good, price: e.target.value })}
          type="input"
          placeholder="Ціна:"
        />

        <label htmlFor="files">Виділіть картинки та оберіть їх</label>
        <input
          className={styles.input_form}
          onChange={handleFileChange}
          type="file"
          id="files"
          name="files"
          placeholder="Картинки"
          multiple
        />
      </div>
      <div className={styles.btn_comeback_pay}>
        <a className={styles.cancel} onClick={() => close()}>
          Скасувати
        </a>
        <a className={styles.pay} onClick={add}>
          Зберегти
        </a>
      </div>
    </div>
  );
}
