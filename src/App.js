import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { About } from './components/About';
import { Contact } from './components/Contact/Contact';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Rishav Sharma - Front End Developer</title>
          <link rel="canonical" href="https://rishavsharma.com" />
          <meta name="description" content="Rishav Sharma - Front End Developer, Smart Contract Developer and Web3 enthusiast" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
