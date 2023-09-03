function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split('&');
    vars.forEach((value) => {
        let pair = value.split('=');
        if(pair[0] == variable){
            console.log(pair[1]);
            return pair[1];
        }
    })
    return null;
}

module.exports = { getQueryVariable }