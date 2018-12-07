module.exports = {
    login:function(req, res) {
        res.writeHead(200,{'Content-type':'text/html,charset=utf-8'})
        res.write('Login page')
        res.end()
    },
    register:function(req, res) {
        res.writeHead(200,{'Content-type':'text/html,charset=utf-8'})
        res.write('Register page')
        res.end()
    }
}
