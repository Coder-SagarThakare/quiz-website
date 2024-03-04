// import { nanoid } from "nanoid";

 const cardTitles = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "ComputerScience",
    "History",
    "Literature",
    "Art",
    "Music",
    "PhysicalEducation",
  ];

const subjectBackgrounds = {
  Mathematics: {
    image: "https://img.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg?w=996&t=st=1703684684~exp=1703685284~hmac=f4abbdd135e0421ceb6344a20a0e744e5b8c3aaa08fbf94b00a513933a7b9399",
    description: "Chalkboard with math elements",
  },
  Physics: {
    image: "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg?w=996&t=st=1703682808~exp=1703683408~hmac=09b2571eae77e5273fd9e352a6211f2ef7e3bc3f9e53f9079b7fbdebfad9404c",
    description: "Hand-drawn science education background",
  },
  Chemistry: {
    image: "https://img.freepik.com/free-vector/hand-drawn-chemistry-background_23-2148164901.jpg?w=740&t=st=1703685871~exp=1703686471~hmac=4fcf6377ab0dd5526d2972891c2100a754f5fca971f6cfc105725abc33e5b93f",
    description: "Chemistry background",
  },
  Biology: {
    image: "https://img.freepik.com/free-vector/biology-laboratory-workspace-design-concept_1284-11559.jpg?w=740&t=st=1703685919~exp=1703686519~hmac=e0c3acb5ce23b760602cc6fff126f424c15d194e39509343f93f0d330f3a5645",
    description: "Biology background",
  },
  ComputerScience: {
    image: "https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?w=740&t=st=1703685979~exp=1703686579~hmac=2e64639f23bc57c306eba8a8224b5922913ff70c26f91cefcdac193b89521865",
    description: "Computer Science background",
  },
  History: {
    image: "https://img.freepik.com/premium-vector/idea-science-education_277904-8664.jpg?w=996",
    description: "History background",
  },
  Literature: {
    image: "https://img.freepik.com/free-vector/literature-school-subject-study-ancient-modern-novel-writers-literary-poetry-work-idea-education-knowledge-vector-illustration-flat-style_613284-1881.jpg?w=740&t=st=1703686132~exp=1703686732~hmac=23a5855204ea2fb277c4ee8c0a3f94389fbd970321b07f6ef1603281587b66f5",
    description: "Literature background",
  },
  Art: {
    image: "https://img.freepik.com/free-vector/paint-brushes-color-palette_1308-126704.jpg?w=826&t=st=1703686180~exp=1703686780~hmac=1550a966132fc34ceecdc1498ecfc67211576ad6ece3f08b5116fca5a4c120d8",
    description: "Art background",
  },
  Music: {
    image: "https://img.freepik.com/free-vector/different-kinds-musical-instruments_1308-3320.jpg?w=740&t=st=1703689571~exp=1703690171~hmac=64b825bf81e7e41081fc22f83cf920812ab446167fbd00f3d603316a3053f22e",
    description: "Music background",
  },
  PhysicalEducation: {
    image: "https://img.freepik.com/free-vector/school-sports-team-abstract-concept-illustration-school-children-club-competitive-team-sports-kids-after-school-activity-local-tournament-athletic-exercise_335657-3498.jpg?w=740&t=st=1703689646~exp=1703690246~hmac=89025f334fce0dd149363024b93706816af90fc5b88b27ae31f6f6cf2ea4353b",
    description: "Physical Education background",
  },
};


// const topics = programmingLanguages.reduce((allTopics, language) => {
//   let topicsForLanguage = [];

//   switch (language.name) {
//     case "C":
//       topicsForLanguage = [
//         {
//           id: nanoid(),
//           name: "Pointers",
//           languageId: language.id,
//           languageName: language.name,
//         },
//         {
//           id: nanoid(),
//           name: "Loops",
//           languageId: language.id,
//           languageName: language.name,
//         },
//         {
//           id: nanoid(),
//           name: "Structures",
//           languageId: language.id,
//           languageName: language.name,
//         },
//       ];
//       break;

//     case "C++":
//       topicsForLanguage = [
//         {
//           id: nanoid(),
//           name: "Classes",
//           languageId: language.id,
//           languageName: language.name,
//         },
//         {
//           id: nanoid(),
//           name: "Inheritance",
//           languageId: language.id,
//           languageName: language.name,
//         },
//         {
//           id: nanoid(),
//           name: "Templates",
//           languageId: language.id,
//           languageName: language.name,
//         },
//       ];
//       break;

//     case "Java":
//       topicsForLanguage = [
//         {
//           id: nanoid(),
//           name: "Object-Oriented Programming",
//           languageId: language.id,
//           languageName: language.name,
//         },
//         {
//           id: nanoid(),
//           name: "Exception Handling",
//           languageId: language.id,
//           languageName: language.name,
//         },
//       ];
//       break;

//     case "JavaScript":
//       topicsForLanguage = [
//         {
//           id: nanoid(),
//           name: "Functions",
//           languageId: language.id,
//           languageName: language.name,
//         },
//         {
//           id: nanoid(),
//           name: "Objects",
//           languageId: language.id,
//           languageName: language.name,
//         },
//       ];
//       break;

//     case "Python":
//       topicsForLanguage = [
//         {
//           id: nanoid(),
//           name: "Classes and Objects",
//           languageId: language.id,
//           languageName: language.name,
//         },
//         {
//           id: nanoid(),
//           name: "Data Structures",
//           languageId: language.id,
//           languageName: language.name,
//         },
//       ];
//       break;

//     default:
//       break;
//   }

//   return [...allTopics, ...topicsForLanguage];
// }, []);

export { cardTitles, subjectBackgrounds };
