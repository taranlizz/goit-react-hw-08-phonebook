import { Box, Button } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { ContactModal } from 'components/ContactModal/ContactModal';
import { useState } from 'react';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';

const contactBarBoxStyles = {
  display: 'flex',
  gap: '10px',
};

export const ContactBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box sx={contactBarBoxStyles}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <GroupAddIcon sx={{ marginRight: '7px' }} />
        Add
      </Button>
      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <ContactFilter />
    </Box>
  );
};
