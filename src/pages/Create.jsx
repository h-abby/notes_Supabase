import React from 'react'
import {FormControl,
        FormLabel,
        RadioGroup, 
        FormControlLabel,
        Radio,
        Container,
        Box,
        Typography,
        Button, 
        TextField,
        styled
      }  from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router';
function CreateNote() {
    const [category, setCategory] = React.useState('todo')
    const [title, setTitle] = React.useState('')
    const [ErrorTitle, setErrorTitle] = React.useState(false)
    const [details, setDetails] = React.useState('')
    const [errorDetails, setErrorDetails] = React.useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e)=> {
        e.preventDefault()
        setErrorDetails(false)
        setErrorTitle(false)
        
        if (title === '') setErrorTitle(true)
        if (details === '') {setErrorDetails(true)}
        if (title && details) {
            const {error} = await supabase.from('notes').insert([{title,details,category}])
            navigate('/notes')
        }
    }
    const RadioButton = styled((props)=> <Radio color='warning' {...props}/>)(({theme})=> ({...theme}))
  return (
    <Box >
      <Typography 
       variant='h6'
       color='textPrimary'
       gutterBottom
      >
       Create a new note
      </Typography> 
      <form noValidate  autoComplete='off' onSubmit={handleSubmit}>
        <TextField 
         label='Note title' 
         variant='outlined' 
         color='warning'
         error={ErrorTitle}
         onChange={(e)=> setTitle(e.target.value)}
         sx={{
            marginTop:2.5,
            marginBottom:2.5,
            display:'block'
         }}
         />
        <TextField 
         label='Details' 
         variant='outlined' 
         color='warning'
         onChange={(e)=> setDetails(e.target.value)}
         multiline
         error={errorDetails}
         rows={4}
         sx={{
            marginTop:2.5,
            marginBottom:2.5,
            display:'block'
         }}
         />
      <FormControl sx={{display:'block'}}>
          <FormLabel color='textSecondary'>Category</FormLabel>
          <RadioGroup value={category} onChange={(e)=> setCategory(e.target.value)} defaultChecked='reminders'>
              <FormControlLabel control={<RadioButton/>} value='Todo' label='Todo'/>
              <FormControlLabel control={<RadioButton/>} value='Reminder' label='Reminder'/>
              <FormControlLabel control={<RadioButton/>} value='Work' label='Work'/>
          </RadioGroup>
                
      </FormControl>
      <Button 
       variant='contained' 
       color='warning'
       endIcon={<KeyboardArrowRightIcon/>}
       type='submit'
       sx={{
        mt:1
       }}
       >
        Submit
      </Button>
      </form> 
    </Box>
  )
}

export default CreateNote