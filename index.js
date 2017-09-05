'use strict';

var reactConfig = require('ykit-config-react');

exports.config = function (options, cwd) {
    var originModifyQuery = options.modifyQuery;

    options.modifyQuery = function(defaultQuery) {
        defaultQuery.plugins.push([
            'import',
            {
                "libraryName": "antd",
                "style": false
            }
        ]);

        if(typeof originModifyQuery === 'function') {
            return originModifyQuery(defaultQuery);
        } else {
            return defaultQuery;
        }
    }

    this.commands.push({
        name: 'setup',
        module: require('./commands/setup.js')
    });

    reactConfig.config.call(this, options, cwd);
};
