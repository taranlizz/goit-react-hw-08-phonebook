import { Button, Modal, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const modalBoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 465,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline: 'none',
};

export const ModalBox = ({ children, isOpen, setIsOpen }) => {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <Box sx={modalBoxStyle}>
        <Button
          onClick={() => setIsOpen(false)}
          variant="contained"
          color="secondary"
          sx={{
            marginLeft: '365px',
            marginBottom: '10px',
            '& ': { minWidth: '0px', padding: '3px 5px' },
          }}
        >
          <CloseIcon />
        </Button>
        {children}
      </Box>
    </Modal>
  );
};
