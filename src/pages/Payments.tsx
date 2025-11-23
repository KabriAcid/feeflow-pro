import { MainLayout } from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function Payments() {
  return (
    <MainLayout>
      <div className="p-6 lg:p-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">Record Payment</h1>
          <p className="text-muted-foreground">Process student fee payments</p>
        </motion.div>

        <Card className="p-8 text-center">
          <p className="text-muted-foreground">Payment recording feature coming soon...</p>
        </Card>
      </div>
    </MainLayout>
  );
}
