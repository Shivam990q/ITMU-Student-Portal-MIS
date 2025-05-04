import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const NoDuesPage = () => {
  // Sample student data
  const studentData = {
    name: "Shivam Gupta",
    fatherName: "Rajesh Gupta",
    motherName: "Sunita Gupta",
    courseBranch: "B.Tech Computer Science",
    yearOfAdmission: "2020",
    rollNo: "BETN1CS23071",
    aadharId: "1234 5678 9012",
    panCard: "ABCDE1234F",
    bankDetails: "SBI, Branch Code: 123456",
    company: "Not Placed",
    contactInfo: "+91 9876543210, shivam.gupta@itm.edu",
    remarks: ""
  };

  // Sample departments verification data
  const departmentsData = [
    { department: "LIBRARY", date: "-x-", verifiedBy: "-x-" },
    { department: "WARDEN", date: "-x-", verifiedBy: "-x-" },
    { department: "SPORTS", date: "-x-", verifiedBy: "-x-" },
    { department: "MESS", date: "-x-", verifiedBy: "-x-" },
    { department: "HOD", date: "-x-", verifiedBy: "-x-" },
    { department: "ACCOUNT", date: "-x-", verifiedBy: "-x-" },
    { department: "DEAN", date: "-x-", verifiedBy: "-x-" },
    { department: "OFFICE", date: "-x-", verifiedBy: "-x-" },
    { department: "ALUMNI CELL", date: "-x-", verifiedBy: "-x-" }
  ];

  return (
    <Layout title="ITM University, Gwalior">
      <div className="p-6">
        <div className="bg-red-800 text-white p-4 mb-6 rounded-md">
          <h1 className="text-xl font-bold">No Dues</h1>
        </div>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="grid grid-cols-3 border-b pb-2">
                <div className="font-medium">Name of Student</div>
                <div className="text-center">:</div>
                <div>{studentData.name}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b pb-2">
                <div className="font-medium">Father's Name</div>
                <div className="text-center">:</div>
                <div>{studentData.fatherName}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b pb-2">
                <div className="font-medium">Mother's Name</div>
                <div className="text-center">:</div>
                <div>{studentData.motherName}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b pb-2">
                <div className="font-medium">Course & Branch</div>
                <div className="text-center">:</div>
                <div>{studentData.courseBranch}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b pb-2">
                <div className="font-medium">Year of Admission</div>
                <div className="text-center">:</div>
                <div>{studentData.yearOfAdmission}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b pb-2">
                <div className="font-medium">Roll No</div>
                <div className="text-center">:</div>
                <div>{studentData.rollNo}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b pb-2">
                <div className="font-medium">Aadhar ID No. with Xerox</div>
                <div className="text-center">:</div>
                <div>{studentData.aadharId}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b pb-2">
                <div className="font-medium">Pan Card No with Xerox</div>
                <div className="text-center">:</div>
                <div>{studentData.panCard}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b pb-2">
                <div className="font-medium">Bank Name Branch & A/c No</div>
                <div className="text-center">:</div>
                <div>{studentData.bankDetails}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b pb-2">
                <div className="font-medium">Company in which placed</div>
                <div className="text-center">:</div>
                <div>{studentData.company}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b pb-2">
                <div className="font-medium">Contact No & Email ID</div>
                <div className="text-center">:</div>
                <div>{studentData.contactInfo}</div>
              </div>
              
              <div className="grid grid-cols-3 border-b pb-2">
                <div className="font-medium">Remarks</div>
                <div className="text-center">:</div>
                <div>{studentData.remarks || "N/A"}</div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-3 bg-gray-50 text-gray-700 text-left">Deptt.</th>
                    <th className="border p-3 bg-gray-50 text-gray-700 text-left">Date</th>
                    <th className="border p-3 bg-gray-50 text-gray-700 text-left">Verified by</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentsData.map((dept, index) => (
                    <tr key={index}>
                      <td className="border p-3">{dept.department}</td>
                      <td className="border p-3">{dept.date}</td>
                      <td className="border p-3">{dept.verifiedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-16 text-right">
              <p>(Signature of Student)</p>
            </div>
          </CardContent>
        </Card>
        
      </div>
    </Layout>
  );
};

export default NoDuesPage; 