import styled from "styled-components";

import { Button } from "../components/button";

export const Container = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: ${({ theme }) => theme.colors.blue[600]};
    width: 100%;
    line-height: ${({ theme }) => theme.text.xl};
    a {
      color: ${({ theme }) => theme.colors.orange[400]};
    }
  }
`;

export const Main = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;

  @media screen and (max-width: 880px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.spacing.xl};
  font-weight: bold;
  margin: ${({ theme }) => theme.spacing.medium} 0;
  span {
    color: ${({ theme }) => theme.colors.orange[500]};
  }
`;

export const Baseline = styled.p`
  font-family: "JetBrainsMono", monospace;
`;
export const DemoCopy = styled.div`
  font-size: ${({ theme }) => theme.text.sm};
  font-weight: normal;
`;
export const TitleCopy = styled.h2`
  font-size: ${({ theme }) => theme.spacing.xl2};
  font-weight: normal;
`;

export const DndOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  font-size: ${({ theme }) => theme.spacing.xl};
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const CTASection = styled.section`
  width: 100%;
  height: auto;
  overflow: auto;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:last-child {
    flex: 1;
  }
  .code-toolbar {
    width: 100%;
  }
  @media screen and (min-width: 880px) {
    height: 100%;
    &:first-child {
      min-width: calc(480px + 6.4rem);
      max-width: 33%;
    }
    &:last-child {
      padding-left: 0;
    }
  }
`;

export const UploadPercentage = styled.div`
  font-size: ${({ theme }) => theme.spacing.xl};
  font-weight: bold;
`;

export const UploadNotification = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey[100]};
  box-shadow: ${({ theme }) => theme.shadow.regular};
  border-radius: 4px;
`;

export const UploadResult = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  @media screen and (min-width: 880px) {
    flex-direction: row;
    > div {
      width: calc(50% - 0.5rem);
      flex: 1;
      padding: 0 .5rem;
    }
  }
`;

export const IframeDemo = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
  max-height: 300px;
  margin-top: 0.5em;
`;

export const UploadAction = styled.div`
  text-align: center;
  border-radius: 4px;
  background: rgb(217 225 236 / 15%);
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: ${({ theme }) => theme.colors.grey[300]};
  }
`;

export const InputFile = styled.input`
  display: none;
`;

export const HomeCTA = styled.div`
  width: 100%;
`;

export const Footer = styled.footer`
  width: 100%;
  font-size: ${({ theme }) => theme.text.sm};
  padding: 0 ${({ theme }) => theme.spacing.xl};
  @media screen and (min-width: 880px) {
    > p {
      min-width: 480px;
      max-width: 33%;
    }
  }
`;

export const RefreshButton = styled(Button)`
  width: 100%;
  padding: 8px;
`

