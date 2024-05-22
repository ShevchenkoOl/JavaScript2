// const Produkt = (props) => {
//     const { nazev, popis } = props
  
//     return (
//       <>
//         <h2>{nazev}</h2>
//         <p>{popis}</p>
//       </>
//     )
//   }
  
//   document.querySelector('#root').innerHTML = render(
//     <>
//       <Produkt nazev="Talir" popis="Nejlepsi talir na svete" />
//       <Produkt nazev="Sklenice" popis="Nejlepsi sklenice na svete" />
//     </>
//   );




// const Zprava = ({ vek, maturita }) => {
//     const info = vek >= 18 ? "muzes vstoupit" : "nemuzes vstoupit"
//     const trida = vek >= 18 ? "zelena" : "cervena"
    
//     return (
//       <p className={trida}>{info}</p>
//     )
//   }
  
//   document.querySelector('#root').innerHTML = render(
//     <>
//       <Zprava vek={17} maturita={true} />
//     </>
//   );



// const Product = ({ name, img, available }) => {
//     return (
//       <div className="product">
//         <div className="product__name">{name}</div>
//         <img className="product__img" src={img} />
//         {available ? <button>Pridat do kosiku</button> : <p>polozka neni dostupna</p>}
//       </div>
//     );
//   };
  
//   document.querySelector('#root').innerHTML = render(
//     <>
//       <Product name="Kotatko" img="#" available={false} />
//     </>
//   );




//---------------------------------cviceni 1 Destrukturování
// const recipe = {
//     name: 'Spicy Thai Basil Chicken',
//     cuisine: 'Thai',
//     difficulty: 'Intermediate',
//     serves: 4,
//     ingredients: {
//       chicken: {
//         type: 'Boneless, skinless chicken thighs',
//         amount: '1 lb',
//       },
//       vegetables: [
//         'Bell peppers',
//         'Onion',
//         'Thai bird chili',
//         'Garlic',
//         'Thai basil leaves',
//       ],
//       seasonings: ['Fish sauce', 'Soy sauce', 'Oyster sauce', 'Brown sugar'],
//       others: ['Vegetable oil', 'Water'],
//     },
//     instructions: [
//       'Slice the chicken into bite-sized pieces.',
//       'Heat vegetable oil in a large skillet or wok over medium-high heat.',
//       'Add minced garlic and Thai bird chili to the skillet. Stir-fry for 30 seconds.',
//       'Add the sliced chicken to the skillet. Cook until browned and cooked through.',
//       'Add sliced bell peppers and onion to the skillet. Cook until vegetables are tender-crisp.',
//       'In a small bowl, mix together fish sauce, soy sauce, oyster sauce, brown sugar, and water.',
//       'Pour the sauce over the chicken and vegetables in the skillet. Stir well to combine.',
//       'Add Thai basil leaves to the skillet. Stir until the basil wilts.',
//       'Remove from heat and serve hot with steamed rice.',
//     ],
//     notes:
//       'Adjust the amount of Thai bird chili according to your spice preference. Serve with a wedge of lime for extra flavor.',
//   };

//   const name = recipe.name;
//   const cuisine = recipe.cuisine;
//   const ingredients = recipe.ingredients;
//   const instructions = recipe.instructions;
//   const chicken = recipe.ingredients.chicken;
//   const vegetables = recipe.ingredients.vegetables;
//   const seasonings = recipe.ingredients.seasonings;
//   const others = recipe.ingredients.others;

//    const {name, cuisine, instructions} = recipe;
//    const {chicken, vegetables, seasonings, others} = recipe.ingredients;

//    console.log(`${name}, ${cuisine}, ${instructions}`);
//    console.log(`${chicken}, ${vegetables}, ${seasonings}, ${others}`);
//    console.log(chicken, vegetables, seasonings, others);

//-----------------------------------------cviceni 2 Podmíněné jednohubky
//const password = prompt('Zadejte heslo:');
// let valid = null;
// if (password.length > 8) {
//   valid = 'Heslo je v pořádku';
// } else {
//   valid = 'Heslo není bezpečné';
// }
//let valid = password.length > 8 ? 'Heslo je v pořádku' : 'Heslo není bezpečné';

// const grade = prompt('Počet bodů z písemky:');
// // let passed = null;
// // if (grade >= 50) {
// //   passed = '<span>prošel</span>';
// // } else {
// //   passed = '<span class="red">neprošel</span>';
// // }
// let passed = grade >= 50 ? '<span class="green">' : '<span class="red">neprošel</span>';
