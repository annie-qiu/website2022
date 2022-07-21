/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { Flex } from '@chakra-ui/react';

function Filter(props) {
  function select(category) {
    props.filter(category);
  }

  return (
    <Flex justifyContent="center" m={4}>
      <form onChange={(e) => select(e.target.value)}>
        <Flex gridGap={4}>
          <label className="filter"><input type="radio" value="all" name="filter" />All</label>
          <label className="filter"><input type="radio" value="code" name="filter" />Code</label>
          <label className="filter"><input type="radio" value="design" name="filter" />Design</label>
          <label className="filter"><input type="radio" value="art" name="filter" />Art</label>
        </Flex>
      </form>
    </Flex>

  );
}
export default Filter;
