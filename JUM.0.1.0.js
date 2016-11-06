var JUM = {
    getAllParameters: function(){
        return window.location.search.split(/[&?]+/).slice(1).filter(function(v, i, o){
            v = v.split["="];
        });
    },
    getParameter: function(key){
        var val = window.location.search.split(/[&?]+/).slice(1).filter(function(v, i, o){
            if (v.split("=")[0]===key) return v;
        }, this)[0];
        return val ? val.split("=")[1] : null;
    },
    hardSetParameter: function(){},
    softSetParameter: function(key, value){
        history.pushState(null, null, "?"+(function(){
            var list = [];
            for (URLKey in Interface.URLParams){
                list.push(URLKey+"="+Interface.URLParams[URLKey]);
            }
            return list.join("&");
        })());
    }
};