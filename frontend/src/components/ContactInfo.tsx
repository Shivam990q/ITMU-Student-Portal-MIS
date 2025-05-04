
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactInfo = () => {
  const contacts = [
    {
      name: "Dr. Ranjeet Singh Tomar",
      position: "Director",
      mobile: "9425117644",
      email: "deanacademics1@itmuniversity.ac.in",
    },
    {
      name: "Dr. Sonia Johri",
      position: "Dean Academics",
      mobile: "9617794484",
      email: "deanacademics2@itmuniversity.ac.in",
    },
    {
      name: "Dr. Anand Kumar Pandy",
      position: "DSW",
      mobile: "9977245495",
      email: "dsw@itmuniversity.ac.in",
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Important Contact Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <div key={index} className="border-b pb-2 last:border-0">
              <p className="font-medium">{contact.name}</p>
              <p className="text-sm text-muted-foreground">{contact.position}</p>
              <p className="text-sm">
                <span className="font-medium">Mobile:</span> {contact.mobile}
              </p>
              <p className="text-sm">
                <span className="font-medium">Email:</span>{" "}
                <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                  {contact.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
