import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://pbs.twimg.com/profile_images/1290019927131328514/daIq34Sw_400x400.jpg" alt="Atila Iamarino" />
        <div>
          <strong>Atila Iamarino</strong>
          <span>Biologia</span>
        </div>
      </header>

      <p>
        Biólogo, divulgador científico e explicador do mundo por opção.
          <br /><br />
            Apaixonado por ler um milhão de livros e explicar coisas no YouTube.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 333,00</strong>
        </p>
        <button type="button">
          <img src={WhatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;