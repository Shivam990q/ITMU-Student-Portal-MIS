import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";

const StudentProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const initialStudentDetails = {
    name: "Shivam Gupta",
    studentId: "BETN1CS23071",
    email: "shivam.gupta@itm.edu",
    phone: "+91 8269699824",
    course: "B.Tech Computer Science",
    semester: "5th Semester",
    batch: "2023-2027",
    address: "NH-44, Bypass Turari, Gwalior, Madhya Pradesh",
    dateOfBirth: "2004-07-31",
    gender: "Male",
    fatherName: "Rajesh Gupta",
    motherName: "Sunita Gupta",
    bloodGroup: "O+",
    aadharNo: "1234 5678 9012",
    category: "General",
  };

  const [studentDetails, setStudentDetails] = useState(initialStudentDetails);
  const [formData, setFormData] = useState(initialStudentDetails);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStudentDetails(formData);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setFormData(studentDetails);
    setIsEditing(false);
  };

  return (
    <Layout title="ITM University, Gwalior">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Student Profile</h1>
          <div>
            {!isEditing ? (
              <Button 
                onClick={() => setIsEditing(true)} 
                className="bg-red-800 hover:bg-red-900"
              >
                Edit Profile
              </Button>
            ) : (
              <div className="space-x-2">
                <Button 
                  onClick={cancelEdit} 
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleSubmit} 
                  className="bg-red-800 hover:bg-red-900"
                >
                  Save Changes
                </Button>
              </div>
            )}
          </div>
        </div>

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="mb-6 bg-muted/50">
            <TabsTrigger value="personal" className="data-[state=active]:bg-red-800 data-[state=active]:text-white">Personal Information</TabsTrigger>
            <TabsTrigger value="academic" className="data-[state=active]:bg-red-800 data-[state=active]:text-white">Academic Details</TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-red-800 data-[state=active]:text-white">Documents</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="col-span-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Profile Picture</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="h-40 w-40 rounded-full bg-red-800 flex items-center justify-center text-white text-4xl">
                      {studentDetails.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {isEditing && (
                      <Button variant="outline" className="w-full">
                        Upload Photo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-1 md:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Personal Details</CardTitle>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="studentId">Student ID</Label>
                          <Input 
                            id="studentId"
                            name="studentId"
                            value={formData.studentId}
                            disabled
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dateOfBirth">Date of Birth</Label>
                          <Input 
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="gender">Gender</Label>
                          <Input 
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bloodGroup">Blood Group</Label>
                          <Input 
                            id="bloodGroup"
                            name="bloodGroup"
                            value={formData.bloodGroup}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category">Category</Label>
                          <Input 
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="address">Address</Label>
                          <Input 
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="fatherName">Father's Name</Label>
                          <Input 
                            id="fatherName"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="motherName">Mother's Name</Label>
                          <Input 
                            id="motherName"
                            name="motherName"
                            value={formData.motherName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="aadharNo">Aadhar Number</Label>
                          <Input 
                            id="aadharNo"
                            name="aadharNo"
                            value={formData.aadharNo}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Full Name</p>
                        <p className="font-medium">{studentDetails.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Student ID</p>
                        <p className="font-medium">{studentDetails.studentId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email Address</p>
                        <p className="font-medium">{studentDetails.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone Number</p>
                        <p className="font-medium">{studentDetails.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Date of Birth</p>
                        <p className="font-medium">{new Date(studentDetails.dateOfBirth).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Gender</p>
                        <p className="font-medium">{studentDetails.gender}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Blood Group</p>
                        <p className="font-medium">{studentDetails.bloodGroup}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Category</p>
                        <p className="font-medium">{studentDetails.category}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="font-medium">{studentDetails.address}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Father's Name</p>
                        <p className="font-medium">{studentDetails.fatherName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Mother's Name</p>
                        <p className="font-medium">{studentDetails.motherName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Aadhar Number</p>
                        <p className="font-medium">{studentDetails.aadharNo}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="academic">
            <Card>
              <CardHeader>
                <CardTitle>Academic Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Course</p>
                    <p className="font-medium">{studentDetails.course}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Semester</p>
                    <p className="font-medium">{studentDetails.semester}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Batch</p>
                    <p className="font-medium">{studentDetails.batch}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Enrollment Year</p>
                    <p className="font-medium">{studentDetails.batch.split('-')[0]}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Uploaded Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Aadhar Card', 'Mark Sheet', 'Passport Photo', 'Income Certificate', 'Category Certificate', 'Migration Certificate'].map((doc) => (
                      <div key={doc} className="border rounded-md p-4 flex flex-col items-center justify-center gap-2">
                        <div className="h-20 w-20 bg-muted flex items-center justify-center rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                        </div>
                        <p className="text-sm font-medium">{doc}</p>
                        {isEditing && (
                          <Button variant="outline" size="sm" className="w-full mt-2">Upload</Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default StudentProfilePage; 