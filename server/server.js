var Sequelize = require('sequelize');
const express = require('express')
const app = express()
const cors = require('cors')

const process = require('process')

const port = process.argv[2]
var sequelize = new Sequelize('DBNAME', 'postgres', 'PASSWORD', {
  dialect: 'postgres',
 
})


app.use(cors())
app.use(express.json())

var searchGithub = sequelize.define('searchGithub', {


           login: Sequelize.STRING,
          node_id: Sequelize.STRING,
            avatar_url: Sequelize.STRING,
            gravatar_id: Sequelize.STRING,
          url: Sequelize.STRING,
          html_url: Sequelize.STRING,
            followers_url: Sequelize.STRING,
          following_url: Sequelize.STRING,
        gists_url: Sequelize.STRING,
      starred_url: Sequelize.STRING,
            subscriptions_url: Sequelize.STRING,
            organizations_url: Sequelize.STRING,
              repos_url: Sequelize.STRING,
            events_url: Sequelize.STRING,
            received_events_url: Sequelize.STRING,
            type: Sequelize.STRING,
            site_admin: Sequelize.STRING,
            name: Sequelize.STRING,
              company: Sequelize.STRING,
            blog: Sequelize.STRING,
            location: Sequelize.STRING,
              email: Sequelize.STRING,
            hireable: Sequelize.STRING,
            bio: Sequelize.STRING,
              twitter_username: Sequelize.STRING,
            public_repos: Sequelize.STRING,
          public_gists: Sequelize.STRING,
          followers: Sequelize.STRING,
          following: Sequelize.STRING,
          created_at: Sequelize.STRING,
          updated_at: Sequelize.STRING,
            searchGithub_pke: Sequelize.STRING



});



sequelize.sync().then(function() {
  return 0
}).then(function() {
  console.log("is sync")
});



app.get('/users/:username', function (req, res) {
    //res.send('GET request to the homepage');
   // searchGithub.findAll().then(notes => res.send(notes));
   const {username} = req.params

   searchGithub.findAll({
    where: {
      login: username,
    }
  }).then(notes => res.send(notes));

  });


  

app.post('/users',(req, res) => {
    console.log(req.body)


  
      searchGithub.create({
        
            id : req.body.id,
            login: req.body.login,
            node_id: req.body.node_id,
            avatar_url: req.body.avatar_url,
            gravatar_id: req.body.gravatar_id,
            url: req.body.url,
            html_url: req.body.html_url, 
            followers_url: req.body.followers_url,
            following_url: req.body.following_url,
            gists_url: req.body.gists_url,
            starred_url: req.body.starred_url,
            subscriptions_url: req.body.subscriptions_url,
            organizations_url: req.body.organizations_url,
            repos_url: req.body.repos_url,
            events_url: req.body.events_url,
            received_events_url: req.body.received_events_url,
            type: req.body.type,
            site_admin: req.body.site_admin,
            name: req.body.name,
            company: req.body.company,
            blog: req.body.blog,
            location: req.body.location,
            email: req.body.email,
            hireable: req.body.hireable,
            bio: req.body.bio,
            twitter_username: req.body.twitter_username,
            public_repos: req.body.public_repos,
            public_gists: req.body.public_gists,
            followers: req.body.followers,
            following: req.body.following,
            created_at: req.body.created_at,
            updated_at: req.body.updated_at
      }).then( () => {
        res.send("donnée correctement ajouté")
      })
      .catch((err) => { console.log(err); throw err })
      .finally(() => {
          
          console.log
      });
  
  
  });


  app.listen(port, () => {
    console.log('Server app listening on port ' + port);
  });
  
  
