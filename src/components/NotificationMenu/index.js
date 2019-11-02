import React, { useState, useEffect } from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  ScrollBar,
  Notification,
  ContentInfo,
} from './styles';

import api from '~/services/api';

export default function NotificationMenu() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getNotifications() {
      try {
        const response = await api.get('/notifications/takes');
        setData(response.data.takes);
      } catch (e) {
        console.tron.log(e);
      }
    }

    getNotifications();
  }, []);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleVisible}>
        {data.length > 0 && <span> {data.length} </span>}
        <MdNotifications color="color: rgb(102, 102, 102);" size={20} />
      </Badge>

      {data.length > 0 && (
        <NotificationList visible={visible}>
          <ScrollBar>
            {data.map(item => (
              <Notification>
                <img src={item.image} alt="" />
                <ContentInfo>
                  <p> {item.title}</p>
                  <span> {item.date}</span>
                </ContentInfo>
              </Notification>
            ))}
          </ScrollBar>
        </NotificationList>
      )}
    </Container>
  );
}
