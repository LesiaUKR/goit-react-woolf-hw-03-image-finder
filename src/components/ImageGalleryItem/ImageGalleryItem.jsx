import React, { Component } from 'react';
import { GalleryItem, GalleryImg, ModalImage } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () =>
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.image;

    return (
      <GalleryItem onClick={this.toggleModal}>
        <GalleryImg src={webformatURL} alt={tags} />
        {this.state.isModalOpen && (
          <Modal onClose={this.toggleModal}>
            <ModalImage src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </GalleryItem>
    );
  }
}
