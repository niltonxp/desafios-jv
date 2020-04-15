import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './styles.css';

function Main() {

  return (
    <div className="App">
      <Button className='btn' type="primary">
        <Link to={`/cadastro/`}>Cadastrar</Link>
      </Button>
    </div>
  );

}

export default Main;