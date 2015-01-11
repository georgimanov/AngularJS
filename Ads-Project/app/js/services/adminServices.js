/**
 * Created by George Manov on 11.1.2015 г..
 */

'use strict';

app.constant('defaultImg', 'http://www.paolobugatti.com/img/img-default.png');

app.factory('adminServices',
    function ($resource, baseServiceUrl) {
        var adsResource = $resource(
            baseServiceUrl + '/api/admin',
            null,
            {
                'getAll': {method:'GET'}
            }
        );

        return {
            getAds: function(params, success, error) {
                return adsResource.getAll(params, success, error);
            }
        }
    }
);

app.factory('AdminTownServices',
    function ($resource, baseServiceUrl) {
        var adsResource = $resource(
            baseServiceUrl + '/api/admin/towns',
            null,
            {
                'getAll': {method:'GET'}
            }
        );

        return {
            getTowns: function(params, success, error) {
                return adsResource.getAll(params, success, error);
            }
        }
    }
);