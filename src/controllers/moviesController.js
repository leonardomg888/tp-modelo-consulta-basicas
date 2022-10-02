const db =require('../database/models')

module.exports ={

    list : (req,res) =>{
        db.Movie.findAll()
        .then((movies) =>{
            return res.render('moviesList',{
                movies
            })
           
        })
        .catch(error => console.log(error))

        
    },

    new : (req,res) =>{

    },

    recomended : (req,res) =>{


    },
    detail : (req,res) => {
        db.Movie.findByPk(req.params.id)
        .then((movies) => {
            return res.render('moviesDetail',{
                movies
            })
        })
        .catch(error => console.log(error))
        
    }


}