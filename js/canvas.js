// export { CreateImage }

function CreateImage() {
    let pic = document.createElement( 'img' )
        pic.setAttribute( 'style', 'width: 45px, height: 30px' )
        pic.setAttribute( 'src', '../pic/dialog.png' )

    let canvas = document.getElementById("canvas");
    let ctxt = canvas.getContext("2d")
    let x = 0;
    function animation() {
       ctxt.drawImage( pic, 0, 0, 90, 60 );
       ctxt.
       x = x + 0.2;
       if ( x > 100 ) { x = 0; }
       setTimeout( animation, 1000 )
    }
    animation();
 } 

