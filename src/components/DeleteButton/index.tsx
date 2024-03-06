import { FC } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material'
import { DeleteButtonProps } from './delete-button-type.ts'

const DeleteButton:FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <IconButton aria-label="delete" color="error" onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  )
}

export default DeleteButton
