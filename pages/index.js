import React from 'react';
import Header from '../component/header';
import Intro from '../component/intro';
import Footer from '../component/footer';
import Card from '../component/card'
import ReCard from '../component/recard'

const HomePage = () => {
  
  return (
    <div >
      <Header />
      <Intro/>
      <>     
       <Card/>
       <ReCard/>    
      </>
      <Footer/>
    </div>
  );
};

export default HomePage;

