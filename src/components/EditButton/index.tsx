import EditIcon from '@mui/icons-material/Edit'
import { IconButton } from '@mui/material'
import { FC } from 'react'
import { EditButtonProps } from './edit-button.type.ts'

const EditButton:FC<EditButtonProps> = ({ onClick }) => {
  return (
    <IconButton aria-label="edit" color="primary" onClick={onClick}>
      <EditIcon />
    </IconButton>
  )
}

export default EditButton
