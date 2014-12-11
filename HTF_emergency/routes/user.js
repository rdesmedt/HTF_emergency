
/*
 * GET users listing.
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'mysql.jobornot.be',
	user : 'root',
	password : '875421',
	database : 'HacktheFuture'

});

exports.list = function(req, res){
	connection.connect(function(err) {
		if(err){
			console.error('error connecting: ' + err.stack);
			return;
		}
		
		console.log('connected as id ' + connection.threadId);
	});
	
	var querystring = 'SELECT * FROM Contact';
	
	connection.query(querystring, function(err, rows){
		if(err){
			console.log(err);
		}else{
			console.log(rows);
		}
	})
	res.redirect('/');
};

exports.add = function(req, res){
	connection.connect(function(err) {
		if(err){
			console.error('error connecting: ' + err.stack);
			return;
		}
		
		console.log('connected as id ' + connection.threadId);
	});
 
 console.log(req.body);
 
 connection.beginTransaction(function(err){
	if (err) {throw err}
	connection.query('INSERT INTO Contact SET ?', req.body, function(err, result){
		if (err){
			connection.rollback(function(){
				throw err;
			});
		}
		
	});
	connection.commit(function(err) {
        if (err) { 
          connection.rollback(function() {
            throw err;
          });
        }
        console.log('success!');
      });
 });
 
 res.redirect('/');
};