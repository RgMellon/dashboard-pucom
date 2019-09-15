import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
} from './styles';

export default function Store() {
  const { profile } = useSelector(state => state.user);
  function handleSubmit() {
    console.tron.log(profile);
  }

  return (
    <Container>
      <ContentLeft>
        <HeaderTable>
          <h1> Atualizar Loja </h1>
          <p> Atualize os dados de sua loja </p>
        </HeaderTable>
        <PucomForm initialData={profile} onSubmit={handleSubmit}>
          <PucomInput name="social_name" placeholder="Teste" />
          <PucomInput name="postal_code" type="text" placeholder="CEP" />

          <TwoColumn>
            <PucomInput name="city" type="text" placeholder="Cidade" />
            <PucomInput name="state" type="text" placeholder="Estado" />
          </TwoColumn>

          <PucomInput name="district" type="text" placeholder="Bairro" />

          <TwoColumn>
            <PucomInput name="address" type="text" placeholder="Endereço" />
            <PucomInput type="text" name="number" placeholder="Número" />
          </TwoColumn>

          <PucomInput type="tel" name="phone" placeholder="Telefone" />

          <WrapperButton>
            <button> Atualizar </button>
          </WrapperButton>
        </PucomForm>
      </ContentLeft>
      <ContentRight>
        <CardProfile>
          <img src={profile.image} alt="imagem loja" />
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
