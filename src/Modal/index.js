import React from 'react';
import './modal.css';

class Modal extends React.Component {
	get style() {
		if (this.props.style) {
			return this.props.style;
		} else {
			return {
				backgroundColor: '#ffffff',
				width: '60%',
				padding:'1rem',
				boxSizing: 'border-box'
			};
		}
	}

	render() {
		const { children, className } = this.props;
		return (
			<div className="modal">
				<div style={this.style} className={className}>
					{ children }
				</div>
			</div>
		);
	}
}

export default Modal;
