const sessionIdtoUsermMap = new Map();

function setUser(id, user){
    sessionIdtoUsermMap.set(id, user);
}

function getUser(id){
    return sessionIdtoUsermMap.get(id);
}

module.exports = {
    setUser,
    getUser,
};