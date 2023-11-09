import { Typography } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ModalBox } from 'components/Modal/Modal';

export const ContactModal = ({ isOpen, setIsOpen }) => {
  return (
    <ModalBox isOpen={isOpen} setIsOpen={setIsOpen}>
      <Typography variant="h4" align="center" gutterBottom>
        Add new contact
      </Typography>
      <ContactForm />
    </ModalBox>
  );
};
