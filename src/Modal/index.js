import React from 'react';

class Modal extends React.Component {
	get curtainStyle() {
    let _default = {
      background: '#0c0c0c4d',
      height: '100vh',
      width: '100%',
      position: 'fixed',
      top: '0',
      left: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '10000'
    };

		if (this.props.curtainStyle) {
			return { ...this.props.curtainStyle, ..._default };
		} else {
			return _default;
		}
  }
  
  get modalStyle() {
    let _default = {
      backgroundColor: '#ffffff',
      width: '60%',
      padding:'1rem',
      boxSizing: 'border-box'
    };

    if (this.props.modalStyle) {
      return { ...this.props.modalStyle, ..._default };
    } else {
      return _default;
    }
  }

	render() {
		const { children, curtainClassName, modalClassName } = this.props;
		return (
			<div style={this.curtainStyle} className={curtainClassName}>
				<div style={this.modalStyle} className={modalClassName}>
					{ children }
				</div>
			</div>
		);
	}
}

export default Modal;
