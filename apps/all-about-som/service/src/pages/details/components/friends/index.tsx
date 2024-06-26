import { Images } from '@utils/image';

const index = () => {
  return (
    <div className="box-border flex w-full flex-col bg-black py-20">
      <h3 className="font-gulf pl-16 text-4xl text-white">FRIENDS</h3>

      <div className="box-border flex flex-1 pt-10">
        <div className="bg-yellow relative box-border flex flex-1 cursor-pointer items-center justify-center">
          <img src={Images.ttung} alt="Dog ttung Image" />
          <p className="font-gulf absolute bottom-0 text-3xl">TTUNG</p>
        </div>
        <div className="bg-green relative box-border flex flex-1 cursor-pointer items-center justify-center">
          <img src={Images.jjeko} alt="Dog jjeko Image" />
          <p className="font-gulf absolute bottom-0 text-3xl">JJEKO</p>
        </div>
        <div className="bg-yellow relative box-border flex flex-1 cursor-pointer items-center justify-center">
          <img src={Images.zio} alt="Dog zio Image" />
          <p className="font-gulf absolute bottom-0 text-3xl">ZIO</p>
        </div>
      </div>
      <div className="box-border flex flex-1">
        <div className="bg-purple relative box-border flex flex-1 cursor-pointer items-center justify-center">
          <img src={Images.bori} alt="Dog bori Image" />
          <p className="font-gulf absolute bottom-0 text-3xl">BORI</p>
        </div>
        <div className="bg-coral relative box-border flex flex-1 cursor-pointer items-center justify-center">
          <img src={Images.latte} alt="Dog latte Image" />
          <p className="font-gulf absolute bottom-0 text-3xl">LATTE</p>
        </div>
        <div className="bg-purple relative box-border flex flex-1 cursor-pointer items-center justify-center">
          <img src={Images.tori} alt="Dog tori Image" />
          <p className="font-gulf absolute bottom-0 text-3xl">TORI</p>
        </div>
      </div>
    </div>
  );
};

export default index;
