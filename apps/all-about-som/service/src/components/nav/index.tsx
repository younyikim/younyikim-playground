// Utils
import { Images } from '@utils/image';

const index = () => {
  return (
    <nav className="absolute bottom-auto top-0 flex h-fit w-full items-center justify-between bg-transparent p-16">
      <div>
        <img src={Images.logo} alt="Logo" />
      </div>
      <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-black shadow-[0.2rem_0.2rem_black]">
        <img src={Images.menu} alt="Menu Hamburger" />
      </div>
    </nav>
  );
};

export default index;
