import React, {useState} from 'react';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';


import 'mdb-react-ui-kit/dist/css/mdb.min.css';
function App() {

  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
  };

  }
  return (
    <div className="App">
       
       <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
       {renderPage()}

    </div>
  );
}

export default App;
