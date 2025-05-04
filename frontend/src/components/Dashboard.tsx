import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NoticeBoard from "./NoticeBoard";
import ContactInfo from "./ContactInfo";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const studentDetails = {
    name: "Shivam Gupta",
    studentId: "BETN1CS23071",
    course: "B.Tech Computer Science",
    semester: "5th Semester",
    batch: "2023-2027",
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome, {studentDetails.name}!</h1>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">
            Student ID: {studentDetails.studentId}
          </p>
          <p className="text-sm text-muted-foreground">{studentDetails.course}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Student Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center py-4">
              <div className="h-24 w-24 rounded-full bg-primary flex items-center justify-center text-white text-2xl">
                {studentDetails.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <div className="space-y-2">
              <p><span className="font-medium">Name:</span> {studentDetails.name}</p>
              <p><span className="font-medium">ID:</span> {studentDetails.studentId}</p>
              <p><span className="font-medium">Course:</span> {studentDetails.course}</p>
              <p><span className="font-medium">Semester:</span> {studentDetails.semester}</p>
              <p><span className="font-medium">Batch:</span> {studentDetails.batch}</p>
            </div>
            <div className="mt-4">
              <Link to="/student-profile" className="text-red-800 hover:underline text-sm font-medium">Update Profile</Link>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Update: Aadhar/Mobile/Bank A/c",
                "No Dues",
                "No Dues Form",
                "MIS App Download",
                "T&P Upcoming Companies List",
                "Hostel Form Download",
                "Bus Form Download",
                "Navigation Book",
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 bg-muted rounded-md hover:bg-muted/80 text-center text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <NoticeBoard />
        </div>
        <div>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
