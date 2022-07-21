/* eslint-disable no-lone-blocks */
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Image, Text } from '@chakra-ui/react';

function ProjectCard(props) {
  if (props.proj) {
    return (
      <Link to={`${props.proj.id}`}>
        <Flex flexDir="column" w={['xs', 'sm']} h="100%" gridGap={2} m={4}>
          <Image src={props.proj.img} />
          <Flex flexDir="column">
            <Text fontSize={20}>{props.proj.title}</Text>
            <Text fontSize={16} color="rgba(0, 0, 0, 0.7)">{props.proj.description}</Text>
          </Flex>
        </Flex>
      </Link>
    );
  }
}

export default ProjectCard;
