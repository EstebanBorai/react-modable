export default (
  modals, 
  modalProps = {
    backdrop: true
  }) => {
  return Component => {
    class Modable extends Component {
      modal(additionalProps = {}) {
        let modal = modals.get(this.props.modal),
            props = {
              ...modalProps,
              ...additionalProps,
              onHide: this.props.onModalClose.bind(null, this.props.modal),
              show: !!this.props.modal,
            };

        return modal ? modal(props) : null;
      }
    };

    Modable.displayName = Component.displayName;

    return Modable;
  };
}
