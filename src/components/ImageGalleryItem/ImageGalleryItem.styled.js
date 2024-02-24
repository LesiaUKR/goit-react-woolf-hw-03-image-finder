import styled from 'styled-components';

export const GalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 5px 5px 0px rgba(69, 33, 52, 0.8),
    0px 1px 1px 0px rgba(69, 33, 52, 0.8),
    0px 2px 1px -1px rgba(69, 33, 52, 0.8);
`;

export const GalleryImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const ModalImage = styled.img`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  object-fit: cover;
`;
