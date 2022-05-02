/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import './Work.scss';

const Filter = (props) => {
  const [checked, setChecked] = useState([]);
  const tagValues = ['Design', 'Art', 'Code'];

  const handleChange = (e) => {
    let updated = [...checked];
    if (e.target.checked) {
      updated = [...checked, e.target.value];
    } else {
      updated.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updated);
  };

  useEffect(() => {
    props.filterProjects(checked);
  });

  return (
    <form onClick={handleChange} className="project-filters">
      <div>
        {tagValues.map((tag) => (
          <label onClick={({ target }) => target.classList.toggle('selected')}>
            <p>{tag}</p>
            <input type="checkbox" value={tag.toLowerCase()} />
          </label>
        ))}
      </div>
    </form>
  );
};

export default Filter;
