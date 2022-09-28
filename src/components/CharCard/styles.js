import styled, { css } from "styled-components";

export const CardStyle = styled.li`
  display: flex;
  color: white;

  justify-content: space-between;

  .textPerson {
    display: flex;
    flex-direction: row;

    gap: 3rem;

    .textPerson-position {
      display: flex;
      flex-direction: column;

      align-items: flex-start;

      gap: 50px;
    }

    p {
      font-size: 4.435994930291508vh;
      color: green;
    }

    .textSpecies {
      font-size: 2.1546261089987326vh;
      color: white;
    }
  }

  img {
    width: 13.89854065323141vw;
    height: 19.011406844106464vh;
    border-radius: 20px;
  }

  .textStatus {
    display: flex;
    flex-direction: row;

    gap: 5px;
  }

  .circle-style {
    width: 10px;
    height: 10px;

    background-color: lightgreen;
    ${({ status }) => {
      switch (status) {
        case "Alive":
          return css`
            background-color: lightgreen;
          `;
        case "Dead":
          return css`
            background-color: red;
          `;
        case "unknown":
          return css`
            background-color: gray;
          `;
      }
    }}
  }
`;
