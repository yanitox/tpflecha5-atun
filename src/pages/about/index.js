import styles from '../about/index.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Citas from '../../components/Citas/Citas.js';
import Form from '../../components/Form/Form.js';
import Subtitulo from '../../components/Subtitulo/Subtitulo.js';
import Titulo from '../../components/Titulo/Titulo.js';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [citas, setCitas] = useState([
    {
      ID: 1,
      mascota: "Nina",
      dueño: "Martin",
      fecha: "2021-08-05",
      hora: "8:20",
      sintomas: "Le duele la pierna"
    },
    {
      ID: 2,
      mascota: "Sifon",
      dueño: "Flecha",
      fecha: "2023-08-04",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      ID: 3,
      mascota: "Floki",
      dueño: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No esta comiendo"
    }
  ]);

  return (
    <div className={styles.bodyp}>
      <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/qnes">Quienes somos</Link>
        </li>
        <li>
          <Link href="/about">citas</Link>
        </li>
        <li>
          <Link href="/contacto">Ayuda</Link>
        </li>
      </ul>
      </nav>
      <Titulo />
      <div className="container">
        <div className="one-half column">
          <Subtitulo texto="CREAR MI CITA" />
          <Form setCitas={setCitas} citas={citas} />
        </div>
        <div className="one-half column">
          <Subtitulo texto="ADMINISTRA TUS CITAS" />
          <Citas setCitas={setCitas} citas={citas} />
        </div>
      </div>
    </div>
  );
}
