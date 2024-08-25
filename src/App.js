// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { useSelector } from 'react-redux';
import Category from './components/Category';
import WidgetForm from './components/WidgetForm';

const App = () => {
  const categories = useSelector((state) => state.widgets.categories);

  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>
          <Category category={category} />
          <WidgetForm categoryId={category.id} />
        </div>
      ))}
    </div>
  );
};

export default App;
