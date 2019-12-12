import React, { useState } from 'react';
import CardsContainer from 'components/cardscontainer/CardsContainer';
import SubjectList from 'components/subjectlist/SubjectList';
import EntryForm from 'components/entryform/EntryForm';
import NavBar from 'components/navbar/NavBar';
import RegisterLogin from 'components/registerlogin/RegisterLogin';
import Footer from 'components/footer/Footer';

import './App.scss';

function App() {
  const [showRegisterLogin, setShowRegisterLogin] = useState(false);

  return (
    <div className='app-container'>
      <NavBar
        setShowRegisterLogin={setShowRegisterLogin}
        showRegisterLogin={showRegisterLogin}
      />
      <RegisterLogin
        showRegisterLogin={showRegisterLogin}
        setShowRegisterLogin={setShowRegisterLogin}
      />
      <div className='app-subjectsandcards'>
        <div>
          <SubjectList setShowRegisterLogin={setShowRegisterLogin} />
        </div>
        <CardsContainer />
      </div>
      <EntryForm />
      {showRegisterLogin && <div className='backdropblur' />}

      <Footer />
    </div>
  );
}

export default App;
