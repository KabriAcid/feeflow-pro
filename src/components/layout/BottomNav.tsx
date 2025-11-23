import { HomeIcon, UserGroupIcon, CreditCardIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { HomeIcon as HomeIconSolid, UserGroupIcon as UserGroupIconSolid, CreditCardIcon as CreditCardIconSolid, Bars3Icon as Bars3IconSolid } from '@heroicons/react/24/solid';
import { NavLink } from '@/components/NavLink';
import { useLocation } from 'react-router-dom';

const navItems = [
  { 
    title: 'Dashboard', 
    url: '/dashboard', 
    icon: HomeIcon,
    iconSolid: HomeIconSolid 
  },
  { 
    title: 'Students', 
    url: '/students', 
    icon: UserGroupIcon,
    iconSolid: UserGroupIconSolid 
  },
  { 
    title: 'Payments', 
    url: '/payments', 
    icon: CreditCardIcon,
    iconSolid: CreditCardIconSolid 
  },
  { 
    title: 'More', 
    url: '/nav', 
    icon: Bars3Icon,
    iconSolid: Bars3IconSolid 
  },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 safe-area-bottom">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.url || 
                          (item.url === '/dashboard' && location.pathname === '/');
          const Icon = isActive ? item.iconSolid : item.icon;
          
          return (
            <NavLink
              key={item.title}
              to={item.url}
              className="flex flex-col items-center gap-1 px-4 py-2 min-w-0 flex-1"
            >
              <Icon className={`h-6 w-6 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
              <span className={`text-xs font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                {item.title}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
