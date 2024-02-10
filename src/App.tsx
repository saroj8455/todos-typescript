import { Button } from 'primereact/button';
import Hello from './components/Hello';

function App() {
  const hi = () => {
    console.log('function as parameter');
  };

  return (
    <>
      <div className='card flex flex-column h-screen gap-4 align-items-center justify-content-center'>
        <h1 className='text-center  text-500 text-orange-300'>
          React Typescript Projects
        </h1>
        <Button label='Submit' icon='pi pi-check' />
        <Hello greetMessage='Hello World App' sayHello={() => hi()} />
      </div>
    </>
  );
}

export default App;
