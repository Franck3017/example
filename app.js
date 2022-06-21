const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const app = express()
let num = 0

app.use(bodyParser.json())

// Create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pruebapeliculas'
})

db.connect()

// const info = () => {
//   return

//   // return {
//   //   title: movie.title,
//   //   overview: movie.overview,
//   //   poster_path: movie.poster_path,
//   //   backdrop_path: movie.backdrop_path,
//   //   vote_average: movie.vote_average,
//   //   release_date: movie.release_date,
//   //   category
//   // }
// }

// Connection to API - TMDB - Endpoint: /api/tmdb

app.get('/popular-movie', (req, res) => {
  const tmdb = fetch('https://api.themoviedb.org/3/movie/popular?api_key=fa340e8a8a245ed0d539ccf24d85e2e3')
    .then(response => response.json())
    .then(data => {
      res.send(data.results)
    })
})

app.get('/Categoria/Terror', (req, res) => {
  const tmdb = fetch('https://api.themoviedb.org/3/discover/movie?api_key=fa340e8a8a245ed0d539ccf24d85e2e3&with_genres=27&language=es-Es')
    .then(response => response.json())
    .then(data => {
      let consulta = "INSERT INTO wp_posts(post_author,post_date, post_date_gmt, post_content, post_title, post_excerpt, post_status, comment_status, post_name, post_modified, post_modified_gmt, post_parent, guid, post_type) VALUES "

      data.results.map((movie, i) => {
        if (i > 0) consulta += `,`
        consulta += `(1, '2022-06-15 20:00:00','2022-06-15 20:00:00',"${movie.overview}","${movie.title}","${movie.overview}",'publish','open','${movie.title}','2022-06-15 20:00:00','2022-06-15 20:00:00','0','http://localhost:8080/wordpress_2/?p=1','post')`
      })
      db.query(consulta, err => {
        if (err) throw err
        console.log('Query Realizada')
        res.send('Ok')
      })
    })
})

app.get('/Categoria/Accion', (req, res) => {
  const tmdb = fetch('https://api.themoviedb.org/3/discover/movie?api_key=fa340e8a8a245ed0d539ccf24d85e2e3&with_genres=28&language=es-Es')
    .then(response => response.json())
    .then(data => {
      let consulta = "INSERT INTO wp_posts(post_author,post_date, post_date_gmt, post_content, post_title, post_excerpt, post_status, comment_status, post_name, post_modified, post_modified_gmt, post_parent, guid, post_type) VALUES "

      data.results.map((movie, i) => {
        if (i > 0) consulta += `,`
        consulta += `(1, '2022-06-15 20:00:00','2022-06-15 20:00:00',"${movie.overview}","${movie.title}","${movie.overview}",'publish','open','${movie.title}','2022-06-15 20:00:00','2022-06-15 20:00:00','0','http://localhost:8080/wordpress_2/?p=1','post')`
      })
      db.query(consulta, err => {
        if (err) throw err
        console.log('Query Realizada')
        res.send('Ok')
      })
    })
})

app.get('/Categoria/Ciencia-Ficcion', (req, res) => {
  const tmdb = fetch('https://api.themoviedb.org/3/discover/movie?api_key=fa340e8a8a245ed0d539ccf24d85e2e3&with_genres=878&language=es-Es')
    .then(response => response.json())
    .then(data => {
      let consulta = "INSERT INTO wp_posts(post_author,post_date, post_date_gmt, post_content, post_title, post_excerpt, post_status, comment_status, post_name, post_modified, post_modified_gmt, post_parent, guid, post_type) VALUES "

      data.results.map((movie, i) => {
        if (i > 0) consulta += `,`
        consulta += `(1, '2022-06-15 20:00:00','2022-06-15 20:00:00',"${movie.overview}","${movie.title}","${movie.overview}",'publish','open','${movie.title}','2022-06-15 20:00:00','2022-06-15 20:00:00','0','http://localhost:8080/wordpress_2/?p=1','post')`
      })
      db.query(consulta, err => {
        if (err) throw err
        console.log('Query Realizada')
        res.send('Ok')
      })
    })
})

app.get('/Categoria/Animacion', (req, res) => {
  const tmdb = fetch('https://api.themoviedb.org/3/discover/movie?api_key=fa340e8a8a245ed0d539ccf24d85e2e3&with_genres=16&language=es-Es')
    .then(response => response.json())
    .then(data => {
      let consulta = "INSERT INTO wp_posts(post_author,post_date, post_date_gmt, post_content, post_title, post_excerpt, post_status, comment_status, post_name, post_modified, post_modified_gmt, post_parent, guid, post_type) VALUES "

      data.results.map((movie, i) => {

        if (i > 0) consulta += `,`
        consulta += `(1, '2022-06-15 20:00:00','2022-06-15 20:00:00',"${movie.overview.replace(/"/g, "'")}","${movie.title.replace(/"/g, "'")}","${movie.overview.replace(/"/g, "'")}",'publish','open',"${movie.title.replace(/"/g, "'")}",'2022-06-15 20:00:00','2022-06-15 20:00:00','0','http://localhost:8080/wordpress_2/?p=1','post')`
      })
      db.query(consulta, err => {
        if (err) throw err
        console.log('Query Realizada')
        res.send('Ok')
      })
    })
})

app.get('/Categoria/Drama', (req, res) => {
  const tmdb = fetch('https://api.themoviedb.org/3/discover/movie?api_key=fa340e8a8a245ed0d539ccf24d85e2e3&with_genres=18&language=es-Es')
    .then(response => response.json())
    .then(data => {
      let consulta = "INSERT INTO wp_posts(post_author,post_date, post_date_gmt, post_content, post_title, post_excerpt, post_status, comment_status, post_name, post_modified, post_modified_gmt, post_parent, guid, post_type) VALUES "

      data.results.map((movie, i) => {
        if (i > 0) consulta += `,`
        consulta += `(1, '2022-06-15 20:00:00','2022-06-15 20:00:00',"${movie.overview.replace(/"/g, "'")}","${movie.title.replace('"', "'")}","${movie.overview.replace(/"/g, "'")}",'publish','open','${movie.title.replace('"', "'")}','2022-06-15 20:00:00','2022-06-15 20:00:00','0','http://localhost:8080/wordpress_2/?p=1','post')`
      })
      db.query(consulta, err => {
        if (err) throw err
        console.log('Query Realizada')
        res.send('Ok')
      })
    })
})

app.get('/Categoria/Aventura', (req, res) => {
  const tmdb = fetch('https://api.themoviedb.org/3/discover/movie?api_key=fa340e8a8a245ed0d539ccf24d85e2e3&with_genres=12&language=es-Es')
    .then(response => response.json())
    .then(data => {
      let consulta = "INSERT INTO wp_posts(post_author,post_date, post_date_gmt, post_content, post_title, post_excerpt, post_status, comment_status, post_name, post_modified, post_modified_gmt, post_parent, guid, post_type) VALUES "

      data.results.map((movie, i) => {
        if (i > 0) consulta += `,`
        consulta += `(1, '2022-06-15 20:00:00','2022-06-15 20:00:00',"${movie.overview.replace(/"/g, "'")}","${movie.title.replace(/"/g, "'")}","${movie.overview.replace(/"/g, "'")}",'publish','open','${movie.title.replace(/"/g, "'")}','2022-06-15 20:00:00','2022-06-15 20:00:00','0','http://localhost:8080/wordpress_2/?p=1','post')`
      })
      db.query(consulta, err => {
        if (err) throw err
        console.log('Query Realizada')
        res.send('Ok')
      })
    })
})

app.get('/Categoria/Comedia', (req, res) => {
  const tmdb = fetch('https://api.themoviedb.org/3/discover/movie?api_key=fa340e8a8a245ed0d539ccf24d85e2e3&with_genres=35&language=es-Es')
    .then(response => response.json()
      .then(data => {
        let consulta = "INSERT INTO wp_posts(post_author,post_date, post_date_gmt, post_content, post_title, post_excerpt, post_status, comment_status, post_name, post_modified, post_modified_gmt, post_parent, guid, post_type) VALUES "

        data.results.map((movie, i) => {
          if (i > 0) consulta += `,`
          consulta += `(1, '2022-06-15 20:00:00','2022-06-15 20:00:00',"${movie.overview.replace(/"/g, "'")}","${movie.title.replace(/"/g, "'")}","${movie.overview.replace(/"/g, "'")}",'publish','open','${movie.title.replace(/"/g, "'")}','2022-06-15 20:00:00','2022-06-15 20:00:00','0','http://localhost:8080/wordpress_2/?p=1','post')`
        })
        db.query(consulta, err => {
          if (err) throw err
          console.log('Query Realizada')
          res.send('Ok')
        })
      }))
})

app.get('/Categoria/Crimen', (req, res) => {
  const tmdb = fetch('https://api.themoviedb.org/3/discover/movie?api_key=fa340e8a8a245ed0d539ccf24d85e2e3&with_genres=80&language=es-Es')
    .then(response => response.json()
      .then(data => {
        db.query('SELECT MAX(ID) as num FROM wp_posts', (err, data2) => {
          if (err) throw err
          // console.log('Query Realizada')
          let result = data2.map(ident => ident.num)
          num = result[0] + 1
          console.log(data2)

          let consulta = "INSERT INTO wp_posts(ID, post_author,post_date, post_date_gmt, post_content, post_title, post_excerpt, post_status, comment_status, post_name, post_modified, post_modified_gmt, post_parent, guid, post_type) VALUES "

          var selectID = []

          data.results.map((movie, i) => {
            if (i > 0) consulta += `,`
            consulta += `(${num}, 1, '2022-06-15 20:00:00','2022-06-15 20:00:00',"${movie.overview.replace(/"/g, "'")}","${movie.title.replace(/"/g, "'")}","${movie.overview.replace(/"/g, "'")}",'publish','open',"${movie.title.replace(/"/g, "'")}",'2022-06-15 20:00:00','2022-06-15 20:00:00','0','http://localhost:8080/wordpress_2/?p=1','post')`
            selectID.push(num)
            num++
          })
          db.query(consulta, err => {
            if (err) throw err
            console.log('Query Realizada')
            let consulta2 = "INSERT INTO wp_term_relationships(object_id, term_taxonomy_id, term_order) VALUES "
            selectID.map((i, k) => {
              if (k > 0) consulta2 += `,`
              consulta2 += `(${i}, 9, 0)`
            })
            db.query(consulta2, err2 => {
              if (err2) throw err2
              let consulta3 = "INSERT INTO wp_postmeta (post_id, meta_key, meta_value) VALUES "

              selectID.map((i, k) => {
                if (k > 0) consulta3 += `,`
                consulta3 += `(${i}, '_wp_page_template', 'single-no-separators')`
              })
              db.query(consulta3, err => {
                if (err) throw err
                res.send('Ok')
              })
            })
          })
        })
      }))
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
