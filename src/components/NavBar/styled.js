import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  background-color: #000;
  height: 100px;
  top: 0px;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-els {
    display: flex;
    align-items: center;
    list-style-type: none;

    & li {
      margin-right: 1em;
      display: inline;
    }
  }
`;
