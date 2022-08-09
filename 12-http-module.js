const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('<h1>Welcome to our homepage</h1>')    
    }else if(req.url === '/about'){
        res.end('<h1>about page</h1><br><a href="/"> back home </a>')
    }else{
        res.end('<h1>WRONG REQUEST</h1><br><a href="/"> back home </a>')
    }
    
})

server.listen(5000)

