import { Routes, Route } from 'react-router';
import Contact from '../ContactUsPage/Contact'
import Programs from '../ProgramsPage/Programs'
import NewsPage from '../../Pages/NewsPage/Newspage'
import ErrorPage from '../ErrorPage/ErrorPage';
import HomePage from '../HomePage/HomePage';
import Counter from '../Counter/Counter';
import ProductsList from '../ProductsPage/ProductsList';
import CitiesPage from '../CitiesPage/CitiesPage';
import ToDoPage from '../ToDoPage/ToDoPage';
import ChuckAPIPage from '../API/ChuckAPIPage/ChuckAPI'
import NavigationGenerator from '../../components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <NavigationGenerator></NavigationGenerator>

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/miestai' element={<CitiesPage/>}/>
      <Route path='/shop' element={<ProductsList/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/counter' element={<Counter />}/>
      <Route path='/todo' element={<ToDoPage/>}/>
      <Route path='/news' element={<NewsPage/>}/>
      <Route path='/api' element={<ErrorPage/>}/>
      <Route path='/api/chuck-norris' element={<ChuckAPIPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
      
    </Routes>

    
    </div>
  );
}

export default App;
