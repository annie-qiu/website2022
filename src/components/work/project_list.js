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
import vitalize from '../../assets/images/thumbnails/vitalize.png';
import quiz from '../../assets/images/thumbnails/quiz.png';
import aapihm from '../../assets/images/thumbnails/aapihm.png';
import japanese from '../../assets/images/thumbnails/japanese.png';

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
    category: 'design',
    img: room,
    id: 'room',
    text: 'Digital models of the living room from the film [The Farewell](https://a24films.com/films/the-farewell) that I modeled, textured, and rendered in Maya',
  },
  {
    title: 'Sexual Violence Prevention Project',
    description: 'UI/UX Design',
    category: 'design',
    img: svpp,
    id: 'svpp',
    text: 'Dartmouth’s [Sexual Violence Prevention Project (SVPP)](https://students.dartmouth.edu/wellness-center/prevention-education/sexual-violence-prevention-project) aims to reduce sexual assault, relationship violence, stalking, and harassment on campus through a comprehensive four-year curriculum. The SVPP staff and Dartmouth IT worked with DALI Lab to design and deploy a full-stack web application for students to manage their progress with the curriculum and for administrators to maintain the curriculum. Our partners requested that the solution should be intuitive and motivate students to be more engaged in the curriculum.\n \n I worked as a UI/UX designer as well as a developer on the project. As a designer, I used UX Research methods, sketched solutions, created grayscales and hifi prototypes, and ideated a comprehensive design system to produce a MVP for the SVPP platform. As a developer, I worked on adding authentication for administrators, different permission levels for administrators, and implemented features such as allowing admins to assign curriculums to students and assign requirements to students. \n \n The project is currently being finished up by Dartmouth ITC and will soon be deployed for all future Dartmouth students with an incoming freshman class of 1,400+.',
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
    category: 'design',
    img: astrobunny,
    id: 'astrobunny',
    html: 'https://www.youtube.com/embed/pa0JvobwU2M',
    text: 'A 3D digital animation of Astrobunny, a character I designed, modeled, rigged and textured. Astrobunny is an adventurous robot-astronaut-bunny hybrid on a mission to find the most tasty carrots across the galaxy.',
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
    title: 'Sobremesa',
    description: 'UI/UX Design',
    category: 'design',
    img: sobremesa,
    id: 'sobremesa',
    text: 'Sobremesa was designed to help bridge the generational gap with multicultural families.\n \n[Read the Case Study ↗](https://medium.com/@annie.r.qiu.24/designing-an-experience-to-combat-the-generational-gap-a-case-study-9e0d4c97058d)',
  },
  {
    title: 'Bookshelf',
    description: 'Full-Stack Web Dev',
    category: 'code',
    img: bookshelf,
    id: 'bookshelf',
    text: 'Website to keep track of and log your book reviews. I created the front-end with React and Redux and created the back-end with MongoDB and Node/Express. Bookshelf supports account creation and authentication, the ability to search by book title, and create/edit/delete book reviews.',
  },
  {
    title: 'Vitalize',
    description: 'UI/UX Design, Illustration, Graphic Design',
    category: 'design',
    img: vitalize,
    id: 'vitalize',
    text: 'Vitalize is the first mobile wellness app tailored for healthcare providers with mindfulness, meditation, journal modules, and personalized mental health support. At Vitalize, I was a UI/UX Designer and Graphic Designer. I built wireframes, interfaces, and interactive prototypes using Figma and analyze user data to determine the app design. I redesigned the logo, designed a character to represent the app, redesigned the interfaces for the Meditation and Journal modules, and ideated and designed an original system to represent the user’s progress in the app through gamification. I also created vector illustrations to accompany the app and created promotional posters.',
  },
  {
    title: 'Notes',
    description: 'Full-Stack Web Dev',
    category: 'code',
    img: notes,
    id: 'notes',
    text: 'I used React and Firebase to create a Notes platform that is synchronous across different users. The website supports multiple boards, Google sign in to track the authors of notes, Markdown in notes, and the ability to create, drag and drop, edit and delete notes.\n\n [Try it out ↗](https://annie-qiu-notes.onrender.com/)',
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
    text: 'As a final project for a course on design run by the Digital Applied Learning and Innovation (DALI) Lab at Dartmouth, my team and I redesigned the Dartmouth Timetable. The Timetable is the platform all Dartmouth students use to browse and find information on courses, but the current interface is outdated and difficult to use. We redesigned the user interface and considered how to best display information to ensure students can quickly find information on the courses they want to elect, find new courses to take, and plan out all their courses considering the rest of their college career.',
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
    title: 'Editorial Illustrations and Graphics',
    description: 'Illustration & Graphic Design',
    category: 'design',
    img: editorial,
    id: 'editorial',
    text: 'Illustrations and digital graphics for The Dartmouth, Dartmouth College’s student newspaper and America’s oldest college newspaper. Created with Photoshop and Procreate.',
  },
  {
    title: 'Etch-a-Sketch',
    description: 'Front-end Web Dev',
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
  {
    title: 'What Font Are You?',
    description: 'Web Dev',
    category: 'code',
    img: quiz,
    id: 'quiz',
    text: 'I used HTML/CSS and Javascript to create this simple website that has two personality quizzes. I created the designs as well.',
    link: 'https://quiz-ij0z.onrender.com/',
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
    title: 'Asian American Pacific Islander Heritange Month Branding',
    description: 'Logo Design',
    category: 'design',
    img: aapihm,
    id: 'aapihm',
    text: 'Dartmouth’s Office of Pluralism and Leadership commissioned me to design a logo for [Asian American Pacific Islander Heritage Month (AAPIHM)](https://students.dartmouth.edu/opal/community-leadership/heritage-history-celebrations/asian-american-pacific-islander-heritage-month-1) 2021 and 2022. I used Figma to design a versatile, meaningful, and engaging logo for the themes Constellations and Elements.',
  },
  {
    title: 'Generating Japanese Prints with AI',
    description: 'Neural Networks',
    category: 'code',
    img: japanese,
    id: 'japanese',
    text: 'I used CycleGAN to create a neural network model that transfers the style of Ukiyo-e Japanese prints to photos of nature and cityscapes.\n \n[Read about the process ↗](https://medium.com/@winnzerrs/style-transfer-of-japanese-prints-with-cyclegan-2f3fee4bd264)',
  },
];

export default ProjectList;
