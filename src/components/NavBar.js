import Styled from "styled-components";

function NavBar() {
  return (
    <nav className="NavBar">
      <div>Robert Petersen</div>
      <div>
        <a href="#" >About</a>
        <a href="#" >Projects</a>
        <a href="#" >Contact</a>
      </div>
    </nav>
  );
}

export default NavBar;

const Button = Styled.button`
  
  
`