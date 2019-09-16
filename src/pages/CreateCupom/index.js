import React, { useState, useMemo } from 'react';
import { toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';

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
  SubmitButton,
} from './styles';

import api from '~/services/api';

export default function CreateStore() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [amount, setAmount] = useState('');
  const [minutes, setMinutes] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('');

  const priceWithDiscount = useMemo(() => {
    if (type === 'value') {
      return price - discount;
    }

    if (type === 'percentage') {
      const percent = discount / 100;
      const subtotal = percent * price;
      return subtotal;
    }
  }, [discount, type]);

  const options = [
    { id: 'value', title: 'valor' },
    { id: 'percentage', title: 'porcentagem' },
  ];

  function handleChange(e) {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  }
  async function handleSubmit({
    title,
    description,
    type,
    price,
    amount,
    discount,
    minutes,
  }) {
    const data = new FormData();
    data.append('image', image);
    data.append('title', title);
    data.append('description', description);
    data.append('type', type);
    data.append('price', price);
    data.append('amount', amount);
    data.append('discount', discount);
    data.append('minutes', minutes);

    setLoading(true);

    try {
      await api.post('coupons', data);
      toast.success('Cupom adicionado com sucesso :D');

      setDiscount('');
      setPreview('');
      setAmount('');
      setDescription('');
      setType('');
      setTitle('');
      setPrice('');
      setMinutes('');
      setImage('');

      setLoading(false);
    } catch (e) {
      setLoading(false);
      toast.error('Falha ao adicionar cupom');
    }
  }

  return (
    <Container>
      <ContentLeft>
        <HeaderTable>
          <h1> Criar Cupom </h1>
          <p> Crie o cupom e compartilhe com a galera </p>
        </HeaderTable>

        <PucomForm onSubmit={handleSubmit}>
          <input type="file" name="" id="image" onChange={handleChange} />

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
            name="type"
            onChange={e => setType(e.target.value)}
            options={options}
            placeholder="Selecione um tipo de desconto"
          />

          <TwoColumn>
            <PucomInput
              type="number"
              step="0.01"
              min="0"
              // max="1000÷"ß
              name="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
              // type="text"
              placeholder="Preço Original do produto"
            />

            <PucomInput
              type="number"
              step="0.01"
              min="0"
              // max="10"
              disabled={!price.length > 0}
              name="discount"
              value={discount}
              onChange={e => setDiscount(e.target.value)}
              // type="text"
              placeholder="Quantidade de desconto no produto  "
            />
          </TwoColumn>

          <PucomInput
            name="amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            type="number"
            placeholder="Quantidade de cupom disponiveis"
          />

          <PucomInput
            name="minutes"
            value={minutes}
            onChange={e => setMinutes(e.target.value)}
            type="text"
            placeholder="Tempo de validade em minutos"
          />

          <WrapperButton>
            <SubmitButton loading={loading}>
              {loading ? <FaSpinner size={14} color="#FFF" /> : <p> Criar </p>}
            </SubmitButton>
          </WrapperButton>
        </PucomForm>
      </ContentLeft>

      <ContentRight>
        {preview && (
          <CardPucom>
            <LeftCupom>
              <img src={preview} alt="" />
              {discount && (
                <BadgeDiscount>
                  {type === 'value' ? (
                    <p> {parseFloat(discount).toFixed(2)} </p>
                  ) : (
                    <p> {discount}% </p>
                  )}
                </BadgeDiscount>
              )}
            </LeftCupom>
            <RightCupom>
              <WrapperPrice>
                {price && (
                  <OldPrice> R${parseFloat(price).toFixed(2)} </OldPrice>
                )}
                {priceWithDiscount > 0 && (
                  <DiscountPrice>
                    <p> {priceWithDiscount} </p>
                  </DiscountPrice>
                )}
              </WrapperPrice>
              <h4> {title}</h4>
            </RightCupom>
          </CardPucom>
        )}
      </ContentRight>
    </Container>
  );
}
