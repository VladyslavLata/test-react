import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalBox } from './Modal.styled';

const modalEl = document.getElementById('modal-box');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onPressEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onPressEsc);
  }

  onPressEsc = e => {
    console.log(e.code);
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  closeModalClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.closeModalClickBackdrop}>
        <ModalBox>{this.props.children}</ModalBox>
      </Backdrop>,
      modalEl
    );
  }
}
