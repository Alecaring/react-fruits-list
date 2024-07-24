const fruits = [
  {
    id: 1,
    typeOfFruit: 'frutta',
    fruit: 'banana'
  },
  {
    id: 2,
    typeOfFruit: 'frutta',
    fruit: 'arancia'
  },
  {
    id: 3,
    typeOfFruit: 'verdura',
    fruit: 'spinaci'
  },
  {
    id: 4,
    typeOfFruit: 'legumi',
    fruit: 'lenticchie'
  },
];


function App() {
  return (
    <div className="container">
      <ul className="list-group-style">
        {fruits.map((fruit) => (
          <FruitComponet
            key={fruit.id}
            fruit={fruit.fruit}
            typeOfFruit={fruit.typeOfFruit} />
        ))}
      </ul>
    </div>
  );
};

function FruitComponet({ fruit, key, typeOfFruit }) {
  
  let className = '';
  typeOfFruit === 'verdura'? className = 'verdura' : '';
  typeOfFruit === 'legumi'? className = 'legumi' : '';
  typeOfFruit === 'frutta'? className = 'frutta' : '';
 
  return (
    <li key={ key }>
      <div className={ className }>
    <span>{ fruit }</span>
      </div>
    </li>
  )
}

export default App;