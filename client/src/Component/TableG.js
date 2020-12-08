import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';



const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      
    },
    body: {
      fontSize: 18,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  
  const useStyles = makeStyles({
    table: {
      minWidth: 0,
    },
  });

  
  

  function TableG(props) {
    
    const classes = useStyles();
   
      return (
        

    
          <TableContainer  component={Paper} style={{borderRadius:"4px",marginLeft:"30px",marginBottom:"5%"}} >
            <Table className={classes.table} aria-label="customized table">
              <TableBody >

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">login</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs1}</StyledTableCell>
                  </StyledTableRow>

                
                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">id</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs2}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">location</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs21}</StyledTableCell>
                  </StyledTableRow>

                
                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">name</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs18}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">following</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs29}</StyledTableCell>
                  </StyledTableRow>

                
                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">followers</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs28}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">followers_url</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs7}</StyledTableCell>
                  </StyledTableRow>

                
                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">following_url</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs8}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">gists_url</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs9}</StyledTableCell>
                  </StyledTableRow>

                
                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">starred_url</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs10}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">subscriptions_url</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs11}</StyledTableCell>
                  </StyledTableRow>

                
                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">organizations_url</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs12}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">repos_url</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs13}</StyledTableCell>
                  </StyledTableRow>

                
                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">events_url</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs14}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">received_events_url</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs15}</StyledTableCell>
                  </StyledTableRow>

                
                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">type</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs16}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">site_admin</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs17}</StyledTableCell>
                  </StyledTableRow>

                
                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">gravatar_id</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs4}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">company</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs19}</StyledTableCell>
                  </StyledTableRow>

                
                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">blog</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs20}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">avatar_url</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs3}</StyledTableCell>
                  </StyledTableRow>

                
                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">email</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs22}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">hireable</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs23}</StyledTableCell>
                  </StyledTableRow>

                
                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">bio</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs24}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">twitter_username</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs25}</StyledTableCell>
                  </StyledTableRow>

                
                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">public_repos</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs26}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">public_gists</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs27}</StyledTableCell>
                  </StyledTableRow>

                
                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">html_url</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs6}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">url</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs5}</StyledTableCell>
                  </StyledTableRow>

                
                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">created_at</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs30}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">updated_at</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.champs31}</StyledTableCell>
                  </StyledTableRow>

              


             
              </TableBody>
            </Table>
          </TableContainer>
      
      )
  }
  
  export default TableG