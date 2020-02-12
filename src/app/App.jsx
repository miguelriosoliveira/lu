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
  const [snackbar, setSnackbar] = useState({ message: '', severity: 'info' });
  const [address, setAddress] = useState({});
  const [loading, setLoading] = useState(false);

  function closeSnackbar() {
    setSnackbar({ ...snackbar, message: '' });
  }

  function onChange(event) {
    setCep(event.target.value);
  }

  function searchInMaps(address) {
    if (address.erro) {
      setSnackbar({ ...snackbar, message: 'CEP inválido', severity: 'error' });
      return;
    } else {
      setAddress(address);
    }
  }

  function removeMask(cep) {
    return cep.replace(/\D/, '');
  }

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    let response = null;
    let cepNumbers = removeMask(cep);
    try {
      response = await axios.get(`https://viacep.com.br/ws/${cepNumbers}/json/?callback=${searchInMaps.name}`);
    } catch (error) {
      setSnackbar({ ...snackbar, message: 'CEP inválido', severity: 'error' });
      return;
    } finally {
      setLoading(false);
    }

    eval(response.data);
  }

  function renderLocation(address) {
    // const { iframeKey } = this.state;
    let baseUrl = `https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_GOOGLE_KEY}&q=`;
    let location = `${address.logradouro}+${address.localidade}`;

    if (address.logradouro && address.localidade) {
      return (
        <iframe
          // key={iframeKey}
          allowFullScreen
          title="map-view"
          frameBorder="0"
          className="document-analysis__data-container__location"
          src={`${baseUrl}${location}&language=pt-BR`}
        />
      );
    } else {
      return <Typography variant="caption">Localização não encontrada</Typography>;
    }
  }

  function clear() {
    setCep('');
    setAddress({});
  }

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
