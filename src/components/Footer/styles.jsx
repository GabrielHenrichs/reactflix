import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: #20232a;
  border-top: 2px solid #29cf08;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
