"use strict";
module.exports = json_target;

json_target.description = "JSON representation";

function json_target(root, options, callback) {
    callback(null, JSON.stringify(root.toJSON({ keepComments: true }), null, 2));
}
