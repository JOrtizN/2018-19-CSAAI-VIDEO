function main()
{
  console.log("Probando...")
  d = document.getElementById('display1')
  video1 = document.getElementById('video1')
  video1.src = "circo.mp4"
  video2 = document.getElementById("video2")
  video2.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video3 = document.getElementById("video3")
  video3.src = "piano.mp4"
  play = document.getElementById("play")
//-- Establecer el tamaño del vídeo
  video1.width = 200;
  video1.height= 100;
  video2.width = 200;
  video2.height= 100;
  video3.width = 200;
  video3.height= 100;

  play.onclick = () => {
    console.log("Comenzamos!")}

  video1.onmouseover = () => {
    console.log("Mouse over video1!!")
    //MUSICCCC
    video1.muted = false;
    console.log("Musica video1!!")
  }
  video1.onmouseout = () => {
    console.log("Mouse out video1!!")
    //MUSICCCC
    video1.muted = true;
    console.log("Musica video1!!")
  }
  video2.onmouseover = () => {
    console.log("Mouse over video2!!")
    //MUSICCCC
    video2.muted = false;
    console.log("Musica video2!!")
  }
  video2.onmouseout = () => {
    console.log("Mouse out video2!!")
    //MUSICCCC
    video2.muted = true;
    console.log("Musica video2!!")
  }
  video3.onmouseover = () => {
    console.log("Mouse over video3!!")
    //MUSICCCC
    video3.muted = false;
    console.log("Musica video3!!")
  }
  video3.onmouseout = () => {
    console.log("Mouse OUT video3!!")
    //MUSICCCC
    video3.muted = true;
    console.log("Musica video3!!")
  }

  v = document.getElementById('display')
  v.width = 600;
  v.height= 300;


  ver1 = document.getElementById('play1')
  ver1.onclick = () => {
    console.log("Ver!")
    v.src = video1.src
    v.currentTime = video1.currentTime;
    hora = setInterval(hora, 100);
    borde();
    }
   //-- Boton de Play
 ver2 = document.getElementById('play2')

 //-- Al apretar el boton de ver video
 ver2.onclick = () => {
   console.log("Ver!")
  //-- Indicar la fuente del vídeo
  v.src = video2.src
  v.currentTime = video2.currentTime;
  hora = setInterval(hora, 100);
  borde();
  }
   //-- Boton de Play
 ver3 = document.getElementById('play3')

 //-- Al apretar el boton de ver video
 ver3.onclick = () => {
   console.log("Ver!")
  //-- Indicar la fuente del vídeo
  v.src = video3.src
  v.currentTime = video3.currentTime;
  hora = setInterval(hora, 100);
  borde();
  }

  t = document.getElementById('time')
  function hora() {
    vtime = v.currentTime;
    h = Math.floor( vtime / 3600 );
    m = Math.floor( (vtime % 3600) / 60 );
    s = Math.floor(vtime % 60);
    time = h + ":" + m + ":" + s;
    t.innerHTML = time;
  }
  function borde() {
    if (v.src == video1.src){
      video1.style.borderWidth = "thick";
      video2.style.borderWidth = "thin";
      video3.style.borderWidth = "thin";
    }
    else if (v.src == video2.src) {
      video2.style.borderWidth = "thick";
      video1.style.borderWidth = "thin";
      video3.style.borderWidth = "thin";
    }
    else if (v.src == video3.src) {
      video3.style.borderWidth = "thick";
      video2.style.borderWidth = "thin";
      video1.style.borderWidth = "thin";
    }
    else {
      console.log("estará empezando");
    }
  }
}
