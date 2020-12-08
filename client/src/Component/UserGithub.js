import React from 'react'

import '../App.css';

import TableG from './TableG'
import './TableG.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons'
import CircularProgress from './circulbar';
import {Link} from 'react-router-dom'







class UserGithub extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      user : null,
      username : (this.props.match.params.username)
  
    }
  }

  


  async componentDidMount(){


  // VERIFIE DANS LA BDD
  const responsedb = await fetch(`http://localhost:4242/users/${this.state.username}`)
  const data2 = await responsedb.json()
  console.log(data2.length)

  if(data2.length == 0){

    // va chercher dans l'api
    const responseApi = await fetch(`http://api.github.com/users/${this.state.username}`)
    
    const dataApi = await responseApi.json()

    
    let tab = []
   
    tab.push(dataApi)
   // console.log(dataApi)



    //on insère le login en minuscule pour éviter une double insértion problèmatique lorsque l'user entre un nom mais avec des majuscule différentes exemple : soufianlabed et SoufianLabed
    if(dataApi.login != null){

    dataApi.login = (dataApi.login).toLowerCase()
    this.setState({user : tab})
    
  
  }
    


    const post = await fetch('http://localhost:4242/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataApi),
    })

    
    await post.json()
    
    
    
  

  }else{
    
    let tab = []
    tab.push(data2)
    console.log(data2)
    this.setState({user : data2})
    console.log(data2)
  
  }

  }


  
  

  render(){

   return (
        <div >

         
        <Link to="/">       
         <FontAwesomeIcon style={{width:"10%",height:"30px",marginTop:"30px",marginRight:"90%",color:"black"}}icon={faArrowLeft} />
        </Link>
        
        <div className="row" style={{width:"100%"}}>


        <svg viewBox="0 0 128 128" style={{width:"10%"}}>
          <g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
        </svg>
     
        {this.state.user ? (
          <div className="row">
            <div className="tableG">
            {this.state.user.map(user => (

                <TableG
                                      
                champs1={user.login} 
                champs2={user.id} 
                champs3 = {user.avatar_url}
                champs4 = {user.gravatar_id}
                champs5 = {user.url}
                champs6 = {user.html_url}
                champs7 = {user.followers_url}
                champs8 = {user.following_url}
                champs9 = {user.gists_url}
                champs10 = {user.starred_url}
                champs11= {user.subscriptions_url}
                champs12 = {user.organizations_url}
                champs13 = {user.repos_url}
                champs14 = {user.events_url}
                champs15 = {user.received_events_url}
                champs16 = {user.type}
                champs17= {user.site_admin}
                champs18 = {user.name}
                champs19 = {user.company}
                champs20 = {user.blog}
                champs21 = {user.location}
                champs22 = {user.email}
                champs23 = {user.hireable}
                champs24 = {user.bio}
                champs25 = {user.twitter_username}
                champs26 = {user.public_repos}

                champs27 = {user.public_gists}
                champs28 = {user.followers}
                champs29 = {user.following}
                champs30 = {user.created_at}

                champs31 = {user.updated_at}


     
            
                />
              
            ))}
            </div>
          </div>
        ) : (
         <div style={{marginLeft:"auto",marginRight:"auto",height:"100vh"}}>
           <div>Il n'y a peut être aucun compte à ce user ^^</div>
                           <CircularProgress/>
         </div>
        )}
        </div>
        </div>
      
    );
  }






  }
export default UserGithub;