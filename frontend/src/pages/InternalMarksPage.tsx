import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";

const InternalMarksPage = () => {
  const [selectedExam, setSelectedExam] = useState("");
  const [selectedComponent, setSelectedComponent] = useState("");

  // Sample data for the student
  const studentRollNo = "BETN1CS23071";

  // Sample data for exams and components
  const exams = [
    "Mid Term Examination",
    "End Term Examination",
    "Practical Examination"
  ];

  const components = [
    "Theory",
    "Practical",
    "Project",
    "Viva"
  ];

  // Sample marks data
  const marksData = [
    { subjectCode: "CS301", marks: 85 },
    { subjectCode: "CS302", marks: 78 },
    { subjectCode: "CS303", marks: 92 },
    { subjectCode: "CS304", marks: 81 },
    { subjectCode: "CS305", marks: 88 }
  ];

  return (
    <Layout title="ITM University, Gwalior">
      <div className="p-6">
        <div className="bg-red-800 text-white p-4 mb-6 rounded-md">
          <h1 className="text-xl font-bold">Internal Marks</h1>
        </div>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4 mb-8">
              <div>
                <Label htmlFor="rollNo" className="font-medium block mb-2">Roll No.</Label>
                <Input 
                  id="rollNo"
                  value={studentRollNo}
                  className="bg-gray-50"
                  readOnly
                />
              </div>
              
              <div>
                <Label htmlFor="selectExam" className="font-medium block mb-2">
                  Select Exam<span className="text-red-500">*</span>
                </Label>
                <Select 
                  value={selectedExam} 
                  onValueChange={setSelectedExam}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Please Select Exam" />
                  </SelectTrigger>
                  <SelectContent>
                    {exams.map((exam) => (
                      <SelectItem key={exam} value={exam}>
                        {exam}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="component" className="font-medium block mb-2">
                  Component<span className="text-red-500">*</span>
                </Label>
                <Select 
                  value={selectedComponent} 
                  onValueChange={setSelectedComponent}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Please Select Component" />
                  </SelectTrigger>
                  <SelectContent>
                    {components.map((component) => (
                      <SelectItem key={component} value={component}>
                        {component}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {selectedExam && selectedComponent ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-3 bg-gray-50 text-gray-700 text-left">Subject Code</th>
                      <th className="border p-3 bg-gray-50 text-gray-700 text-left">Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marksData.map((subject) => (
                      <tr key={subject.subjectCode}>
                        <td className="border p-3">{subject.subjectCode}</td>
                        <td className="border p-3">{subject.marks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center p-8 text-gray-500">
                Please select an exam and component to view marks.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default InternalMarksPage; 