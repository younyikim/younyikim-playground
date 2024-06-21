// Hooks
import useNavigation from '@components/nav/hooks/useNavigation';

// Utils
import { Images } from '@utils/image';

// Typings
import { NavProps } from '@components/nav/typings/nav';

const index = (props: NavProps) => {
  const { locationRef } = props;
  const { menu, isMenuOpen, setIsMenuOpen, handleMenuClick } = useNavigation({
    locationRef,
  });

  return (
    <nav
      className={`absolute bottom-auto top-0 z-50 flex h-full w-full cursor-pointer flex-col items-center justify-between md:max-w-[36rem]`}
    >
      <div className="flex h-fit w-full items-center justify-between p-16">
        <div>
          <img src={Images.logo} alt="Logo" />
        </div>
        <div
          className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-black shadow-[0.2rem_0.2rem_black]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <img src={Images.close} width={30} height={30} alt="Menu Close" />
          ) : (
            <img
              src={Images.menu}
              width={30}
              height={30}
              alt="Menu Hamburger"
            />
          )}
        </div>
      </div>
      <div
        className={`flex w-full flex-grow flex-col items-center justify-start p-16 transition-all ease-in-out ${isMenuOpen ? 'opacity bg-pink h-full duration-500' : 'opacity-0 duration-500'}`}
      >
        <ul className="flex flex-col gap-32">
          {menu.map(({ name, id }) => (
            <li
              key={id}
              className="menu-li"
              onClick={() => handleMenuClick(id)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default index;
