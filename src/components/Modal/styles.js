const fontFamily = 'sans-serif';

export const modalContainer = {
  height: '100vh',
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'grid',
  gridTemplateColumns: '15% auto 15%',
  gridTemplateRows: '1fr auto 1fr',
  background: '#6e6464cc',
  zIndex: 1000,
};

export const modalHeader = {
  padding: '.5rem',
  boxSizing: 'border-box',
  borderBottom: '1px solid #eeeeee',
};

export const modalTitle = {
  margin: 0,
  fontSize: '1.5rem',
  fontFamily,
};

export const modalBody = {
  gridColumn: '2 / 2',
  gridRow: '2 / 2',
  background: '#ffffff',
  maxHeight: '420px',
  fontFamily,
};
