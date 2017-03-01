export default class Routes {

	contructor(app, athService) {
		this.athService = athService
		app.use(function (req, res, next) {
			if(this.athService(req.body.name, req.body.password)) {
				res.json({ success: false, message: 'Authentication failed. User not found.' });
			}
			else {
				res.json({ success: true, message: 'Authentication succeed.' });
			}
			next();
		})
	}
}