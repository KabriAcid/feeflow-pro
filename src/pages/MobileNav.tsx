import { MainLayout } from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  CurrencyDollarIcon,
  BanknotesIcon,
  DocumentChartBarIcon,
  Cog6ToothIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { NavLink } from '@/components/NavLink';

const navItems = [
  {
    title: 'Debtors',
    description: 'View students with outstanding balances',
    icon: CurrencyDollarIcon,
    url: '/debtors',
    color: 'text-red-600 bg-red-50',
  },
  {
    title: 'Fee Structure',
    description: 'Manage fee templates and categories',
    icon: BanknotesIcon,
    url: '/fee-structure',
    color: 'text-green-600 bg-green-50',
  },
  {
    title: 'Reports',
    description: 'View detailed payment reports',
    icon: DocumentChartBarIcon,
    url: '/reports',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    title: 'Settings',
    description: 'Configure system preferences',
    icon: Cog6ToothIcon,
    url: '/settings',
    color: 'text-purple-600 bg-purple-50',
  },
];

export default function MobileNav() {
  return (
    <MainLayout>
      <div className="p-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">More</h1>
          <p className="text-muted-foreground">Access additional features</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink to={item.url}>
                <div className="bg-card rounded-xl p-6 card-shadow hover-lift group">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${item.color}`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <ChevronRightIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
