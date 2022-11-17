/* eslint-disable array-callback-return */
/* eslint-disable prefer-destructuring */
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {
  Flex, Text, IconButton,
} from '@chakra-ui/react';
import { IoChevronBackOutline } from 'react-icons/io5';
import ProjectList from './project_list';
import Beige from '../../assets/images/backgrounds/beige-bg.png';

function Project(props) {
  const navigate = useNavigate();
  const id = useParams().project;
  const projects = ProjectList.filter((proj) => proj.id === id);
  const project = projects[0];

  const handleBack = () => {
    navigate('/work');
  };

  function importAll(r) {
    return r.keys().map(r);
  }
  const wellbuddies = importAll(require.context('../../assets/images/projects/wellbuddies', false, /\.(png|jpe?g|svg|gif)$/));
  const room = importAll(require.context('../../assets/images/projects/room', false, /\.(png|jpe?g|svg|gif)$/));
  const drawings = importAll(require.context('../../assets/images/projects/drawings', false, /\.(png|jpe?g|svg|gif)$/));
  const astrobunny = importAll(require.context('../../assets/images/projects/astrobunny', false, /\.(png|jpe?g|svg|gif)$/));
  const bookshelf = importAll(require.context('../../assets/images/projects/bookshelf', false, /\.(png|jpe?g|svg|gif)$/));
  const pcfa = importAll(require.context('../../assets/images/projects/pcfa', false, /\.(png|jpe?g|svg|gif)$/));
  const pos = importAll(require.context('../../assets/images/projects/pos', false, /\.(png|jpe?g|svg|gif)$/));
  const notes = importAll(require.context('../../assets/images/projects/notes', false, /\.(png|jpe?g|svg|gif)$/));
  const svpp = importAll(require.context('../../assets/images/projects/svpp', false, /\.(png|jpe?g|svg|gif)$/));
  const paintings = importAll(require.context('../../assets/images/projects/paintings', false, /\.(png|jpe?g|svg|gif)$/));
  const timetable = importAll(require.context('../../assets/images/projects/timetable', false, /\.(png|jpe?g|svg|gif)$/));
  const digital = importAll(require.context('../../assets/images/projects/digital', false, /\.(png|jpe?g|svg|gif)$/));
  const sobremesa = importAll(require.context('../../assets/images/projects/sobremesa', false, /\.(png|jpe?g|svg|gif)$/));
  const editorial = importAll(require.context('../../assets/images/projects/editorial', false, /\.(png|jpe?g|svg|gif)$/));
  const etch = importAll(require.context('../../assets/images/projects/etch', false, /\.(png|jpe?g|svg|gif)$/));
  const sculpture = importAll(require.context('../../assets/images/projects/sculpture', false, /\.(png|jpe?g|svg|gif)$/));
  const vitalize = importAll(require.context('../../assets/images/projects/vitalize', false, /\.(png|jpe?g|svg|gif)$/));
  const quiz = importAll(require.context('../../assets/images/projects/quiz', false, /\.(png|jpe?g|svg|gif)$/));
  const aapihm = importAll(require.context('../../assets/images/projects/aapihm', false, /\.(png|jpe?g|svg|gif)$/));

  let images = [];

  switch (id) {
    case 'wellbuddies':
      images = wellbuddies;
      break;
    case 'room':
      images = room;
      break;
    case 'drawings':
      images = drawings;
      break;
    case 'astrobunny':
      images = astrobunny;
      break;
    case 'bookshelf':
      images = bookshelf;
      break;
    case 'pcfa':
      images = pcfa;
      break;
    case 'pos':
      images = pos;
      break;
    case 'notes':
      images = notes;
      break;
    case 'svpp':
      images = svpp;
      break;
    case 'paintings':
      images = paintings;
      break;
    case 'timetable':
      images = timetable;
      break;
    case 'digital':
      images = digital;
      break;
    case 'sobremesa':
      images = sobremesa;
      break;
    case 'etch':
      images = etch;
      break;
    case 'editorial':
      images = editorial;
      break;
    case 'sculpture':
      images = sculpture;
      break;
    case 'vitalize':
      images = vitalize;
      break;
    case 'quiz':
      images = quiz;
      break;
    case 'aapihm':
      images = aapihm;
      break;
    default:
      break;
  }

  if (project) {
    return (
      <div className="page project">
        <img id="home-bg" src={Beige} alt={Beige} />
        <div className="general">
          <Flex flexDir={['column', 'column', 'row']}>
            <IconButton fontSize="xl"
              mr={4}
              mb={4}
              w="40px"
              bg=""
              color="rgba(0, 0, 0, 0.7)"
              icon={<IoChevronBackOutline />}
              onClick={handleBack}
              borderColor="transparent"
            />
            <Flex flexDir="column" gridGap={3} w={['95%', '95%', '75%']} m="auto">
              <Flex flexDir="column">
                <div className="project-title">{project.title}</div>
                <Text color="rgba(0, 0, 0, 0.7)">{project.description}</Text>
              </Flex>
              <Flex mt={2} flexDir="column" gridGap={3}>
                <ReactMarkdown>
                  {project.text}
                </ReactMarkdown>
                {project.link
                  ? <a href={project.link}>Try it out ↗</a>
                  : ''}
              </Flex>
              <div className="image-container">
                {project.html ? <iframe width="840" height="472" src={project.html} title="Youtube" />
                  : ''}
                {
                    images.map(
                      (image) => (
                        <div className="project-img">
                          <img src={image} alt="info" />
                        </div>
                      ),
                    )
              }
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    );
  } else {
    return (
      <div className="page">
        <img id="home-bg" src={Beige} alt={Beige} />
        <div className="general">
          No project found :(
        </div>
      </div>
    );
  }
}

export default Project;
