import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';

function ProjectCard(props) {
  if (props.proj) {
    return (
      <Flex flexDir="column" w="sm" h="100%" gridGap={2} m={4}>
        <Image src={props.proj.img} />
        <Flex flexDir="column">
          <Text fontSize={20}>{props.proj.title}</Text>
          <Text fontSize={16} fontWeight={300} color="rgba(0, 0, 0, 0.7)">{props.proj.description}</Text>
        </Flex>
      </Flex>
    );
  }
}

export default ProjectCard;
