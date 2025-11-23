import { MainLayout } from '@/components/layout/MainLayout';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { formatCurrency } from '@/lib/formatters';
import { 
  BanknotesIcon, 
  ClockIcon, 
  CheckCircleIcon, 
  ExclamationCircleIcon,
  PlusIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Dashboard() {
  // Mock data
  const metrics = [
    {
      title: 'Total Revenue',
      value: 4500000,
      trend: { value: 12, isPositive: true },
      icon: BanknotesIcon,
    },
    {
      title: 'Expected Revenue',
      value: 5200000,
      trend: { value: 5, isPositive: true },
      icon: ClockIcon,
    },
    {
      title: 'Amount Paid',
      value: 3800000,
      trend: { value: 18, isPositive: true },
      icon: CheckCircleIcon,
    },
    {
      title: 'Outstanding',
      value: 1400000,
      trend: { value: 8, isPositive: false },
      icon: ExclamationCircleIcon,
    },
  ];

  const collectionByClass = [
    { class: 'JSS 1', collected: 2100000, expected: 2800000 },
    { class: 'JSS 2', collected: 1950000, expected: 2600000 },
    { class: 'JSS 3', collected: 1800000, expected: 2400000 },
    { class: 'SSS 1', collected: 2200000, expected: 2900000 },
    { class: 'SSS 2', collected: 1850000, expected: 2500000 },
    { class: 'SSS 3', collected: 1700000, expected: 2300000 },
  ];

  const monthlyTrend = [
    { month: 'Sep', amount: 8500000 },
    { month: 'Oct', amount: 9200000 },
    { month: 'Nov', amount: 9800000 },
    { month: 'Dec', amount: 10100000 },
    { month: 'Jan', amount: 10600000 },
  ];

  const paymentMethods = [
    { name: 'Bank Transfer', value: 6500000, color: '#1F0318' },
    { name: 'Cash', value: 2800000, color: '#FBE2CD' },
    { name: 'Mobile Money', value: 1300000, color: '#F8F4F1' },
  ];

  const recentActivity = [
    { student: 'Aisha Mohammed', action: 'Paid ₦50,000', time: '2 mins ago', class: 'JSS 1A' },
    { student: 'Ibrahim Yusuf', action: 'Paid ₦45,000', time: '15 mins ago', class: 'SSS 2B' },
    { student: 'Fatima Hassan', action: 'Paid ₦50,000', time: '1 hour ago', class: 'JSS 3C' },
    { student: 'Usman Abdullahi', action: 'Paid ₦40,000', time: '2 hours ago', class: 'SSS 1A' },
  ];

  return (
    <MainLayout>
      <div className="p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.title}
              {...metric}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card rounded-xl p-6 card-shadow mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Collection Progress</h3>
              <p className="text-sm text-muted-foreground">73% of expected revenue collected</p>
            </div>
            <span className="text-2xl font-bold text-primary">73%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '73%' }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
              className="h-full bg-gradient-violet rounded-full"
            />
          </div>
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Collection by Class</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={collectionByClass}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="class" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => formatCurrency(value)}
                  />
                  <Bar dataKey="collected" fill="hsl(var(--primary))" name="Collected" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="expected" fill="hsl(var(--muted))" name="Expected" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Monthly Collection Trend</h3>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={monthlyTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => formatCurrency(value)}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', r: 5 }}
                    name="Collections"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </div>

        {/* Payment Methods Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Payment Methods Distribution</h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={paymentMethods}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {paymentMethods.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value: number) => formatCurrency(value)} 
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-hover-bg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {activity.student.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{activity.student}</p>
                        <p className="text-sm text-muted-foreground">{activity.action} • {activity.class}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{activity.time}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start gap-2 bg-primary hover:bg-primary/90" size="lg">
                  <PlusIcon className="h-5 w-5" />
                  Record Payment
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2" size="lg">
                  <PlusIcon className="h-5 w-5" />
                  Add Student
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2" size="lg">
                  <EyeIcon className="h-5 w-5" />
                  View Debtors
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
