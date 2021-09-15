import { RECORD_STATES, SELECTED_STATES } from '@/constants';
import getSimulator from '@/utils/getSimulator';
import { testimonials_mock } from '@/utils/mocks';
import { useEffect, useState } from 'react';
import Spinner from '@/components/shared/Spinner';
import TestimonialCard from './TestimonialCard';
import TestimonailDetails from './TestimonialDetails';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(RECORD_STATES.LOADING);
  const [selectedIndex, setSelectedIndex] = useState(SELECTED_STATES.ANY);

  useEffect(() => {
    getSimulator(testimonials_mock).then((data) => {
      setTestimonials(data);
    });
  }, []);

  const onCardClick = (e, index) => {
    e.preventDefault();
    setSelectedIndex(index);
  };

  return (
    <div>
      <h2>¿Qué dicen nuestros clientes?</h2>
      <p>
        La Fintech chilena especializada en servicios financieros para pequeñas
        y medianas empresas en Latinoamérica.
      </p>
      {testimonials === RECORD_STATES.LOADING ? (
        <Spinner />
      ) : (
        <div>
          <div>
            {testimonials.map((item, index) => (
              <TestimonialCard
                key={item.id}
                {...item}
                onClick={(e) => onCardClick(e, index)}
              />
            ))}
          </div>

          <TestimonailDetails {...testimonials[selectedIndex].testimonial} />
        </div>
      )}
    </div>
  );
}
