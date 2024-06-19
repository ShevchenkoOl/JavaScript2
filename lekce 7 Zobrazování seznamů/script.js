// const names = ['petr', 'jana', 'marek', 'eva', 'lenka', 'ondra'];
// const emails = names.map((name) => {
//   return `${name}@mejlik.cz`;
// });
//------------------------zkracena verze
//const emails = names.map((name) => `${name}@mejlik.cz`);
// console.log(emails);


// const createPerson = (name, age, gender) => ({
//     name: name,
//     age: age,
//     gender: gender,
//   });
  
//   // Výše uvedený zápis je zkrácená verze následujícího kódu:
//   const createPersonLong = (name, age, gender) => {
//     return {
//       name: name,
//       age: age,
//       gender: gender,
//     };
//   };

//---------------------------------Cvičení: 1 Zkracovací jednohubky
// const isEmail = (str) => {
//     return str.includes('@');
//   };
  //------------------------zkracena verze
  const isEmail = (str) => str.includes('@');


//   const roll = () => {
//     return Math.floor(Math.random() * 6) + 1;
//   };
//------------------------zkracena verze
const roll = () => Math.floor(Math.random() * 6) + 1;

// const getNumber = (id) => {
//     return Number(document.querySelector(`#${id}`).value);
//   };
//------------------------zkracena verze
const getNumber = (id) => Number(document.querySelector(`#${id}`).value);

// const weather = (temperature) => {
//     if (temperature > 16) {
//       return 'teplo';
//     }
  
//     return 'zima';
//   };
//------------------------zkracena verze
const weather = (temperature) => (temperature > 16 ? 'teplo' : 'zima');
//------------------------zkracena verze



//---------------------------------Cvičení: 2 Opakování map
// const weekdays = [
//     'pondělí',
//     'úterý',
//     'středa',
//     'čtvrtek',
//     'pátek',
//     'sobota',
//     'neděle',
//   ];
//   const months = [
//     {
//       name: 'leden',
//       days: 31,
//     },
//     {
//       name: 'únor',
//       days: 28,
//     },
//     {
//       name: 'březen',
//       days: 31,
//     },
//     {
//       name: 'duben',
//       days: 30,
//     },
//     {
//       name: 'květen',
//       days: 31,
//     },
//     {
//       name: 'červen',
//       days: 30,
//     },
//     {
//       name: 'červenec',
//       days: 31,
//     },
//     {
//       name: 'srpen',
//       days: 31,
//     },
//     {
//       name: 'září',
//       days: 30,
//     },
//     {
//       name: 'říjen',
//       days: 31,
//     },
//     {
//       name: 'listopad',
//       days: 30,
//     },
//     {
//       name: 'prosinec',
//       days: 31,
//     },
//   ];
// // 1. Z pole weekdays vyrobte pole obsahující všechny názvy dnů napsané VELKÝMI PÍSMENY.
//   const upper = weekdays.map((day) => day.toUpperCase());
//   console.log(upper);

// // 2. Z pole weekdays vyrobte pole obsahující pouze první dvě písmena každého dne, tedy
//   const cut = weekdays.map((day) => day.slice(0, 2));
//   console.log(cut); 

// // 3. Z pole months vyrobte pole obsahující pouze počty dní v každém měsíci.
//   const calcDays = months.map((month) => month.days);
//   console.log(calcDays);

// // 4. Z pole months vyrobte pole obsahující pro každý měsíc datum jeho prvního dne v roce 2020, tedy
//   const firstDate = months.map((mounth) => `1. ${mounth.name} 2020`);
//   console.log(firstDate);
