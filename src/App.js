import './App.css';
import CounterBackground from './components/CounterBackground';
import DoctorDog from './components/DoctorDog';
import DogsList from './components/DogsList';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MultiCardBox from './components/MultiCardBox';
import NextMultiCard from './components/NextMultiCard';
import RecentPosts from './components/RecentPosts';
import VetCareTeam from './components/VetCareTeam';

function App() {
  return (
    <>
      <Hero />
      <MultiCardBox />
      <DoctorDog />
      <NextMultiCard />
      <DogsList />
      <VetCareTeam />
      <CounterBackground />
      <RecentPosts />
      <Footer />
    </>
  );
}

export default App;
