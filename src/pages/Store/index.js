import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import axios from 'axios';
import { updateProfileRequest } from '~/store/modules/user/actions';

import {
  Container,
  ContentLeft,
  ContentRight,
  CardProfile,
  HeaderTable,
  PucomInput,
  TwoColumn,
  WrapperButton,
  PucomForm,
  SearchCep,
  PucomInputMask,
} from './styles';

export default function Store() {
  const { profile } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [fantasyName, setFantasyName] = useState(profile.fantasy_name);
  const [city, setCity] = useState(profile.city);
  const [postalCode, setPostalCode] = useState(profile.postal_code);
  const [state, setState] = useState(profile.state);
  const [district, setDistrict] = useState(profile.district);
  const [address, setAdress] = useState(profile.address);
  const [number, setNumber] = useState(profile.number);
  const [phone, setPhone] = useState(profile.phone);

  // const [image, setImage] = useState('');
  // const [preview, setPreview] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [type, setType] = useState('');

  async function handleSearchCep() {
    if (postalCode.length < 7) {
      toast.error('Erro ao buscar cep');
      return;
    }
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${postalCode}/json/`
      );

      const { logradouro, bairro, localidade, uf } = response.data;

      setAdress(logradouro);
      setDistrict(bairro);
      setState(uf);
      setCity(localidade);

      toast.success('Cep encontrado ');
    } catch (e) {
      toast.error('Erro ao buscar cep');
    }
  }

  async function handleSubmit() {
    const data = new FormData();
    data.append('fantasy_name', fantasyName);
    data.append('city', city);
    data.append('postal_code', postalCode);
    data.append('district', district);
    data.append('state', state);
    data.append('address', address);
    data.append('number', number);
    data.append('phone', phone);
    data.append('_method', 'PUT');

    try {
      dispatch(updateProfileRequest(data));
    } catch (e) {
      console.tron.log(e);
      toast.error('Erro ao atualizar loja');
    }
  }

  return (
    <Container>
      <ContentLeft>
        <HeaderTable>
          <h1> Atualizar Loja </h1>
          <p> Atualize os dados de sua loja </p>
        </HeaderTable>
        <PucomForm initialData={profile} onSubmit={handleSubmit}>
          {/* <input type="file" name="" id="image" onChange={handleChange} /> */}

          <span> Nome Fantasia </span>
          <PucomInput
            onChange={e => setFantasyName(e.target.value)}
            name="fantasy_name"
            placeholder="Nome Fantasia"
          />

          <span> Social Name </span>
          <PucomInput
            // onChange={e => setSocialN(e.target.value)}
            name="social_name"
            placeholder="Social name"
            disabled
            // value={social_name}
          />

          <span> CEP </span>

          <SearchCep>
            <PucomInputMask
              mask="99999-999"
              name="postal_code"
              placeholder="CEP"
              onChange={e => setPostalCode(e.target.value)}
              value={postalCode}
            />

            <button type="button" onClick={handleSearchCep}>
              Buscar
            </button>
          </SearchCep>

          <TwoColumn>
            <div>
              <span> Cidade </span>
              <PucomInput
                onChange={e => setCity(e.target.value)}
                name="city"
                type="text"
                placeholder="Cidade"
                value={city}
                disabled
              />
            </div>

            <div>
              <span> Estado </span>
              <PucomInput
                onChange={e => setState(e.target.value)}
                name="state"
                type="text"
                placeholder="Estado"
                disabled
                value={state}
              />
            </div>
          </TwoColumn>

          <span> Bairro </span>
          <PucomInput
            onChange={e => setDistrict(e.target.value)}
            name="district"
            type="text"
            placeholder="Bairro"
            disabled
            value={district}
          />

          <TwoColumn>
            <div>
              <span> Endereço </span>
              <PucomInput
                onChange={e => setAdress(e.target.value)}
                name="address"
                type="text"
                placeholder="Endereço"
                disabled
                value={address}
              />
            </div>

            <div>
              <span> Numero </span>
              <PucomInput
                onChange={e => setNumber(e.target.value)}
                type="text"
                name="number"
                placeholder="Número"
                // disabled
                // value={}
              />
            </div>
          </TwoColumn>

          <span> Telefone </span>

          <PucomInputMask
            mask="(99)99999-9999"
            name="phone"
            type="tel"
            placeholder="Telefone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            // value={props.value}
          />
          <WrapperButton>
            <button> Atualizar </button>
          </WrapperButton>
        </PucomForm>
      </ContentLeft>
      <ContentRight>
        <CardProfile>
          {/* <img src={profile.image} alt="imagem loja" /> */}
          <h1> {profile.social_name} </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </CardProfile>
      </ContentRight>
    </Container>
  );
}
