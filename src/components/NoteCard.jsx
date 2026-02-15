import { DeleteOutlined } from '@mui/icons-material'
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import { green, yellow, blue,pink, red } from '@mui/material/colors'
import React from 'react'

function NoteCard({note,onDelete}) {

  return (
    <Card>
        <CardHeader
         avatar={
         <Avatar sx={{
          bgcolor: ()=> {
           
            if (note.category == 'Todo') {
              return pink[700]
            }
            if (note.category == 'Reminder') {
              return green[700]
            }
            return blue[800]
          }
          }}>{note.category[0].toUpperCase()}</Avatar>
        }
         action={
            <IconButton onClick={()=> onDelete(note.id)}>
                <DeleteOutlined/>
            </IconButton>
         }
         title={note.title}
         subheader={note.category}
        />
        <CardContent>
            <Typography variant='body2' color='textSecondary'>
                {note.details}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default NoteCard