import { nanoid } from "nanoid";

const programmingLanguages = [
    { id: 1, name: 'C' },
    { id: 2, name: 'C++' },
    { id: 3, name: 'Java' },
    { id: 4, name: 'JavaScript' },
    { id: 5, name: 'Python' },
    { id: 6, name: 'Ruby' },
    { id: 7, name: 'Swift' },
    { id: 8, name: 'Go' },
    { id: 9, name: 'TypeScript' },
    { id: 10, name: 'Rust' },
  ];

const topics = programmingLanguages.reduce((allTopics, language) => {
    let topicsForLanguage = [];
  
    switch (language.name) {
      case 'C':
        topicsForLanguage = [
          { id: nanoid(), name: 'Pointers', languageId: language.id, languageName: language.name },
          { id: nanoid(), name: 'Loops', languageId: language.id, languageName: language.name },
          { id: nanoid(), name: 'Structures', languageId: language.id, languageName: language.name },
        ];
        break;
  
      case 'C++':
        topicsForLanguage = [
          { id: nanoid(), name: 'Classes', languageId: language.id, languageName: language.name },
          { id: nanoid(), name: 'Inheritance', languageId: language.id, languageName: language.name },
          { id: nanoid(), name: 'Templates', languageId: language.id, languageName: language.name },
        ];
        break;
  
      case 'Java':
        topicsForLanguage = [
          { id: nanoid(), name: 'Object-Oriented Programming', languageId: language.id, languageName: language.name },
          { id: nanoid(), name: 'Exception Handling', languageId: language.id, languageName: language.name },
        ];
        break;
  
      case 'JavaScript':
        topicsForLanguage = [
          { id: nanoid(), name: 'Functions', languageId: language.id, languageName: language.name },
          { id: nanoid(), name: 'Objects', languageId: language.id, languageName: language.name },
        ];
        break;
  
      case 'Python':
        topicsForLanguage = [
          { id: nanoid(), name: 'Classes and Objects', languageId: language.id, languageName: language.name },
          { id: nanoid(), name: 'Data Structures', languageId: language.id, languageName: language.name },
        ];
        break;
  
      default:
        break;
    }
  
    return [...allTopics, ...topicsForLanguage];
  }, []);


 export { topics, programmingLanguages };