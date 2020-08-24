import { keyframes } from 'styled-components';

export const loadingEffect = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const slideIn = keyframes`
  0% {
    transform: translateZ(600px);
  }
  100% {
    transform: translateZ(0);
  }
`;

export const tiltInRight = keyframes`
  0% {
    transform: rotateX(-30deg) translateX(300px) skewX(30deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
  }
`;

export const tiltInLeft = keyframes`
  0% {
    transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
  }
`;

export const tiltInBottom = keyframes`
   0% {
    transform: rotateY(30deg) translateY(300px) skewY(-30deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0deg) translateY(0) skewY(0deg);
    opacity: 1;
  }
`;

export const pulse = keyframes`
  0% {
    transform: scale(0.7);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    transform: scale(0.7);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;
