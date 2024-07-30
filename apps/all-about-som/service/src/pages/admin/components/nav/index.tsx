// Hooks
import useAdminNavigation from './hooks/useAdminNavigation';

// Typings
import { AdminNavProps } from '@pages/admin/components/nav/typings/nav';

// Utils
import { Images } from '@utils/image';
import { Button } from '@younyikim/ui';

const index = (props: AdminNavProps) => {
  const { title } = props;
  const {
    menu,
    isMenuOpen,
    setIsMenuOpen,
    handleMenuClick,
    handleServiceLinkClick,
    mutate,
  } = useAdminNavigation();

  return (
    <nav
      className={`absolute bottom-auto top-0 z-50 flex w-full cursor-pointer flex-col items-center justify-between md:max-w-[36rem] ${isMenuOpen ? 'bg-light-blue h-full' : 'h-fit bg-transparent'}`}
    >
      <div className="flex h-fit w-full items-center justify-between p-16">
        <h3 className="text-2xl font-bold">{title}</h3>
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
        className={`flex w-full flex-grow flex-col items-center justify-start p-16 transition-all ease-in-out ${isMenuOpen ? 'bg-light-blue visible h-full duration-500' : 'hidden bg-transparent duration-500'}`}
      >
        <ul className="flex flex-col gap-32">
          {menu.map(({ name, id, route }) => (
            <li
              key={id}
              className="text-2xl font-bold"
              onClick={() => handleMenuClick(route)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`${isMenuOpen ? 'bg-light-blue flex h-full w-full items-end justify-center gap-10 p-20' : 'hidden'}`}
      >
        <Button
          variant="secondary"
          size="xl"
          className="w-2/3 text-lg"
          onClick={handleServiceLinkClick}
        >
          서비스 바로가기
        </Button>
        <Button
          variant="destructive"
          size="xl"
          className="w-2/3 text-lg"
          onClick={() => mutate()}
        >
          로그아웃
        </Button>
      </div>
    </nav>
  );
};

export default index;
