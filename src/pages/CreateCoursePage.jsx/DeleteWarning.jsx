 import { Modal, Box, Typography, Button } from  '@mui/material';
import { Fragment } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function DeleteWarning({open,setOpen, action}) {


    const handleClose = () => setOpen(false);
  

    return (
        <Fragment>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} color="black">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are You Sure You Want to Delete This Section?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, color: 'black', marginBottom: '1rem' }}>
                       Once Deleted Your Information Will Be Lost, Including The Uploaded Videos and any user data, Are You Sure You Want To Continue?
                    </Typography>
                    <div className='flex w-auto justify-center'>
                    <Button onClick={action} variant="contained" color="error">Delete</Button>
                    </div>
                </Box>
            </Modal>
        </Fragment>
    )
}

export default DeleteWarning;