function main()
{
  console.log("Probando...")

  v = document.getElementById('video1')
  v.width = 200;
  v.height= 100;
  v.onmouseover = () => {
    console.log("Mouse over video1!!")
    //MUSICCCC
  }
  ver1 = document.getElementById('play1')
  ver1.onclick = () => {
    console.log("Ver!")
    v.src = "video-src-01-robot.mp4"
}
  console.log("Video 02...")
 //-- Obtener el elemento de video
 video2 = document.getElementById("video2")
 video2.onmouseover = () => {
   console.log("Mouse over video2!!")
   //MUSICCCC
 }
 //-- Establecer el tamaño del vídeo
 video2.width = 200;
 video2.height= 100;
   //-- Boton de Play
 ver2 = document.getElementById('play2')

 //-- Al apretar el boton de ver video
 ver2.onclick = () => {
   console.log("Ver!")

  //-- Indicar la fuente del vídeo
  video2.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  }
}
