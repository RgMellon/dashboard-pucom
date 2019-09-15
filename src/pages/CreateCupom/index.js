import React, { useState, useEffect } from 'react';

import {
  Container,
  ContentLeft,
  ContentRight,
  CardPucom,
  HeaderTable,
  PucomForm,
  PucomInput,
  PucomSelect,
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
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [amount, setAmount] = useState('');
  const [minutes, setMinutes] = useState('');

  const options = [
    { id: 'value', title: 'valor' },
    { id: 'percentage', title: 'porcentagem' },
  ];

  function handleSubmit({ title }) {
    console.tron.log(title);
  }

  return (
    <Container>
      <ContentLeft>
        <HeaderTable>
          <h1> Criar Cupom </h1>
          <p> Crie o cupom e compartilhe com a galera </p>
        </HeaderTable>

        <PucomForm onSubmit={handleSubmit}>
          <PucomInput
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            placeholder="Título do cupom"
          />

          <PucomInput
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            type="text"
            placeholder="Descrição do cupom"
          />

          <PucomSelect
            // defaultValue="percentage"
            name="type"
            options={options}
          />

          <TwoColumn>
            <PucomInput
              name="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
              type="text"
              placeholder="Preço Original do produto"
            />

            <PucomInput
              name="discount"
              value={discount}
              onChange={e => setDiscount(e.target.value)}
              type="text"
              placeholder="Quantidade de desconto no produto  "
            />
          </TwoColumn>

          <PucomInput
            name="amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            type="text"
            placeholder="Quantidade de cupom disponiveis"
          />

          <PucomInput
            name="minutes"
            value={minutes}
            onChange={e => setMinutes(e.target.value)}
            type="text"
            placeholder="Quantidade de cupom disponiveis"
          />

          <WrapperButton>
            <button> Criar </button>
          </WrapperButton>
        </PucomForm>
      </ContentLeft>

      <ContentRight>
        {title && (
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
              <h4> {title}</h4>
            </RightCupom>
          </CardPucom>
        )}
      </ContentRight>
    </Container>
  );
}
