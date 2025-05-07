import logo from './logo.svg';
import './App.css';
import LinkCp from './components/LinkCp';
import ListCp from './components/ListCp';

function App() {
  const menuArr = ['intro', 'skill-01', 'portfolio', 'contact'];

  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'>
          {/* <a href='/'>LOGO</a> */}
          <LinkCp hrefPr='/' textPr='LOGO' />
        </div>

        <nav>
          <ul>
            {menuArr.map((v) => (
              <ListCp hrefPr={`/${v}`} textPr={v} />
            ))}

            {/* <li><LinkCp /></li> */}
            {/* <li><LinkCp /></li> */}
            {/* <li><LinkCp /></li> */}
            {/* <li><LinkCp /></li> */}

            {/* <li><a href='/intro'>Intro</a></li> */}
            {/* <li><a href='/skill'>Skill</a></li> */}
            {/* <li><a href='/portfolio'>Portfolio</a></li> */}
            {/* <li><a href='/contact'>Contact</a></li> */}
          </ul>
        </nav>

      </header>
    </div>
  );
}

export default App;
