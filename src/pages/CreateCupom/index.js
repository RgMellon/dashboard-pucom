import React from 'react';

import {
  Container,
  ContentLeft,
  ContentRight,
  CardPucom,
  HeaderTable,
  Form,
  TwoColumn,
  WrapperButton,
  LeftCupom,
  RightCupom,
  DiscountPrice,
  OldPrice,
  WrapperPrice,
  BadgeDiscount,
} from './styles';

export default function CreateStore() {
  return (
    <Container>
      <ContentLeft>
        <HeaderTable>
          <h1> Criar Cupom </h1>
          <p> Crie o cupom e compartilhe com a galera </p>
        </HeaderTable>

        <Form>
          <input type="text" placeholder="Título do cupom" />
          <input type="text" placeholder="Deixe uma breve descrição do cupom" />
          {/* Enviar nome da loja */}
          <select>
            <option value="" selected disabled hidden>
              Selecione o tipo de desconto
            </option>
            <option> Valor </option>
            <option> Porcentagem </option>
          </select>
          <TwoColumn>
            <input type="tel" placeholder="Preço do produo" />
            <input type="text" placeholder="Desconto no produto" />
          </TwoColumn>

          <input
            type="number"
            placeholder="Quantidade de cupons que ficará disponível"
            minLength="1"
          />

          <input type="text" placeholder="Imagem" />
          <input type="text" placeholder="Duracao em minutos" />

          <WrapperButton>
            <button> Criar </button>
          </WrapperButton>
        </Form>
      </ContentLeft>

      <ContentRight>
        <CardPucom>
          <LeftCupom>
            <img
              src="https://img.elo7.com.br/product/original/1A7BBC4/10-camisa-personalizada-em-todos-os-temas-e-eventos-camiseta-feminina-personalizada.jpg"
              alt=""
            />
            <BadgeDiscount>
              <p> 30% </p>
            </BadgeDiscount>
          </LeftCupom>
          <RightCupom>
            <WrapperPrice>
              <OldPrice> R$12.00 </OldPrice>
              <DiscountPrice> R$6.00 </DiscountPrice>
            </WrapperPrice>
            <h4> Camiseta Nazare Da Silva</h4>
          </RightCupom>
        </CardPucom>
      </ContentRight>
    </Container>
  );
}
