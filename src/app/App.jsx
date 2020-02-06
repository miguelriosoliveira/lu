import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import CloseIcon from '@material-ui/icons/CloseOutlined';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import './App.css';

function App() {
  const [cep, setCep] = useState('');

  return (
    <div className="app-component">
      <section className="search-box">
        <Typography variant="h6">Consultar</Typography>
        <form
          className="search"
          onSubmit={e => {
            e.preventDefault();
            console.log('mandou');
          }}
        >
          <InputMask mask="99999-999" value={cep} onChange={e => setCep(e.target.value)}>
            {() => <TextField autoFocus variant="outlined" label="CEP" placeholder="12345-678" name="cep" />}
          </InputMask>

          <Button type="submit" variant="contained" color="primary">
            Buscar
          </Button>
        </form>
      </section>

      <section className="map">
        mapa aqui
        <IconButton>
          <CloseIcon />
        </IconButton>
      </section>
    </div>
  );
}

export default App;
