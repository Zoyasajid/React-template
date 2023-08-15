// import logo from './logo.svg';
import './App.css';
import Amount from './components/Amount/Amount';
import Faq from './components/FAQ/Faq';
import Main from './components/Main/Main';
import Navigate from './components/navigate/Navigate';
// import Roadmap from './components/Roadmap/Roadmap';
import SpeceAndTreats from './components/Specsandtrait/SpeceAndTreats';
import Team from './components/Team/Team';
import Roadmap from './components/Roadmap/Roadmap';
// import Cards from './components/MidSession.js/Cards';
// import Plus from './components/MidSession.js/Plus';
import Cards from './components/MidSession.js/Cards';
function App() {
  return (
<>
<Main/>
<Navigate/>
{/* <Plus/> */}
<Cards/>
<Roadmap/>
<SpeceAndTreats/>
<Amount/>
<Team/>
<Faq/>
{/* <MidSession/> */}
</>
  );
}

export default App;
