import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  
  
`;

export const ModalCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  padding: 2rem;
  background-color: white;
  z-index: 1001;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 90%;
  }
`;

export const ModalLink = styled.a`
  color: #4338ca;
  text-decoration: underline;
  font-weight: 600;
`;
