const index = () => {
  return (
    <div className="box-border flex h-screen w-full flex-col bg-slate-50">
      <div className="box-border flex flex-1">
        <div className="bg-green box-border flex flex-1 items-center justify-center border border-black">
          <p className="font-gulf text-center text-6xl tracking-wide text-white">
            CAN I PET SOM?
          </p>
        </div>
        <div className="bg-purple flex-1 border border-black">2</div>
      </div>
      <div className="flex flex-1">
        <div className="bg-coral flex-1 border border-black">3</div>
        <div className="bg-pink flex-1 border border-black">4</div>
      </div>
    </div>
  );
};

export default index;
