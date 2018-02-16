var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={

    var article-one={
        title:'article-one by jyothi',
        date:'feb 2 2018',
        heading:'article-one',
        content:` <p>
            this is artical one paragraph.
            </p> `  
    },
    var article-two={
        title:'article-two by jyothi',
        dateAndTime:'16-02-2018 17:33',
        heading:'article-three',
        content:`<p>
            this is artical two  paragraph. blah blah blah!!!!
        </p>
        `
    },
    var article-three={
        title:'article-three by jyothi',
        dateAndTime:'16-02-2018 17:33',
        heading:'article-three',
        content:`<p>
            this is artical three  paragraph. blah blah blah!!!!
        </p>
        `
    },
    
};   
function createtemplate(data){
    
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;

    var htmltemplate=`
    <html>
        <head>
            <title>
             ${title}
            </title>
            <meta name=" viewport" content="width=device-width,initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
            </head>
            
    <body>
        <div >
              <a href="/">home</a>
        </div>
        <hr/>
        <div class="container">
                <h2> ${heading}</h2>
        
            <div>
            {date}
            </div>
                ${content}
        </div>
        
    </body>        
        
      </html>
      `;
      return htmltemplate;


    
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
  res.send(createtemplate(articles[article-one]));
});
app.get('/article-two', function (req, res) {
  res.send(createtemplate(articles[article-two]));
});
app.get('/article-three', function (req, res) {
  res.send(createtemplate(articles[article-three]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
