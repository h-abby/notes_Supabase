import React from 'react'
import { supabase } from '../supabaseClient'
import { Container, } from '@mui/material'
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css'

function Notes() {
    const [notes, setNotes] = React.useState([])
    const fetchNotes = async ()=> {
        const {data,error} = await supabase.from('notes').select('*')
        if (error) console.log(error)
        else setNotes(data)
    }
    const handleDelete = async (id)=> {
      const {error} = await supabase.from('notes').delete().eq('id',id)
      fetchNotes()
    }
    const breakpoints = {
      default: 3,
      1100: 2,
      700: 1,
    }
    React.useEffect(()=> {
     fetchNotes()
    },[])

    return (
    <Container sx={{p:0}}>
      <Masonry
       breakpointCols={breakpoints}
       className="my-masonry-grid"
       columnClassName="my-masonry-grid_column"
      > 
        {notes.map(note=> (
            <div key={note.id} >
                <NoteCard note={note} onDelete={handleDelete}/>
            </div>
          ))}
      </Masonry>
    </Container>
  )
}

export default Notes