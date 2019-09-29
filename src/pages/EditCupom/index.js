import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

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

export default function EditCupom() {
  const { cupom } = useSelector(state => state.cupom);

  const [title, setTitle] = useState(cupom.title);
  const [description, setDescription] = useState(cupom.description);
  const [price, setPrice] = useState(cupom.price);
  const [discount, setDiscount] = useState(cupom.discount);
  const [amount, setAmount] = useState(cupom.amount);
  const [minutes, setMinutes] = useState(cupom.minutes);
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState(cupom.image);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(cupom.type);

  const priceWithDiscount = useMemo(() => {
    if (type === 'value') {
      return price - discount;
    }

    if (type === 'percentage') {
      const percent = discount / 100;
      const subtotal = percent * price;
      return parseFloat(price - subtotal).toFixed(2);
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
    data.append('_method', 'PUT');

    setLoading(true);

    try {
      await api.post(`coupons/${cupom.id}`, data);
      toast.success('Cuuuupooom atualizado');

      setLoading(false);
    } catch (e) {
      console.tron.log(e);
      setLoading(false);
      toast.error('Falha ao atualizar cupom');
    }
  }

  return (
    <Container>
      <ContentLeft>
        <HeaderTable>
          <h1> Editar cupom </h1>
          <p> Quer mudar algo? lugar certo :D</p>
        </HeaderTable>

        <PucomForm onSubmit={handleSubmit}>
          <input type="file" name="" id="image" onChange={handleChange} />

          <span> Cupom </span>
          <PucomInput
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            placeholder="Título do cupom"
          />

          <span> Descrição do cupom </span>
          <PucomInput
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            type="text"
            placeholder="Descrição do cupom"
          />

          <span> Tipo de desconto atual {type} </span>
          <PucomSelect
            name="type"
            onChange={e => setType(e.target.value)}
            options={options}
            placeholder="Selecione um tipo de desconto"
            value={type}
          />

          <TwoColumn>
            <div>
              <span> Preço do produto</span>
              <PucomInput
                type="number"
                step="0.01"
                min="0"
                name="price"
                value={price}
                onChange={e => setPrice(e.target.value)}
                placeholder="Preço original do produto"
              />
            </div>

            <div>
              <span> Desconto aplicado </span>
              <PucomInput
                type="number"
                step="0.01"
                min="0"
                disabled={!price.length > 0}
                name="discount"
                value={discount}
                onChange={e => setDiscount(e.target.value)}
                placeholder="Quantidade de desconto no produto  "
              />
            </div>
          </TwoColumn>

          <span>Quantidade disponibilizada </span>
          <PucomInput
            name="amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            type="number"
            placeholder="Quantidade de cupom disponiveis"
          />

          <span> Tempo de duração do cupom</span>

          <PucomInput
            type="number"
            step="0.01"
            min="0"
            name="minutes"
            value={minutes}
            onChange={e => setMinutes(e.target.value)}
            placeholder="Tempo de validade em minutos"
          />

          <WrapperButton>
            <SubmitButton loading={loading}>
              {loading ? (
                <FaSpinner size={14} color="#FFF" />
              ) : (
                <p> Atualizar </p>
              )}
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
