import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Admission from "./components/Admission";
import AllGrade from "./components/AllGrade";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import apiReducer from "./store/apiReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
const store = createStore(apiReducer)

function App() {
  return (
    <div className="App">
       <Provider store={store}>
      <BrowserRouter>
            
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contactus' component={Contact} />
          <Route exact path='/aboutus' component={AboutUs} />
          <Route exact path='/admission' component={Admission} />
          <Route exact path='/admission/allgrade/:string' component={AllGrade} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </BrowserRouter>
      </Provider>
      <br /><br /><br /><br />
      <Footer />
    </div>
  );
}

export default App;
