import React, { useState } from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  ScrollBar,
  Notification,
  ContentInfo,
} from './styles';

export default function NotificationMenu() {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleVisible}>
        <MdNotifications color="color: rgb(102, 102, 102);" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <ScrollBar>
          <Notification>
            <img
              src="https://imgcentauro-a.akamaihd.net/900x900/91580601/camiseta-adidas-core-18-masculina-img.jpg"
              alt=""
            />
            <ContentInfo>
              <p> Camisa branca</p>
              <span> hà 20 min</span>
            </ContentInfo>
          </Notification>

          <Notification>
            <img
              src="https://imgcentauro-a.akamaihd.net/900x900/91580601/camiseta-adidas-core-18-masculina-img.jpg"
              alt=""
            />
            <ContentInfo>
              <p> Camisa branca</p>
              <span> hà 20 min</span>
            </ContentInfo>
          </Notification>

          <Notification>
            <img
              src="https://imgcentauro-a.akamaihd.net/900x900/91580601/camiseta-adidas-core-18-masculina-img.jpg"
              alt=""
            />
            <ContentInfo>
              <p> Camisa branca</p>
              <span> hà 20 min</span>
            </ContentInfo>
          </Notification>

          <Notification>
            <img
              src="https://imgcentauro-a.akamaihd.net/900x900/91580601/camiseta-adidas-core-18-masculina-img.jpg"
              alt=""
            />
            <ContentInfo>
              <p> Camisa branca</p>
              <span> hà 20 min</span>
            </ContentInfo>
          </Notification>

          <Notification>
            <img
              src="https://imgcentauro-a.akamaihd.net/900x900/91580601/camiseta-adidas-core-18-masculina-img.jpg"
              alt=""
            />
            <ContentInfo>
              <p> Camisa branca</p>
              <span> hà 20 min</span>
            </ContentInfo>
          </Notification>
          <Notification>
            <img
              src="https://imgcentauro-a.akamaihd.net/900x900/91580601/camiseta-adidas-core-18-masculina-img.jpg"
              alt=""
            />
            <ContentInfo>
              <p> Camisa branca</p>
              <span> hà 20 min</span>
            </ContentInfo>
          </Notification>
        </ScrollBar>
      </NotificationList>
    </Container>
  );
}
