import styled from "styled-components";

export const ClockContainer = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 360px;
  color: #e6ff00;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    p {
      font-size: 4rem;
    }

    small {
      color: #eeff38;
    }
  }
`;
