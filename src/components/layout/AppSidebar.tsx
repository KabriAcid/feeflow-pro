import { 
  HomeIcon, 
  UserGroupIcon, 
  CreditCardIcon,
  CurrencyDollarIcon,
  DocumentChartBarIcon,
  Cog6ToothIcon,
  BanknotesIcon 
} from '@heroicons/react/24/outline';
import { NavLink } from '@/components/NavLink';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';

const mainNavItems = [
  { title: 'Dashboard', url: '/dashboard', icon: HomeIcon },
  { title: 'Students', url: '/students', icon: UserGroupIcon },
  { title: 'Payments', url: '/payments', icon: CreditCardIcon },
  { title: 'Debtors', url: '/debtors', icon: CurrencyDollarIcon },
];

const managementItems = [
  { title: 'Fee Structure', url: '/fee-structure', icon: BanknotesIcon },
  { title: 'Reports', url: '/reports', icon: DocumentChartBarIcon },
  { title: 'Settings', url: '/settings', icon: Cog6ToothIcon },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarContent>
        <div className="px-6 py-8">
          <h1 className="text-2xl font-bold text-primary">Feenix</h1>
          <p className="text-sm text-muted-foreground mt-1">Amkadamiyya School</p>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-foreground hover:bg-hover-bg rounded-lg transition-colors"
                      activeClassName="bg-primary text-primary-foreground hover:bg-primary"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-foreground hover:bg-hover-bg rounded-lg transition-colors"
                      activeClassName="bg-primary text-primary-foreground hover:bg-primary"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
