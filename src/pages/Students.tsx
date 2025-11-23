import { MainLayout } from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  FunnelIcon,
  PlusIcon,
  EyeIcon,
  PhoneIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatCurrency, getInitials, getAvatarColor } from '@/lib/formatters';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddStudentModal } from '@/components/modals/AddStudentModal';

export default function Students() {
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  // Mock data
  const kpis = [
    { label: 'Total Students', value: '1,247', trend: '+5%' },
    { label: 'New This Term', value: '48', trend: '+12%' },
    { label: 'Outstanding', value: '₦1.4M', trend: '-8%' },
    { label: 'Collection Rate', value: '73%', trend: '+3%' },
  ];

  const students = [
    {
      id: 1,
      name: 'Aisha Mohammed',
      admissionNo: 'AMK/2023/001',
      class: 'JSS 1A',
      category: 'Regular',
      balance: -15000,
      status: 'Owing',
      lastPayment: '2024-01-15',
      guardianPhone: '+234 803 456 7890',
    },
    {
      id: 2,
      name: 'Ibrahim Yusuf',
      admissionNo: 'AMK/2023/002',
      class: 'SSS 2B',
      category: 'Regular',
      balance: 0,
      status: 'Paid',
      lastPayment: '2024-01-20',
      guardianPhone: '+234 805 123 4567',
    },
    {
      id: 3,
      name: 'Fatima Hassan',
      admissionNo: 'AMK/2023/003',
      class: 'JSS 3C',
      category: 'Scholarship',
      balance: 0,
      status: 'Paid',
      lastPayment: '2024-01-18',
      guardianPhone: '+234 807 890 1234',
    },
    {
      id: 4,
      name: 'Usman Abdullahi',
      admissionNo: 'AMK/2023/004',
      class: 'SSS 1A',
      category: 'Regular',
      balance: -25000,
      status: 'Owing',
      lastPayment: '2023-12-20',
      guardianPhone: '+234 809 345 6789',
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, 'default' | 'secondary' | 'destructive'> = {
      'Paid': 'default',
      'Partial': 'secondary',
      'Owing': 'destructive',
    };
    return <Badge variant={variants[status] || 'default'}>{status}</Badge>;
  };

  const getClassColor = (className: string) => {
    if (className.startsWith('JSS')) return 'bg-blue-100 text-blue-700';
    if (className.startsWith('SSS')) return 'bg-purple-100 text-purple-700';
    return 'bg-gray-100 text-gray-700';
  };

  const handleViewStudent = (id: number) => {
    navigate(`/students/${id}`);
  };

  return (
    <MainLayout>
      <div className="p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Students</h1>
              <p className="text-muted-foreground">Manage student records and payments</p>
            </div>
            <Button 
              className="bg-primary hover:bg-primary/90 gap-2"
              onClick={() => setIsAddModalOpen(true)}
            >
              <PlusIcon className="h-5 w-5" />
              Add Student
            </Button>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {kpis.map((kpi, index) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg p-4 card-shadow"
              >
                <p className="text-sm text-muted-foreground mb-1">{kpi.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-bold text-foreground">{kpi.value}</h3>
                  <span className="text-sm text-success font-medium">{kpi.trend}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by name, admission number..."
                className="pl-10 bg-input-bg"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <FunnelIcon className="h-5 w-5" />
              Filters
            </Button>
          </div>
        </motion.div>

        {/* Students Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Admission No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Class</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Balance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Guardian</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-card divide-y divide-border">
                {students.map((student, index) => (
                  <motion.tr 
                    key={student.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-hover-bg transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${getAvatarColor(student.name)}`}>
                          {getInitials(student.name)}
                        </div>
                        <span className="font-medium text-foreground">{student.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{student.admissionNo}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${getClassColor(student.class)}`}>
                        {student.class}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`font-semibold ${student.balance < 0 ? 'text-destructive' : 'text-success'}`}>
                        {formatCurrency(Math.abs(student.balance))}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(student.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a href={`tel:${student.guardianPhone}`} className="text-sm text-primary hover:underline">
                        {student.guardianPhone}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleViewStudent(student.id)}
                          title="View Details"
                        >
                          <EyeIcon className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          title="Call Guardian"
                        >
                          <a href={`tel:${student.guardianPhone}`}>
                            <PhoneIcon className="h-5 w-5" />
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          title="Record Payment"
                        >
                          <CurrencyDollarIcon className="h-5 w-5" />
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <AddStudentModal open={isAddModalOpen} onOpenChange={setIsAddModalOpen} />
      </div>
    </MainLayout>
  );
}
