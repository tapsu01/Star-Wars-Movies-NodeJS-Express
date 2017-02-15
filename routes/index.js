var moviesJSON = require('../movies.json');
var movies = moviesJSON.movies;
// Home
exports.home = function (req, res) {
    res.render('home', {
        title: 'Star Wars Movies',
        movies: movies
    });
};

// movie single
exports.movie_single = function (req, res) {
    var episode_number = req.params.episode_number;
    if (episode_number >= 0 && episode_number <= movies.length) {
    	var movie = movies[episode_number];
    	res.render('single_movie', {
    		title: 'Star Wars Movies - ' + movie.title,
    		movie: movie,
    		movies: movies
    	});
    } else {
    	res.render('notFound', {
    		title: '404! Page Not Found!'
    	});
    }
};

exports.notFound = function (req, res) {
    res.send('This is not the page that you are looking for');
};