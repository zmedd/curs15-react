import React from "react";
import { Grid, Typography, EventCard } from "../components";

const events = [
  {
    title: "HTML",
    date: "26 Oct.",
    location: "Online",
    color: "red",
  },
  {
    title: "CSS",
    date: "26 Oct.",
    location: "Online",
    color: "yellow",
  },
  {
    title: "JavaScript",
    date: "26 Oct.",
    location: "Online",
    color: "blue",
  },
  {
    title: "Git",
    date: "26 Oct.",
    location: "Online",
    color: "green",
  },
  {
    title: "Bootstrap",
    date: "26 Oct.",
    location: "Online",
    color: "red",
  },
  {
    title: "Social Media",
    date: "26 Oct.",
    location: "Online",
    color: "yellow",
  },
  {
    title: "SCSS",
    date: "26 Oct.",
    location: "Online",
    color: "blue",
  },
  {
    title: "ReactJS",
    date: "26 Oct.",
    location: "Online",
    color: "green",
  },
];

export const Homepage = () => {
  return (
    <Grid.Container fluid style={{ backgroundColor: "#fafafa" }}>
      <Grid.Row>
        <Grid.Container>
          <Grid.Row>
            <Grid.Col sizes={{ lg: 12, md: 12, sm: 12 }}>
              <Grid.Spacer size={40} />
              <Typography.H1 align="center">Calendar evenimente</Typography.H1>
              <Grid.Spacer size={30} />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
        <Grid.Container>
          <Grid.Row>
            {events.map((event, index) => (
              <Grid.Col
                sizes={{ lg: 3, md: 6, sm: 12 }}
                key={`${event.title}_${index}`}
              >
                <EventCard
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  color={event.color}
                />
              </Grid.Col>
            ))}
            <Grid.Spacer size={40} />
          </Grid.Row>
        </Grid.Container>
      </Grid.Row>
    </Grid.Container>
  );
};
