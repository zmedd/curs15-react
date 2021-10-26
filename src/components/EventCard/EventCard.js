import React from "react";
import { faCalendar, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "..";
import { Container, Details, Line, Icon } from "./EventCard.style";

export const EventCard = ({ title, date, location, color }) => {
  return (
    <Container>
      <Typography.H3>{title}</Typography.H3>
      <Details>
        <Icon icon={faCalendar} />
        <p>{date}</p>
        <Icon icon={faMapMarker} />
        <p>{location}</p>
      </Details>
      <Line color={color} />
    </Container>
  );
};
