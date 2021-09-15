import { RECORD_STATES } from '@/constants';
import getSimulator from '@/utils/getSimulator';
import { features_mock } from '@/utils/mocks';
import { useEffect, useState } from 'react';
import Spinner from '@/components/shared/Spinner';
import Feature from './Feature';

export default function Features() {
  const [features, setFeatures] = useState(RECORD_STATES.LOADING);

  useEffect(() => {
    getSimulator(features_mock).then((data) => {
      setFeatures(data);
    });
  }, []);

  return (
    <div>
      <h2>¿Cómo lo hacemos realidad?</h2>
      <p>
        Nuestro modelo de riesgos evalúa en segundos una operación, lo que nos
        permite financiar en el mismo día.
      </p>
      <div>
        {features === RECORD_STATES.LOADING ? (
          <Spinner />
        ) : (
          features.map((item) => <Feature key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
}
