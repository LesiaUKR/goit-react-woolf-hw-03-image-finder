import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modalka, ModalCloseBtn } from './Modal.styled';
import { IoMdClose } from 'react-icons/io';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = evt => {
    evt.stopPropagation();
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <Modalka>
          <ModalCloseBtn type="button" onClick={this.props.onClose}>
            <IoMdClose size="12" />
          </ModalCloseBtn>
          {this.props.children}
        </Modalka>
      </Overlay>,
      document.querySelector('#modal-root')
    );
  }
}
