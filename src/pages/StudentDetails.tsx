import { MainLayout } from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CalendarIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  UserIcon,
  PrinterIcon,
  DocumentArrowDownIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatCurrency, getInitials, getAvatarColor } from '@/lib/formatters';

export default function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - would come from API
  const student = {
    id: 1,
    name: 'Aisha Mohammed',
    admissionNo: 'AMK/2023/001',
    class: 'JSS 1A',
    category: 'Regular',
    balance: -15000,
    status: 'Owing',
    age: 13,
    dob: '2011-03-15',
    joinDate: '2023-09-01',
    guardianName: 'Alhaji Mohammed Ibrahim',
    guardianPhone: '+234 803 456 7890',
    guardianEmail: 'mohammed@example.com',
    address: '12 School Road, Jalingo, Taraba State',
  };

  const paymentHistory = [
    { date: '2024-01-15', amount: 25000, method: 'Bank Transfer', reference: 'TRX123456', status: 'Completed' },
    { date: '2023-12-10', amount: 20000, method: 'Cash', reference: 'CASH001', status: 'Completed' },
    { date: '2023-11-05', amount: 15000, method: 'Bank Transfer', reference: 'TRX098765', status: 'Completed' },
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

  return (
    <MainLayout>
      <div className="p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/students')}
          className="mb-6 gap-2"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Back to Students
        </Button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-lg p-8 card-shadow mb-6"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center font-bold text-2xl ${getAvatarColor(student.name)}`}>
                {getInitials(student.name)}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{student.name}</h1>
                <p className="text-muted-foreground mb-2">{student.admissionNo}</p>
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${getClassColor(student.class)}`}>
                    {student.class}
                  </span>
                  {getStatusBadge(student.status)}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">Current Balance</p>
              <p className={`text-3xl font-bold ${student.balance < 0 ? 'text-destructive' : 'text-success'}`}>
                {formatCurrency(Math.abs(student.balance))}
              </p>
              {student.balance < 0 && <p className="text-sm text-destructive">Outstanding</p>}
            </div>
          </div>
        </motion.div>

        {/* Info Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
        >
          <Card className="p-6 hover-lift">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <CalendarIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Join Date</p>
                <p className="text-lg font-semibold">{new Date(student.joinDate).toLocaleDateString()}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover-lift">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <AcademicCapIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Class</p>
                <p className="text-lg font-semibold">{student.class}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover-lift">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <UserIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Guardian</p>
                <p className="text-lg font-semibold">{student.guardianName}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover-lift">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <CurrencyDollarIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Fee Category</p>
                <p className="text-lg font-semibold">{student.category}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs defaultValue="overview" className="space-y-6">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="payments">Payment History</TabsTrigger>
                <TabsTrigger value="contact">Contact Info</TabsTrigger>
              </TabsList>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <PrinterIcon className="h-4 w-4" />
                  Print
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <DocumentArrowDownIcon className="h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            <TabsContent value="overview" className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Student Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Date of Birth</p>
                    <p className="font-medium">{new Date(student.dob).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Age</p>
                    <p className="font-medium">{student.age} years</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Admission Number</p>
                    <p className="font-medium">{student.admissionNo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Current Class</p>
                    <p className="font-medium">{student.class}</p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="payments" className="space-y-4">
              <Card>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Method</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Reference</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {paymentHistory.map((payment, index) => (
                        <tr key={index} className="hover:bg-hover-bg transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{new Date(payment.date).toLocaleDateString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap font-semibold text-success">{formatCurrency(payment.amount)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{payment.method}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">{payment.reference}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge variant="default">{payment.status}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Guardian Contact</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Name</p>
                      <p className="font-medium">{student.guardianName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Phone Number</p>
                      <div className="flex gap-2">
                        <Button asChild variant="outline" size="sm" className="gap-2">
                          <a href={`tel:${student.guardianPhone}`}>
                            <PhoneIcon className="h-4 w-4" />
                            Call
                          </a>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="gap-2">
                          <a href={`https://wa.me/${student.guardianPhone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                            <PhoneIcon className="h-4 w-4" />
                            WhatsApp
                          </a>
                        </Button>
                      </div>
                      <p className="text-sm mt-2">{student.guardianPhone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a href={`mailto:${student.guardianEmail}`} className="text-primary hover:underline flex items-center gap-2">
                        <EnvelopeIcon className="h-4 w-4" />
                        {student.guardianEmail}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Address</h3>
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="h-5 w-5 text-primary mt-1" />
                    <p className="text-muted-foreground">{student.address}</p>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </MainLayout>
  );
}
