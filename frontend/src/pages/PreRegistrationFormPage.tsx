import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";

const PreRegistrationFormPage = () => {
  const [formData, setFormData] = useState({
    studentName: "Shivam Gupta",
    rollNo: "BETN1CS23071",
    semester: "",
    email: "",
    mobile: "8269699824",
    guardianMobile: "",
    paidAmount: "",
    paymentRef: "",
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      agreeToTerms: checked
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // Here you would typically send the data to an API
    alert("Form submitted successfully!");
  };

  // Sample semester options
  const semesterOptions = [
    "1st Semester",
    "2nd Semester",
    "3rd Semester",
    "4th Semester",
    "5th Semester",
    "6th Semester",
    "7th Semester",
    "8th Semester"
  ];

  return (
    <Layout title="ITM University, Gwalior">
      <div className="p-6">
        <div className="bg-red-800 text-white p-4 mb-6 rounded-md">
          <h1 className="text-xl font-bold">Pre Registration Form</h1>
        </div>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="p-3 bg-amber-50 border border-amber-200 mb-6 rounded-md text-amber-800 text-sm">
              <p>Avoid using special characters !,@,#,$,% ^ & * ( ) " ' / \ ? &lt;&gt; etc. for hurdleless submission</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Student Name */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b pb-4">
                  <Label htmlFor="studentName" className="font-medium">
                    Student Name *
                  </Label>
                  <div className="md:col-span-2">
                    <Input 
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="text-center">:</div>
                </div>
                
                {/* Roll No */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b pb-4">
                  <Label htmlFor="rollNo" className="font-medium">
                    Rollno *
                  </Label>
                  <div className="md:col-span-2">
                    <Input 
                      id="rollNo"
                      name="rollNo"
                      value={formData.rollNo}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="text-center">:</div>
                </div>
                
                {/* Applied for Semester */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b pb-4">
                  <Label htmlFor="semester" className="font-medium">
                    Applied for Semester *
                  </Label>
                  <div className="md:col-span-2">
                    <Select 
                      value={formData.semester} 
                      onValueChange={(value) => handleSelectChange("semester", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="---Select Sem / Year---" />
                      </SelectTrigger>
                      <SelectContent>
                        {semesterOptions.map((semester) => (
                          <SelectItem key={semester} value={semester}>
                            {semester}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="text-center">:</div>
                </div>
                
                {/* Email */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b pb-4">
                  <Label htmlFor="email" className="font-medium">
                    Email *
                  </Label>
                  <div className="md:col-span-2">
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="text-center">:</div>
                </div>
                
                {/* Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b pb-4">
                  <Label htmlFor="mobile" className="font-medium">
                    Mobile *
                  </Label>
                  <div className="md:col-span-2">
                    <Input 
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="text-center">:</div>
                </div>
                
                {/* Guardian Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b pb-4">
                  <Label htmlFor="guardianMobile" className="font-medium">
                    Guardian Mobile *
                  </Label>
                  <div className="md:col-span-2">
                    <Input 
                      id="guardianMobile"
                      name="guardianMobile"
                      value={formData.guardianMobile}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="text-center">:</div>
                </div>
                
                {/* Paid Amount */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b pb-4">
                  <Label htmlFor="paidAmount" className="font-medium">
                    Paid Amount *
                  </Label>
                  <div className="md:col-span-2">
                    <Input 
                      id="paidAmount"
                      name="paidAmount"
                      value={formData.paidAmount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="text-center">:</div>
                </div>
                
                {/* Payment Reference */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b pb-4">
                  <Label htmlFor="paymentRef" className="font-medium">
                    Payment Reference Number *
                  </Label>
                  <div className="md:col-span-2">
                    <Input 
                      id="paymentRef"
                      name="paymentRef"
                      value={formData.paymentRef}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="text-center">:</div>
                </div>
                
                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2 mt-6">
                  <Checkbox 
                    id="terms" 
                    checked={formData.agreeToTerms}
                    onCheckedChange={handleCheckboxChange}
                    required
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I understand and agree to the terms and conditions
                    </label>
                    <p className="text-sm text-muted-foreground">
                      By checking this box, you agree to our terms of service and privacy policy.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-end mt-6">
                  <Button type="button" variant="outline">Cancel</Button>
                  <Button type="submit" className="bg-red-800 hover:bg-red-900">Submit</Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PreRegistrationFormPage; 