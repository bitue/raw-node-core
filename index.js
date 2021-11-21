const fs = require('fs');
const http = require('http');


const server = http.createServer(function (req, res) {

    if (req.url == '/') {



     

        const data = fs.readFileSync('main.html');

        res.writeHead(200, {
            "content-type": "text/html"
        })
        res.write(data)
        res.end()

    }

    if (req.url == '/writeFile') {
         fs.readFile('main.html', (err, data) => {
            fs.writeFile('demo.html', data, (error) => {
                if (error) {
                    res.writeHead(200, { "content-type": "text/html" })
                    res.write('file write fail')
                    res.end()
    
                }
                else {
                    res.writeHead(200, { "content-type": "text/html" })
                    res.write('file write success')
                    res.end()
                }
            })

        });

       
    }

    if(req.url =='/rename'){
        fs.rename('demo.text', 'rename.txt', (err)=> {
            if(err){
                res.writeHead(200, { "content-type": "text/html" })
                res.write('file rename failed')
                res.end()

            }
            else{
             
                res.writeHead(200, { "content-type": "text/html" })
                res.write('success')
                res.end()
            }
        })
    }


    if(req.url =='/delete'){
        fs.unlink('demo.html',  (err)=> {
            if(err){
                res.writeHead(200, { "content-type": "text/html" })
                res.write('file deleted failed')
                res.end()

            }
            else{
             
                res.writeHead(200, { "content-type": "text/html" })
                res.write('success file delete')
                res.end()
            }
        })
    }


    if(req.url=='/exist'){
        fs.exists('rename.txt', (result)=> {
           if(result){
               res.end('true')
           }
           else{
               res.end('false')
           }
        })
    }




})


server.listen(5050, () => {
    console.log('server is running')
})