import styled from "styled-components";

export const CardOverFlow = styled.section`
  display: flex;

  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }

  ul::-webkit-scrollbar {
    width: 10px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 0px 5px 5px 0px;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.125);
    border-radius: 0px 5px 5px 0px;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 25px;

    gap: 30px;

    overflow-y: scroll;

    width: 83.39124391938846vw;
    height: 70.04562737642586vh;
    background: white;

    backdrop-filter: blur(5px) saturate(183%);
    -webkit-backdrop-filter: blur(5px) saturate(183%);
    background-color: rgba(17, 25, 40, 0.5);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
`;
