/* eslint-disable max-len */
import wellbuddies from '../../assets/images/thumbnails/wellbuddies.png';
import room from '../../assets/images/thumbnails/3d-modeling.png';
import drawings from '../../assets/images/thumbnails/drawings.png';
import astrobunny from '../../assets/images/thumbnails/astrobunny.png';
import bookshelf from '../../assets/images/thumbnails/bookshelf.png';
import sculpture from '../../assets/images/thumbnails/3d.png';
import digital from '../../assets/images/thumbnails/digital.png';
import editorial from '../../assets/images/thumbnails/editorial.png';
import etch from '../../assets/images/thumbnails/etch.png';
import notes from '../../assets/images/thumbnails/notes.png';
import paintings from '../../assets/images/thumbnails/paintings.png';
import pcfa from '../../assets/images/thumbnails/pcfa.png';
import pos from '../../assets/images/thumbnails/pos.png';
import sobremesa from '../../assets/images/thumbnails/sobremesa.png';
import svpp from '../../assets/images/thumbnails/svpp.png';
import timetable from '../../assets/images/thumbnails/timetable.png';

const ProjectList = [
  {
    title: 'Well Buddies',
    description: 'Full-Stack Mobile App',
    category: 'code',
    img: wellbuddies,
    id: 'wellbuddies',
    tools: ['React-Native', 'Redux', 'MongoDB', 'Node/Express', 'Figma'],
    text: '**Well Buddies was created for students to prioritize their own wellbeing despite busy schedules.** The app gives users a digital pet and integrates with your Google Calendar to schedule in wellness activities that fit with your schedule. When you complete a wellness activity, your buddy’s mood improves so that when you take care of your buddy, you also take care of yourself. \n \nWell Buddies was first created for HackDartmouth VII as a small web app built with React and won 2nd place in the Health and Recovery track. We then turned the website into a full-stack mobile app with Google Calendar integration with React-Native. \n \nI worked on integrating Google authentication and used the Google Calendar API to get the user’s calendar events and available times. On the back-end, I worked on providing the app with suggested wellness activities based on the user’s availabilities. I also created the designs and illustrations in Figma.',
  },
  {
    title: 'Digital Room',
    description: '3D Digital Modeling',
    category: 'art',
    img: room,
    id: 'room',
    text: 'Digital models of the living room from the film [The Farewell](https://a24films.com/films/the-farewell) that I modeled, textured, and rendered in Maya',
  },
  {
    title: 'Drawings',
    description: '2018-2022',
    category: 'art',
    img: drawings,
    id: 'drawings',
    text: 'Drawings in charcoal and ink',
  },
  {
    title: 'Astrobunny',
    description: '3D Digital Animation',
    category: 'art',
    img: astrobunny,
    id: 'astrobunny',
    html: 'https://www.youtube.com/embed/pa0JvobwU2M',
    text: 'A 3D digital animation of Astrobunny, a character I designed, modeled, rigged and textured. Astrobunny is an adventurous robot-astronaut-bunny hybrid on a mission to find the most tasty carrots across the galaxy.',
  },
  {
    title: 'Bookshelf',
    description: 'Full-Stack Web Development',
    category: 'code',
    img: bookshelf,
    id: 'bookshelf',
    text: 'Website to keep track of and log your book reviews. I created the front-end with React and Redux and created the back-end with MongoDB and Node/Express. Bookshelf supports account creation and authentication, the ability to search by book title, and create/edit/delete book reviews.',
  },
  {
    title: 'Presidential Commission on Financial Aid',
    description: 'UI/UX Design & Illustration',
    category: 'design',
    img: pcfa,
    id: 'pcfa',
    link: 'https://shapethefuture.dartmouth.edu/',
    text: 'I worked as a designer for DALI Lab in collaboration with the Presidential Commission on Financial Aid (PCFA) to create an *interactive storytelling website that illustrates how financial aid can impact a student’s life* to encourage Dartmouth alumni to donate to *support financial aid*. I created graphics and illustrations for this project.',
  },
  {
    title: 'Parts of Speech Tagger',
    description: 'Java',
    category: 'code',
    img: pos,
    id: 'pos',
    text: 'I built a Part of Speech tagger in *Java* that takes in a sequences of words and produces the corresponding sequence of parts of speech using a *hidden Markov model*. In the model, observations are words in a sentence, and states are the parts of speech tags. The POS tagger is trained on the Brown corpus and uses the *Viterbi algorithm* to find the best sequence of tags. When tested on a set of over 30,000 words, the POS tagger had a 96.4% accuracy rate. \n\n Contact me to see the GitHub repo for POS tagger.',
  },
  {
    title: 'Notes',
    description: 'Full-Stack Web Development',
    category: 'code',
    img: notes,
    id: 'notes',
    text: 'I used React and Firebase to create a Notes platform that is synchronous across different users. The website supports multiple boards, Google sign in to track the authors of notes, Markdown in notes, and the ability to create, drag and drop, edit and delete notes.\n\n [Try it out ↗](https://annie-qiu-notes.onrender.com/)',
  },
  {
    title: 'Sexual Violence Prevention Project',
    description: 'UI/UX Design',
    category: 'design',
    img: svpp,
    id: 'svpp',
    text: 'Coming soon...',
  },
  {
    title: 'Paintings',
    description: '2019-2022',
    category: 'art',
    img: paintings,
    id: 'paintings',
    text: 'Paintings in oil and acrylic.',
  },
  {
    title: 'Dartmouth Timetable',
    description: 'UI/UX Design',
    category: 'design',
    img: timetable,
    id: 'timetable',
    inactive: true,
  },
  {
    title: 'Digital Art',
    description: '2020-2022',
    category: 'art',
    img: digital,
    id: 'digital',
    text: 'Digital illustrations, animations, and studies',
  },
  {
    title: 'Sobremesa',
    description: 'UI/UX Design',
    category: 'design',
    img: sobremesa,
    id: 'sobremesa',
    text: 'Sobremesa was designed to help bridge the generational gap with multicultural families.\n \n[Read the Case Study ↗](https://medium.com/@annie.r.qiu.24/designing-an-experience-to-combat-the-generational-gap-a-case-study-9e0d4c97058d)',
  },
  {
    title: 'Editorial Illustrations',
    description: '2020-2021',
    category: 'art',
    img: editorial,
    id: 'editorial',
    text: 'Illustrations for The Dartmouth, Dartmouth College’s student newspaper and America’s oldest college newspaper',
  },
  {
    title: 'Etch-a-Sketch',
    description: 'Front-end Web Development',
    category: 'code',
    img: etch,
    id: 'etch',
    text: 'Simple etch-a-sketch I made to practice HTML/CSS/Javascript. \n \n [Try it out ↗](https://annie-qiu.github.io/etch-a-sketch/) \n \n [GitHub ↗](https://github.com/annie-qiu/etch-a-sketch)',
  },
  {
    title: 'Sculptures',
    description: '2019-2022',
    category: 'art',
    img: sculpture,
    id: 'sculpture',
  },
];

export default ProjectList;
