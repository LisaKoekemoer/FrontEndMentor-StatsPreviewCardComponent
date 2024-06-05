import './App.css';
import statsImage from './images/image-header-desktop.jpg'

function App() {
  return (
    <>
      <div className='stats-card'>
        <div className='stats-info'>
          <h1>Get <span>insights</span> that help your business grow.</h1>
          <p className='stats-par'>Discover the benefits of data analytics and make better 
            decisions regarding revenue, customer experience, and overall efficiency.</p>
          <div className='stats-numbers'>
            <div className='companies'>
              <h2>10k+</h2>
              <p>COMPANIES</p>
            </div>
            <div className='templates'>
              <h2>314</h2>
              <p>TEMPLATES</p>
            </div>
            <div className='queries'>
              <h2>12M+</h2>
              <p>QUERIES</p>
            </div>
          </div>
        </div>
        <div className='stats-img'>
          <img src={statsImage} alt=""/>
        </div>
      </div>
    </>
  );
}

export default App;
