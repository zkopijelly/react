import './App.css'
import UpliftLogoIcon from './components/UpliftLogoIcon'
import ReactList from './components/ReactList'
import ScoreWidget from './components/ScoreWidget'
import Card from './components/Card';

const App = () => {

  const trainosys = 'Hello Universe!';
  const helloWorld = 'Hello World!'

  const mayPasok = true;

  const age = 10;
  const currentYear = 2024;

  const getUsername = () => {
    return 'jelly';
  }

  const getSum = (number) => {
    return number + 10;
  }

  const items = [
    {
      productName: 'Tumbler',
      price: 10,
      productId: 1
    },
    {
      productName: 'Mouse',
      price: 100,
      productId: 2,
    },
    {
      productName: 'Keyboard',
      price: 105,
      productId: 3
    }
  ]

  return (
    <>
      <button>
       {<UpliftLogoIcon/>}
      </button>
      <div>{`${trainosys} and ${helloWorld}`}</div>
      <div>{` Birth year: ${currentYear - age}`}</div>
      <div>{ mayPasok ? 'Yes, sad' : 'Wala, yehey'}</div>
      <br/>
      <br/>
      <br/>
      <span>{getUsername()}</span>
      <br/>
      <span>{getSum(30)}</span>
      <br/>
      <br/>
      <button>Button</button>
      <br/>
      <br/>
      <ReactList points={20}/>
      <ScoreWidget points={12} playerName={'Lebron James'}/>
      <br/>
      <br/>
      <br/>
      <Card data={items}/>
    </>
  )
}

export default App
