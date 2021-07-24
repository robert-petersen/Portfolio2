import styled from "styled-components";

function NavBar() {
  return (
    <Background>
      <div>Robert Petersen</div>
      <div>
        <a href="#" >About</a>
        <a href="#" >Projects</a>
        <a href="#" >Contact</a>
      </div>
    </Background>
  );
}

export default NavBar;

const Background = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #1c1c1c;
`