import React from 'react'
import { Circles } from  'react-loader-spinner'
import '../../index.css';

const Loader = () => {
  return (
    <div>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass="Spinner"
        visible={true}
      />
    </div>
  );
};

export default Loader;