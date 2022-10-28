import React from 'react';

import '../../index.css';

const Button = ({ loadMore }) => {
  return (
    <>
      <button
        onClick={loadMore}
        type="button"
        className="Button"
      >
        Load more
      </button>
    </>
  );
};


export default Button


// Опис компонента <Button>

// При натисканні на кнопку Load more повинна довантажуватись наступна порція зображень і рендеритися разом із попередніми. Кнопка повинна рендеритися лише тоді, коли є якісь завантажені зображення. Якщо масив зображень порожній, кнопка не рендериться.