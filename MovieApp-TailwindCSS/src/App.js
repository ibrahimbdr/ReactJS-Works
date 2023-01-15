import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Movies } from "./pages/Movies";
import { MovieInfo } from "./pages/MovieInfo";
import { FavMovies } from "./pages/FavMovies";
import { useState, useContext } from "react";
import { 
      BrowserRouter as Router,
      Switch,
      Route,
      Redirect,
      useHistory
} from 'react-router-dom';
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { LanguageProvider, languageContext } from './context/languages'
function App() {
  const goto = useHistory()
  const [auth, isAuth] = useState(false)
  function protectedRoute() {
    if(auth){
      return goto.push('/movies')
    }else {
      alert("Please login first")
      return goto.push('/login')
    }
  }
  
  const [lang, setLang ] = useState('English');

  return (
    <div className="App">
      <>
      <Router>
        <LanguageProvider value={{lang, setLang}}>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/movies' exact component={Movies} />
          <Route path='/movies/:id' exact component={MovieInfo} />
          <Route path='/favmovies' exact component={FavMovies} />
          <Route path='/login' exact component={Login} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Switch>
        <Footer />
        </LanguageProvider>
      </Router>
      
      
      </>
    </div>
  );
}

export default App;
