/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Filter = () => {
  return (
    <form onClick={(event) => console.log(event.target.checked)}>
      <div>
        <label>
          <p>Design</p>
          <input type="checkbox" name="design" value="design" />
        </label>
        <label>
          <p>Art</p>
          <input type="checkbox" name="art" value="art" />
        </label>
        <label>
          <p>Code</p>
          <input type="checkbox" name="code" value="code" />
        </label>
      </div>
    </form>
  );
};

export default Filter;
