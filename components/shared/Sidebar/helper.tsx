import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

interface RenderLinksProps extends React.ButtonHTMLAttributes<HTMLLIElement> {
  links: typeof navLinks;
  activeClassname?: string;
  activeImageClassname?: string;
}

export const RenderLinks = ({ links, className, activeClassname, activeImageClassname }: RenderLinksProps) => {
  const path = usePathname();
  return links.map(link => 
    <li key={link.route} className={cn(className, `${link.route === path ? activeClassname : '' }`)}>
      <Link className='sidebar-link cursor-pointer' href={link.route}>
        <Image src={link.icon} alt={'logo'} width={24} height={24} className={cn(link.route === path && activeImageClassname)} />
        {link.label}
      </Link>
    </li>
  )
};