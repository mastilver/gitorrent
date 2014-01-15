var schemaValidator = require("schema")();

var schema = schemaValidator.Schema.create(
{
	type: 'object',
	properties:
	{
		torrents:
		{
			type: 'array',
			minItems: 1,
			items:
			{
				type: 'object',
				properties:
				{
					type:
					{
						type: 'string',
						enum: ['file', 'hash', 'url', 'magnet']
					},
					path:
					{
						type: 'string'
					},
					hash: 
					{
						type: 'string',

					},
					url:
					{
						type: 'string',
					},
					magnet:
					{
						type: 'string'
					}
				}
			}
		}
	}
});


module.exports = function(json)
{
	return schema.validate(json);
}