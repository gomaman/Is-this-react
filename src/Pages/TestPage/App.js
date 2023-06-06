import { Routes, Route } from 'react-router';
import Contact from '../ContactUsPage/Contact'
import Programs from '../ProgramsPage/Programs'
import NewsPage from '../../Pages/NewsPage/Newspage'
import ErrorPage from '../ErrorPage/ErrorPage';
import HomePage from '../HomePage/HomePage';
import Counter from '../Counter/Counter';
import Shopping from '../ShoppingPage/Shopping';
import NavigationGenerator from '../../components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <NavigationGenerator></NavigationGenerator>

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<Shopping/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/counter' element={<Counter />}/>
      <Route path='/programs' element={<Programs/>}/>
      <Route path='/news' element={<NewsPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>

    
    </div>
  );
}

export default App;
