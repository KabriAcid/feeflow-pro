import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { UserIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

interface AddStudentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddStudentModal({ open, onOpenChange }: AddStudentModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Add New Student</DialogTitle>
        </DialogHeader>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <UserIcon className="h-5 w-5 text-primary" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Enter full name" required />
              </div>
              <div>
                <Label htmlFor="admissionNo">Admission Number</Label>
                <Input id="admissionNo" placeholder="AMK/2024/XXX" required />
              </div>
              <div>
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" required />
              </div>
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AcademicCapIcon className="h-5 w-5 text-primary" />
              Academic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="class">Class</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jss1a">JSS 1A</SelectItem>
                    <SelectItem value="jss1b">JSS 1B</SelectItem>
                    <SelectItem value="jss2a">JSS 2A</SelectItem>
                    <SelectItem value="sss1a">SSS 1A</SelectItem>
                    <SelectItem value="sss2b">SSS 2B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="category">Fee Category</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="regular">Regular</SelectItem>
                    <SelectItem value="scholarship">Scholarship</SelectItem>
                    <SelectItem value="indigent">Indigent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Guardian Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <UserIcon className="h-5 w-5 text-primary" />
              Guardian Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="guardianName">Guardian Name</Label>
                <Input id="guardianName" placeholder="Enter guardian name" required />
              </div>
              <div>
                <Label htmlFor="guardianPhone">
                  <PhoneIcon className="h-4 w-4 inline mr-1" />
                  Phone Number
                </Label>
                <Input id="guardianPhone" type="tel" placeholder="+234 XXX XXX XXXX" required />
              </div>
              <div>
                <Label htmlFor="guardianEmail">
                  <EnvelopeIcon className="h-4 w-4 inline mr-1" />
                  Email (Optional)
                </Label>
                <Input id="guardianEmail" type="email" placeholder="guardian@example.com" />
              </div>
              <div>
                <Label htmlFor="address">
                  <MapPinIcon className="h-4 w-4 inline mr-1" />
                  Address
                </Label>
                <Input id="address" placeholder="Enter address" required />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Add Student
            </Button>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}
