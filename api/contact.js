const http = require('http')

// Create Node Server
const server = http.createServer( (req, res) => {
  // Only accept post
  if(req.method === 'POST') {
    // Read Post body (form data)
    let body = ''
    req.on('data', data => { body += data })
    req.on('end', () => {
      console.log(body)
      //respond
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.end('success')
    })
  }
})

// listen for contact form submit
server.listen(2222)
