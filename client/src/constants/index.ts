import images from "../assets/images/Homecards";
import apartment1 from '/apartment1.webp';
import apartment2 from '/apartment2.webp';
import apartment3 from '/apartment3.webp';

export const apartmentsData = [
  {
    id:'1',
    title: 'Huston, USA',
    description: 'Acogedor departamento de 2 ambientes con dormitorio independiente. Espaciosa sala de estar y comedor.',
    price: 92,
    image: images.depto1,
  },
  {
    id:'2',
    title: 'Hedmark, Noruega',
    description: 'Amplio y luminoso departamento de 3 ambientes, ideal para familias y profesionales.',
    price: 120,
    image: images.depto2,
  },
  {
    id:'3',
    title: 'Vesturland, Islandia',
    description: 'Encantador departamento de 1 ambiente con todo en uno: dormitorio, sala de estar y cocina integrada.',
    price: 60,
    image: images.depto3,
  },
  {
    id:'4',
    title: 'Frisia, Holanda',
    description: 'Exquisito penthouse de lujo de 2 ambientes con vistas panorámicas y terraza privada.',
    price: 200,
    image: images.depto4,
  },
  {
    id:'5',
    title: 'Buenos Aires, Argentina',
    description: 'Exclusivo departamento premium de 2 ambientes en tonos negros, elegancia y sofisticación.',
    price: 150,
    image: images.depto5,
  },
  {
    id:'6',
    title: 'Búzios, Brasil',
    description: 'Espectacular casa de 4 ambientes frente al mar, arquitectura de lujo y vistas impresionantes.',
    price: 300,
    image: images.depto6,
  },
  {
    id:'7',
    title: 'Henao, Bélgica',
    description: 'Bienvenidos al epitome del lujo y la elegancia en el corazón de Bélgica. Nuestro hotel de 6 estrellas redefine el significado de la sofisticación y la hospitalidad de clase mundial.',
    price: 220,
    image: images.depto7,
  },
  {
    id:'8',
    title: 'Santiago, Chile',
    description: 'Elegante y lujoso departamento de 2 ambientes con vista impresionante de la ciudad.',
    price: 110,
    image: images.depto8,
  },
];

export const apartments = [
  {
    id: 1,
    image: apartment1,
    info: "1 ambient apartment & terrace.",
    highlighted: "Malasia"
  },
  {
    id: 2,
    image: apartment2,
    info: "3 ambient apartment & pool.",
    highlighted: "Chicago"
  },
  {
    id: 3,
    image: apartment3,
    info: "2 ambient apartment.",
    highlighted: "Noruega"
  }
];