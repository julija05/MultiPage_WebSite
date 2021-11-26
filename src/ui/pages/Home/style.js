import styled from "styled-components";

export const Image = styled.img`
  max-width: 90%;
  height: auto;
  margin-top: 1.5rem;
  padding: 1rem;
  box-shadow: 0 0 10px gray;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1) translate(20px, 3%);
  }
`;

export const H2 = styled.h2`
  font-family: "Cormorant Garamond", serif;
  font-family: "Indie Flower", cursive;
  font-size: 1.5rem;
  max-width: 42rem;
  text-align: center;
`;

export const Button = styled.button`
  font-family: "Cormorant Garamond", serif;

  margin-top: 3rem;
`;
