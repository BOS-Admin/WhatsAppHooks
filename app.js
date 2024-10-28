const http=require('http')
const fs=require('fs')
const port =3000

const server=http.createServer(function(req,res){
    
    fs.readFile('index.html','utf8',function(error,data){
        if(error){

            console.log('Error')
            res.writeHead(404)
            res.write('Error:File Not Found')
            res.write('Hello')
            res.end()
        }
        else{
            console.log('Else')
            res.writeHead(200,{'Content-Type':'text/html'})
            console.log(data)
            res.write(data)
            
            res.end()
        }
    })
  
  
})

server.listen(port,function(error){
    if(error){
        console.log('Something  went wrong',error)
    }
    else{
        console.log('Server is listening on port '+port)
    }
})