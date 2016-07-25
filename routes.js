var Imgur = require('imgur-search');
var Images = require('./models/Images');

module.exports = function (app) {
    app.route('/api/search/:search')
        .get( function (req, res) {

           
            var search = {
                image: req.params.search,
                date : new Date()
            };

            var offset= req.query.offset || 0;

            Images.create(search, function(err, Image) {
                if(err) { return handleError(res, err); }

                
                var images = new Imgur('3jh4jk12j1234241d');             
              

                images.search(search.image, 'top', offset)
                    .done(function(data){
                        return res.status(201).json(data); 
                    })
                    .fail(function(error){
                        return handleError(res, error);
                    });
            });
        });

    app.route('/api/latest/search') 
        .get( function (req, res) {
            var query = Images.find({},{_id:0, image:1, date:1}).sort({"date":-1}).limit(10);
            query.exec(function(err, results){
                if(err) { return handleError(res, err); }
                return res.json(results);
            });
            
        });
};


function handleError(res, err) {

  return res.status(500).send(err);
}
