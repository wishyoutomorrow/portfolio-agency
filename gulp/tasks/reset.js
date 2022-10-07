const del = require("del");

function reset(){
    return del(app.path.build.dist);
};

module.exports = reset;