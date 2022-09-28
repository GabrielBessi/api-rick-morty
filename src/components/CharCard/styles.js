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

      gap: 2.534854245880862vh;
    }

    p {
      font-size: 4.435994930291508vh;
      color: green;
    }

    @media (max-width: 465px) {
      p {
        font-size: 3.435994930291508vh;
      }
    }

    .textSpecies {
      font-size: 2.1546261089987326vh;
      color: white;
    }
  }

  @media (max-width: 375px) {
    p {
      font-size: 1.435994930291508vh;
    }
  }

  img {
    width: 13.89854065323141vw;
    height: 19.011406844106464vh;
    border-radius: 20px;
  }

  @media (max-width: 500px) {
    img {
      width: 100px;
      height: 150px;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 80px;
      height: 100px;
    }
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
