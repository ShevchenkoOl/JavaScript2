//----------------------- Cvičení 1: Rodná čísla
// const rodneCislo = Number(prompt('Jaké je tvé rodné číslo?'));
// let platne = true;

// if (rodneCislo.length === 10) {
//   document.body.innerHTML += '✔️ Zadané rodné číslo má správně deset znaků.<br>';

// } else {
//   document.body.innerHTML += '❌ Uživatel zadal rodné číslo neplatné délky.<br>';
//   platne = false;
// }

//  else {
//   document.body.innerHTML += '❌ Rodné číslo obsahuje nepovolené znaky.<br>';
//   platne = false;
// }

// if ((rodneCislo) % 11 === 0) {
//   document.body.innerHTML += '✔️ Rodné číslo je dělitelné 11.<br>';
// } else {
//   document.body.innerHTML += '❌ Rodné číslo není dělitelné číslem 11.<br>';
//   platne = false;
// } 
// if (platne) {
//     document.body.innerHTML += '✔️ Zadané rodné číslo je platné.<br>';
//   } else {
//     document.body.innerHTML += '❌ Uživatel zadal neplatné rodné číslo.<br>';
//   }

//----------------------- Cvičení 2: Platnost jako funkce
// const checkBirthID = (rodneCislo) => {

//     if (rodneCislo.length !== 10) {
//       return 'invalidLength';
//     }
  
//     if (!Number.isInteger(Number(rodneCislo))) {
//       return 'notANumber';
//     }
  
//     if (Number(rodneCislo) % 11 !== 0) {
//       return 'failedChecksum';
//     }
  
//     return 'ok';
//   };
  
//   const rodnaCislaKOtestovani = [
//     '123',
//     'nepovím',
//     '7060201236',
//     '123456789123456789',
//     '9062185440',
//     '123č56q8y7',
//   ];
  
//   rodnaCislaKOtestovani.forEach((rc) => {
//     document.body.innerHTML += `Rodné číslo <code>${rc}</code> `;
//     const vysledek = checkBirthID(rc);
//     if (vysledek === 'ok') {
//       document.body.innerHTML += 'je platné. ✔️<br>';
//     } else {
//       document.body.innerHTML += `není platné. Důvod: ${vysledek}. ❌<br>`;
//     }
//   });

  //------------------------------- Cvičení 3: Kontrola cifer
// const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// const isDigit = (znak) => znak.length === 1 && digits.includes(znak);
//    /*pokud podmínka znak.length === 1 && digits.includes(znak) platí, bude vrácena hodnota true. Pokud neplatí, bude vrácena hodnota false */

// const logInvalidCharacters = (vstup) => {
//   Array.from(vstup).forEach((znak) => {
//     if (!isDigit(znak)) {
//       document.body.innerHTML += `Vstup obsahuje neplatný znak „${znak}“.<br>`;
//     }
//   });
// };

// const checkBirthID = (rodneCislo) => {
//   if (rodneCislo.length !== 10) {
//     return 'invalidLength';
//   }

//   if (!Number.isInteger(Number(rodneCislo))) {
//     return 'notANumber';
//   }

//   if (Number(rodneCislo) % 11 !== 0) {
//     return 'failedChecksum';
//   }

//   return 'ok';
// };

// const rodnaCislaKOtestovani = [
//   '123',
//   'nepovím',
//   '7060201236',
//   '123456789123456789',
//   '9062185440',
//   '123č56q8y7',
// ];

// rodnaCislaKOtestovani.forEach((rc) => {
//   document.body.innerHTML + `Rodné číslo <code>${rc}</code> `;
//   const vysledek = checkBirthID(rc);
//   if (vysledek === 'ok') {
//     document.body.innerHTML += 'je platné. ✔️<br>';
//   } else {
//     document.body.innerHTML += `je neplatné. Důvod: ${vysledek}. ❌<br>`;

//     if (vysledek === 'notANumber') {
//       logInvalidCharacters(rc);
//     }
//   }
// });

//------------------------------- Cvičení 4: Detailní kontrola cifer
// const validateCharacters = (vstup) => {
//     const result = [];
//     Array.from(vstup).forEach((znak) => {
//       result.push({ char: znak, digit: isDigit(znak) });
//     });
//     return result;
//   };

//   validateCharacters('123č56q8y7');