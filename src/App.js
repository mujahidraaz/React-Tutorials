import logo from './logo.svg';
import './App.css';
import Header from './Header'
import LeftSidebar from './LeftSidebar'
import Content from './Content'
import RightSidebar from './RightSidebar'
import Footer from './Footer'


function App() {
  return (
    <div>
      <Header />
      <div className='main'>
        <LeftSidebar />
        <Content />
        <RightSidebar />
      </div>
      <Footer />
    </div>
  )
}

export default App;
