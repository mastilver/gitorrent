var torrent = require(__dirname + '/torrent.js');
var schemaValidator = require(_dirname + '/schema-validator.js');
var fs = require('fs');


/**
 * manage gitorent
 * @param  {String} gitDir     in this folder will be stored all gitorent datas
 * @param  {String} torrentDir in this folder you would find your torrents
 */
var object = function(torrentDir, gitDir)
{

	var homePath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']);
	this.gitDir = (gitDir)? gitDir: join(homePath, '.gitorent');
	this.torrentDir = (torrentDir)? torrentDir: join(homePath, 'torrent');

	// make sure the folders exists
	fs.mkdirSync(gitDir);
	fs.fs.mkdirSync(torrentDir);

	this.entities = [];

	// list all gitorent found in [gitDir]
	fs.readdir(gitDir, function(err, files)
	{
		if(err) throw err;

		files.forEach(function(file)
		{
			
		});
	});
};




// add a new gitorrent
object.prototype.add(gitUrl, callback)
{
	
};

// update 
object.prototype.update(callback)
{
	this.entities.forEach(function(entity)
	{
		//entity.
	});
};


object.prototype.listAll()
{
	return this.entities;
};


/*     METHOD ABOUT GITORRENT CREATION     */


// check if the given file is a correct gitorrent.json
object.prototype.isValideGitorrent(filePath, callback)
{
	fs.fs.readFile(filePath, function(err, data)
	{
		if(err) return callback(err, false);

		var json = JSON.decode(data);

		callback(null, schemaValidator(json));
	});
};

// create a gitorent.json file 
object.prototype.createGitorrent(dirPath, torrents, callback)
{

	callback(new Error('createGitorent is not available'), null)
};



module.exports = object;