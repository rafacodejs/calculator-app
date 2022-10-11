const Wrapper = ({ children }) => {
  return (
    <div className='bg-dimBlack w-80 p-8 mt-16 rounded-[12px] shadow-2xl'>
      {children}
    </div>
  );
};

export { Wrapper };
