import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar style={{ boxShadow: '#f0e4e475 15px 20px 20px 7px' , backgroundColor:'#1e1f2485'}} />
      <div className="container my-5" style={{textAlign:'center'}}><h1 className="text-center" style={{textAlign:'center',color:'#33316f', backgroundColor:'rgb(236, 225, 225, 0.59)', fontFamily:"Times New Roman, Times, serif",display: 'inline-block' ,fontStyle:'oblique',fontWeight:'bold'}}>Welcome to Pomodoro Personalization</h1>
      </div>
      {/* Main content */}
      <div className="transparent-bg flex-wrap justify-content-between align-items-center container my-5">
      <p className='container text-center' style={{color:'#33316f',opacity:'0.9',padding:'15px',backgroundColor:'rgba(206, 205, 238, 0.9)',fontSize:'18px', fontFamily:'"Times New Roman", Times, serif' }}> The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It breaks work into focused intervals (traditionally 25 minutes), called "Pomodoros", followed by short breaks (5 minutes). After completing four Pomodoros, a longer break (15–30 minutes) is taken. </p>
 <p className='container text-center' style={{color:'rgba(51, 49, 111, 1)',padding:'15px',backgroundColor:'rgba(206, 205, 238, 0.9)',opacity:'0.9',fontSize:'18px', fontFamily:'"Times New Roman", Times, serif' }}>The Personalized Pomodoro EEG System is an innovative web platform that dynamically adapts work-break intervals using real-time electroencephalography (EEG) data to optimize productivity. By connecting to a wearable EEG headset, the website monitors users’ cognitive states—such as focus, fatigue, or distraction—and intelligently adjusts Pomodoro timers to match their mental rhythms. For instance, if EEG signals indicate sustained concentration, the system extends work sessions; if mental fatigue is detected, it prompts earlier breaks. The interface displays live EEG metrics, personalized timer recommendations, and productivity analytics, empowering users to work smarter. Built with React for seamless interactivity and paired with a deep learning backend for EEG analysis, this tool bridges neuroscience and time management, offering students, professionals, and neurodiverse individuals a science-backed approach to peak efficiency.</p>
      </div>
      <div className='=container'>
      <b><p className="text-center" style={{color:'#33316f',fontSize:'20px', fontFamily:'Times New Roman", Times, serif'}}>Please Login to Continue</p></b>
      </div>
      <Footer />
    </div>
  );
}
