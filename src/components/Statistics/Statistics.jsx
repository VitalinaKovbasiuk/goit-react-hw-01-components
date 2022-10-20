import React from "react";
import PropTypes from "prop-types";

export default function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {stats.map((stats) => (
          <li class="item" key={stats.id}>
            <span class="label">{stats.label}</span>
            <span class="percentage">{stats.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
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
