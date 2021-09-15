import ImgFeature1 from '@/assets/features/feature-icon.jpeg';
import ImgFeature2 from '@/assets/features/feature-icon2.jpeg';
import ImgFeature3 from '@/assets/features/feature-icon3.jpeg';
import ImgFeature4 from '@/assets/features/feature-icon4.jpeg';

import ImgFace1 from '@/assets/faces/face-1.png';
import ImgFace2 from '@/assets/faces/face-2.png';
import ImgFace3 from '@/assets/faces/face-3.png';

export const features_mock = [
  {
    id: 'feature-1',
    img: ImgFeature1,
    title: 'Financiamiento Directo',
    description:
      'Pensado en empresas que necesiten financiar sus cuentas por cobrar o una alternativa al factoring.',
    link: '#',
  },
  {
    id: 'feature-2',
    img: ImgFeature2,
    title: 'Pronto Pago',
    description:
      'Similar al Financiamiento Directo pero sin retención, sin costos adicionales por mora y por el 100% de tu factura.',
    link: '#',
  },
  {
    id: 'feature-3',
    img: ImgFeature3,
    title: 'Crédito de capital',
    description:
      'Para aquellos que buscan potenciar su negocio financiando ordenes de compra o inversión en crecimiento.',
    link: '#',
  },
  {
    id: 'feature-4',
    img: ImgFeature4,
    title: 'Confirming',
    description:
      'Pensado para Grandes Empresas y Corporativos que necesiten extender el plazo de sus cuentas por pagar.',
    link: '#',
  },
];

export const testimonials_mock = [
  {
    id: '1',
    fullname: 'Andrés Rosales',
    avatar: ImgFace1,
    job_title: 'Gerente general de Sacer Spa',
    testimonial: {
      title: 'La mejor experiencia',
      stars: 5,
      text: `“En un principio habíamos pensado en acudir a algún banco, pero el problema es que necesitábamos una serie de documentos y trámites, pero no nos daba el tiempo, por eso también estamos muy agradecidos con Xepelin, porque confiaron en nosotros. Gracias a esta alternativa de financiamiento comenzamos a tener mas flujo, lo que nos permitió pagar sueldos, cotizaciones e impuestos al día, además de comprar materiales.”\nCon tan solo 7 meses de funcionamiento a toda máquina, la empresa de soluciones de acero SACER ha sabido cómo lidiar con las dificultades que conlleva el emprender con un negocio de manera autónoma`,
    },
  },
  {
    id: '2',
    fullname: 'Carlos Zapata',
    avatar: ImgFace2,
    job_title: 'Gerente general de Zapata Ltda',
    testimonial: {
      title: '',
      stars: 5,
      text: '',
    },
  },
  {
    id: '3',
    fullname: 'Leonardo Moncada',
    avatar: ImgFace3,
    job_title: 'Ing. y Montajes Cerro Bramador Spa',
    testimonial: {
      title: '',
      stars: 5,
      text: '',
    },
  },
];
