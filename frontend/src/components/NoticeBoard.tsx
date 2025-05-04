
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NoticeBoard = () => {
  const notices = [
    {
      title: "2nd Mid-Term Time Table 2025 April",
      date: "2025-04-04 15:37:56",
      link: "#",
    },
    {
      title: "2nd Mid-Term Time Table 2025 April",
      date: "2025-04-04 15:36:50",
      link: "#",
    },
    {
      title: "2nd Mid-Term Time Table 2025 April",
      date: "2025-04-04 15:36:06",
      link: "#",
    },
    {
      title: "Online Examination Registration for 6th Semester",
      date: "2025-04-02 10:15:22",
      link: "#",
    },
    {
      title: "Workshop on AI and Machine Learning",
      date: "2025-04-01 09:30:00",
      link: "#",
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center justify-between">
          <span>Notices</span>
          <a href="#" className="text-primary text-sm font-normal hover:underline">
            View All
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notices.map((notice, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-2 last:border-0">
              <div>
                <p className="font-medium">{notice.title}</p>
                <p className="text-sm text-muted-foreground">{notice.date}</p>
              </div>
              <a href={notice.link} className="text-primary hover:underline text-sm">
                View
              </a>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NoticeBoard;
