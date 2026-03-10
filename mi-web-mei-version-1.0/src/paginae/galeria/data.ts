export interface Detalle {
  id: number;
  nomen: string;
  imago: string;
  imagines: string[];
  descriptione: string;
  categoria: "retratos" | "carteleria" | "comic" | "diseno";
}

export const detalles: Detalle[] = [

  // Retratos
  {
    id: 0,
    nomen: "Daniela",
    imago: "retrato-daniela-corregido.png",
    imagines:["retrato-daniela-corregido.png", "referencia-daniela.jpg", "daniela-proceso.JPEG"] ,
    descriptione: "Retrato realizado por encargo en técnica mixta, combinando acuarelas y lápices de colores.",
    categoria: "retratos"
  },

  {
    id: 1,
    nomen: "Mamá",
    imago: "mama-boli-cerca.png",
    imagines:["mama-boli-cerca.png", "mama-proceso1.JPEG", "mama-proceso3.JPEG", "mama-proceso2.JPEG", "mama-referencia.JPEG"], 
    descriptione: "Retrato de mi madre, hecho en mi sketchbook personal. El único material empleado fue este bolígrafo de diez colores, que de hecho me regaló ella, con el que fui realizando finas líneas hasta conseguir los tonos de su piel.",
    categoria: "retratos"
  },
  
  {
    id: 2,
    nomen: "Cumpleaños",
    imago: "mama-boli-cerca.png",
    imagines:["mama-digital.PNG", "cumpleanos-referencia.jpg"],
    descriptione: "Retrato digital de mi madre, mi hermano y yo por el cumpleaños de mi madre.",
    categoria: "retratos"
  },
  
  {
    id: 3,
    nomen: "Virgen",
    imago: "virgen-boli.png",
    imagines:["virgen-boli.png"] ,
    descriptione: "Retrato rápido de la figura de la virgen hecho con un bolígrafo rojo. Realizado en el sketchbook para la asignatura de Fundamentos del dibujo y de la anatomía de 1º de Diseño y Tecnologías Creativas.",
    categoria: "retratos"
  },

   { 
    id: 4,
    nomen: "Avó",
    imago: "avo-gouache.png",
    imagines:["avo-gouache.png", "avo-proceso1.JPEG", "avo-referencia.png"] ,
    descriptione: "Retrato de mi abuelo organizando la biblioteca, pintado con gouache. Todavía no está finalizado.",
    categoria: "retratos"
  },
   
  //Carteles
  {
    id: 5, 
    nomen: "Comparte tu color",
    imago: "cartel-trans.jpg",
    imagines:["cartel-trans.jpg", "MUPI 1 FOTO.jpg", "MUPI 2 FOTO.jpg", "MUPI 3 FOTO.jpg"] ,
    descriptione: "Cartel y mupis realizados para la campaña 'Comparte tu color', el tercer proyecto transversal del grado de Diseño y Tecnologías Creativas. La campaña pretende animar tanto a jóvenes como a mayores a establecer vínculos intergeneracionales, mostrando que todos somos únicos sin importar la edad.",
    categoria: "carteleria"
  },
  
  {
    id: 6,
    nomen: "Lujuria I",
    imago: "lujuria-foto.png",
    imagines:["lujuria-foto.png"] ,
    descriptione: "Trabajo para la asignatura de Elementos del diseño de 2º de Diseño y Tecnologías Creativas, en colaboración con Cristina Caro. Es una propuesta de cartel fotográfico para la obra de teatro 'Siete', de Alejandra Winkler. Representa el pecado de la lujuria.",
    categoria: "carteleria"
  },

  {
    id: 7,
    nomen: "Lujuria II",
    imago: "lujuria-geometrico.jpg",
    imagines:["lujuria-geometrico.jpg"] ,
    descriptione: "Trabajo para la asignatura de Elementos del diseño de 2º de Diseño y Tecnologías Creativas, en colaboración con Cristina Caro. Es una propuesta de cartel tipográfico para la obra de teatro 'Siete', de Alejandra Winkler. Representa el pecado de la lujuria.",
    categoria: "carteleria"
  },
  
  { 
    id: 8,
    nomen: "Ollos azuis",
    imago: "ollos-azuis.png",
    imagines:["ollos-azuis.png"] ,
    descriptione: "Propuesta de cartel realizada para el cortometraje 'Ollos azuis' (Ojos azules), de Luca Rodríguez, Raquel Díaz y Carla Montes. Fue un proyecto de 2º de bachillerato en el IES Valadares.",
    categoria: "carteleria"
  },
  
  //Cómic
   
  { 
    id: 9,
    nomen: "E o teu pelo?",
    imago: "comic.png",
    imagines:["comic.png"] ,
    descriptione: "Pequeña historia de cómo mi abuelo perdió su pelo (o eso me hizo pensar él). Fue un trabajo de la asignatura Ilustración, lenguajes y técnicas.", 
    categoria: "comic"
  },
  
  //juego
  { 
    id: 10,
    nomen: "IN:SOUL",
    imago: "juego-completo.JPG",
    imagines:["juego-completo.JPG", "juego-cenital.JPG", "juego-caja-abierta.JPG", "juego-cerca.JPG", "juego-mano.JPG" ] ,
    descriptione: "IN:SOUL es una propuesta de juego de mesa para el segundo proyecto transversal del grado. Basado en la teoría del mapa del alma del psicoanalista Carl Jung, IN:SOUL pretende animar a aquellos que lo jueguen a reflexionar sobre sí mismos y su estado de salud mental, así como a conocer mejor al resto de participantes.",
    categoria: "diseno"
  },
];

