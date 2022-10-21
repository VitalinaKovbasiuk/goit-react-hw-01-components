import React from "react";
import PropTypes from "prop-types";
import {StatisticsContainer, Title, List, Item, Label, Percentage} from './Statistics.styled'

export default function Statistics({ title, stats }) {
  return (
    <StatisticsContainer>
      <Title>{title}</Title>

      <List>
        {stats.map((stats) => (
          <Item id={stats.id} key={stats.id}>
            <Label>{stats.label}</Label>
            <Percentage>{stats.percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </StatisticsContainer>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
