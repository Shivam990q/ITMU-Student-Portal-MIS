import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";

const AttendancePage = () => {
  const [selectedSection, setSelectedSection] = useState("");

  // Sample attendance data (would come from API in real app)
  const attendanceData = {
    totalClassesHeld: 45,
    totalPresent: 42,
    totalAbsent: 3,
    presentPercentage: 93.33
  };

  // Sample sections
  const sections = [
    "CS-A Section", 
    "CS-B Section", 
    "Engineering Mathematics", 
    "Data Structures",
    "Computer Networks"
  ];

  return (
    <Layout title="ITM University, Gwalior">
      <div className="p-6">
        <div className="bg-red-800 text-white p-4 mb-6 rounded-md">
          <h1 className="text-xl font-bold">Student Attendance Report</h1>
        </div>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center mb-8">
              <div className="font-medium">Section</div>
              <div className="md:col-span-3">
                <Select value={selectedSection} onValueChange={setSelectedSection}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Please Select Section" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections.map((section, index) => (
                      <SelectItem key={index} value={section}>
                        {section}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {selectedSection && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-3 bg-gray-50 text-gray-700">Total Class Held</th>
                      <th className="border p-3 bg-gray-50 text-gray-700">Total Present</th>
                      <th className="border p-3 bg-gray-50 text-gray-700">Total Absent</th>
                      <th className="border p-3 bg-gray-50 text-gray-700">Present(%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className="border p-3">{attendanceData.totalClassesHeld}</td>
                      <td className="border p-3">{attendanceData.totalPresent}</td>
                      <td className="border p-3">{attendanceData.totalAbsent}</td>
                      <td className="border p-3">{attendanceData.presentPercentage.toFixed(2)}%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            
            {!selectedSection && (
              <div className="text-center p-8 text-gray-500">
                Please select a section to view attendance data
              </div>
            )}
          </CardContent>
        </Card>
        
        {selectedSection && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Monthly Attendance Breakdown</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["January", "February", "March", "April"].map((month) => (
                  <div key={month} className="p-4 border rounded-md bg-gray-50">
                    <h3 className="font-medium text-gray-800 mb-2">{month} 2025</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Classes:</div>
                      <div className="text-right">12</div>
                      <div>Present:</div>
                      <div className="text-right">11</div>
                      <div>Absent:</div>
                      <div className="text-right">1</div>
                      <div>Percentage:</div>
                      <div className="text-right font-medium">91.67%</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default AttendancePage; 