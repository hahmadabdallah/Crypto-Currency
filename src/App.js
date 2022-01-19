import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import CoinPage from './pages/CoinPage';
import HomePage from './pages/HomePage';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  const useStyles = makeStyles({
    App: {
      backgroundColor: '#14161a',
      color:'white',
      minHeight:'100vh',
    },
  });

  const classes=useStyles();

  return (
    <BrowserRouter>
          
      <div className={classes.App}>
         <Header></Header>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coins/:id" element={<CoinPage/>}/>
         </Routes>   
      </div>
   </BrowserRouter>
  );
}

export default App;
