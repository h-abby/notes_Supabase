import React from 'react'
import { Drawer,
         Typography,
         Box,
        List,
        ListItemIcon,
        ListItemText, 
        ListItemButton,
        AppBar,
        Toolbar,
        Avatar      
 } from '@mui/material'
import { Outlet, useNavigate,useLocation } from 'react-router';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { format } from 'date-fns'
import { grey } from '@mui/material/colors';


const drawerWidth = 180;


function Layout() {
    const navigate = useNavigate()
    const location = useLocation()
    const menuItems = [
        {
            text:'My notes',
            icon: <SubjectOutlinedIcon color='warning'/>,
            path:'/notes',
        },
        {
            text:'Create note',
            icon: <AddCircleOutlineOutlinedIcon color='warning'/>,
            path:'/',
        },
    ]
  return (
   <Box display='flex' >
      <AppBar sx={{bgcolor:'#fff',width: `calc(100% - ${drawerWidth}px)`}}>
        <Toolbar sx={{color:theme => theme.palette.grey[900],fontSize:{xs:'12px',sm:'14px',md:'1rem'}}} >
            <Typography  flexGrow={1} fontSize='inherit'>
              Today is the {format(new Date(),'do MMMM Y')}
            </Typography>
            <Typography fontSize='inherit'>User</Typography>
            <Avatar sx={{bgcolor: grey[400],width: 30, height: 30, ml:theme=> theme.spacing(2),fontSize:'inherit'}} >U</Avatar>
        </Toolbar>
      </AppBar>
      <Drawer
       variant='permanent'
       sx={{width:drawerWidth, '& .MuiDrawer-paper' :{
        width: drawerWidth,
        boxSizing:'border-box'
       }}}
       anchor='left'
       >
        <div>
          <Typography sx={{px: 2,pt: 2.5}}>
            Notes
          </Typography>
        </div>
        <List>
        {menuItems.map(item => (
            <ListItemButton key={item.text} onClick={()=> navigate(item.path)} 
            className={location.pathname == item.path? 'active' : null}>
              <ListItemIcon >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItemButton>
        ))}
        </List>
      </Drawer>
      <Box sx={{p: 3}}>
        <Toolbar/>
        <Outlet/>
      </Box>
   </Box>
  )
}

export default Layout