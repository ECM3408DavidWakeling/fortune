// author David Wakeling
var express = require( "express" )
var www_yerkee_com = "68.71.131.28"

app.get( "/fortune/", function( reqt, resp ) {
  request( "http://" + www_yerkee_com + "/api/fortune",
    function( err, hdr, body ) {
      resp.json( bdy )
    })
  })
  
  app.listen( 3000, function() {
    console.log( "listening on port 3000" )
  })
