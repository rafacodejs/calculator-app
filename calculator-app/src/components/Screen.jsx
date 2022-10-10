import { useContext } from 'react';
import { CalcContext } from '../Context/CalcContext';
import { Textfit } from 'react-textfit';

const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <Textfit
      className='h-28 mb-4 px-4 py-1 bg-dimWhite rounded-[12px] shadow-2xl'
      max={70}
      mode='single'
    >
      {calc.num ? calc.num : calc.res}
    </Textfit>
  );
};

export { Screen };
