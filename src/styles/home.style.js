import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const Title = styled.h1`
  font-size: ${({theme}) => theme.spacing.xl};
  font-weight: bold;
  margin: ${({theme}) => theme.spacing.medium} 0;
`

export const TitleCopy = styled.h2`
  font-size: ${({theme}) => theme.spacing.xl2};
  font-weight: normal;
`

export const DndOverlay = styled.div`
  position: absolute;
  left: 0; 
  top: 0;
  width: 100vw;
  height: 100vh;
  font-size: ${({theme}) => theme.spacing.xl};
  background: rgba(255,255,255, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const CTASection = styled.section`
  height: 100%;
  overflow: auto;
  flex: 1;
  padding: ${({theme}) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    color: ${({theme}) => theme.colors.blue[600]};
    width: 100%;
    line-height: ${({theme}) => theme.spacing.medium};
    a {
      color: ${({theme}) => theme.colors.orange[400]};
    }
  }
  .code-toolbar {
    width: 100%;
  }
`

export const InputFile = styled.input`
  display: none;
`

export const HomeCTA = styled.div`
  width: 100%;
`

export const Footer = styled.footer`
width: 100%;
  padding: ${({theme}) => theme.spacing.xl};
  p{
    color: ${({theme}) => theme.colors.blue[600]};
    width: 100%;
    line-height: ${({theme}) => theme.spacing.medium};
    a {
      color: ${({theme}) => theme.colors.blue[400]};
    }
  }
`