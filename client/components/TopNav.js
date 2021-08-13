import { Menu } from 'antd';
import Link from 'next/link';
import { AiOutlineAppstore, AiOutlineLogin } from 'react-icons/ai';

const { Item } = Menu;

const TopNav = () => {
  return (
    <Menu mode='horizontal'>
      <div className=''>
        <Item icon={<AiOutlineAppstore />}>
          <Link href='/'>
            <a>App</a>
          </Link>
        </Item>
      </div>
      <div>
        <Item icon={<AiOutlineLogin />}>
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </Item>
      </div>
    </Menu>
  );
};
export default TopNav;
