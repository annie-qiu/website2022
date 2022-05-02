import svpp from '../../img/svpp.png';
import notes from '../../img/notes.png';
import room1 from '../../img/room/room1.jpg';
import room2 from '../../img/room/room2.jpg';
import room3 from '../../img/room/room3.jpg';
import room4 from '../../img/room/room4.jpg';
import room5 from '../../img/room/room5.jpg';
import etch from '../../img/etch.png';

const ProjectItems = [
  {
    title: 'Sexual Violence Prevention Program',
    description: 'Partnered with Dartmouth’s four-year sexual violence prevention program to design a digital platform to track progress',
    img: svpp,
    tags: 'UI/UX design',
    category: 'design',
  },
  {
    title: 'Notes',
    description: 'Interactive note-taking website with authentication and multiple boards',
    img: notes,
    tags: 'React, Firebase',
    link: 'https://annie-qiu-notes.onrender.com/',
    category: 'code',
  },
  {
    title: '3D Digital Modeling Projects',
    description: 'Digital models of the room from The Farewell and abstract landscapes',
    carousel: [room1, room2, room3, room4, room5],
    tags: 'Maya',
    category: 'art',
  },
  {
    title: 'Etch-a-Sketch',
    description: 'Simple etch-a-sketch made to practice Javascript',
    tags: 'HTML/CSS/Javascript',
    category: 'code',
    img: etch,
    link: 'https://annie-qiu.github.io/etch-a-sketch/',
  },
];

export default ProjectItems;
