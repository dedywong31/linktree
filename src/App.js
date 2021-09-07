import Link from './Link'
import './App.css'
import Dedy from './Dedy.png'
import React from 'react'

// function App() {
//   return (
//     <div className="container">
//       <img src={Dedy} alt="My Awesome Picture"></img>
//       <h1>Dedy Kurniawan</h1>
//       <Link url="https://dedy-kurniawan.web.app" name="Website"></Link>
//       <Link url="https://www.linkedin.com/in/dedy-kurniawan" name="LinkedIn" stylename="linkedin-color"></Link>
//       <Link url="https://www.facebook.com/dedywong31" name="Facebook" stylename="facebook-color"></Link>
//       <Link url="https://www.instagram.com/dedywong31" name="Instagram" stylename="instagram-color"></Link>
//       <Link url="https://github.com/dedywong31" name="GitHub" stylename="github-color"></Link>
//     </div>
//   );
// }

class App2 extends React.Component {
  render() {
    return (
      <div className="container">
        <img src={Dedy} alt="My Awesome Picture"></img>
        <h1>Dedy Kurniawan</h1>
        <Link url="https://dedy-kurniawan.web.app" name="Website"></Link>
        <Link url="https://www.linkedin.com/in/dedy-kurniawan" name="LinkedIn" stylename="linkedin-color"></Link>
        <Link url="https://www.facebook.com/dedywong31" name="Facebook" stylename="facebook-color"></Link>
        <Link url="https://www.instagram.com/dedywong31" name="Instagram" stylename="instagram-color"></Link>
        <Link url="https://github.com/dedywong31" name="GitHub" stylename="github-color"></Link>
      </div>
    );
  }
}

export default App2;
