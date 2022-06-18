/* eslint-disable max-len */
import svpp from '../../img/svpp.png';
import notes from '../../img/notes.png';
import room1 from '../../img/room/room1.jpg';
import room2 from '../../img/room/room2.jpg';
import room3 from '../../img/room/room3.jpg';
import room4 from '../../img/room/room4.jpg';
import room5 from '../../img/room/room5.jpg';
import etch from '../../img/etch.png';
import wellbuddies from '../../img/wellbuddies.png';
import astrobunny from '../../img/astrobunny.png';
import vitalize from '../../img/vitalize.png';
import books from '../../img/bookshelf.png';
import art from '../../img/art.jpg';

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
    title: '3D Digital Modeling',
    description: 'Digital models of the living room from The Farewell with textures and rendering',
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
    github: 'https://github.com/annie-qiu/etch-a-sketch',
  },
  {
    title: 'WellBuddies',
    description: 'WellBuddies was created for students to prioritize their own wellbeing. Enter in your location, and your buddy will suggest wellness activities to do based on your weather. Created for HackDartmouth VII and won 2nd place in the Health and Recovery track.',
    tags: 'HTML/CSS/Javascript, React, Firebase',
    category: 'code',
    img: wellbuddies,
    link: 'https://devpost.com/software/wellbuddies',
    github: 'https://github.com/lark-hacks/buddy',
  },
  {
    title: 'Astrobunny: 3D Digital Animation',
    description: 'Animation of Astrobunny, a character I designed, modeled, rigged and textured.',
    tags: 'Maya',
    category: 'art',
    img: astrobunny,
    link: 'https://www.youtube.com/watch?v=pa0JvobwU2M',
  },
  {
    title: 'Vitalize',
    description: 'Vitalize is the first mobile wellness app tailored for healthcare providers with mindfulness, meditation, journal modules, and personalized mental health support. I designed hi-fi screens and created illustrations for Vitalize.',
    tags: 'UI/UX Design',
    category: 'design',
    img: vitalize,
  },
  {
    title: 'Bookshelf',
    description: 'Website to keep track and log your book reviews, made with a CS52 API.',
    tags: 'React, Redux',
    category: 'code',
    img: books,
    link: 'https://bookshelf-annieqiu.onrender.com/',
  },
  {
    title: 'Fine Arts Portfolio',
    description: 'Collection of paintings, drawings, and sculpture',
    tags: 'Art',
    category: 'art',
    img: art,
    link: 'https://www.behance.net/annieqiu',
  },
];

export default ProjectItems;
