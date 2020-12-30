const Pool = require('../model/database.js');
const yelp = require('yelp-fusion');
const { API_KEY } = require('../config');
const client = yelp.client(API_KEY);

const yelpController = {};

yelpController.getActivities = async (req, res, next) => {
    const { categories, location } = req.body;

    const searchRequest = {
        categories,
        location
    };

    client.search(searchRequest).then(response => {
        const data = response.jsonBody.businesses;
        const result = data.map(business => {
            let targetData = {};

            targetData.name = business.name;
            targetData.image_url = business.image_url;
            targetData.url = business.url;
            targetData.review_count = business.review_count;
            targetData.rating = business.rating;
            targetData.categories = business.categories;
            targetData.coordinates = business.coordinates;
            targetData.address = business.location.display_address;

            return targetData;
        });
        
        res.locals.result = result;
        res.locals.message = 'Successfully grabbed the data';
        return next();
    }).catch(err => {
        return next({
            log: `yelpController.getActivities: ${err}`,
            status: 500,
            message: {
                err: 'Internal Server Error',
            },
        });
    });
}

module.exports = yelpController;