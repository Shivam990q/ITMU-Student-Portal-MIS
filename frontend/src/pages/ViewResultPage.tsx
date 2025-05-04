import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const ViewResultPage = () => {
  // Sample regular exam results data
  const regularResults = [
    { 
      id: "5004", 
      description: "B.Tech./B.Tech(Int.) I Sem. Regular Exam. Dec.2023 (Batch-2023)"
    },
    { 
      id: "5166", 
      description: "B.Tech/B.Tech(Int.) II Sem June 2024(Batch-2023)"
    },
    { 
      id: "5444", 
      description: "B.Tech(Ag/ME/Ce/EE/EC/Cs/Dsml/AIML/Cyber Forensic III Sem Regular Exam Dec-2024 (Batch-2023)"
    }
  ];

  // This would normally come from an API call
  const [exResults, setExResults] = useState([]);

  const handleViewResult = (id: string) => {
    console.log(`Viewing result for ID: ${id}`);
    // In a real application, you would navigate to a detailed result page or open a modal
  };

  return (
    <Layout title="ITM University, Gwalior">
      <div className="p-6">
        <div className="bg-red-800 text-white p-4 mb-6 rounded-md">
          <h1 className="text-xl font-bold">Result</h1>
        </div>
        
        <Card className="mb-8">
          <CardContent className="p-0">
            <div className="bg-red-800 text-white p-3 font-medium">
              Result View (REGULAR)
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {regularResults.map((result) => (
                    <tr key={result.id} className="border-b">
                      <td className="border p-4 w-20 text-center">{result.id}</td>
                      <td className="border p-4">{result.description}</td>
                      <td className="border p-4 w-40">
                        <Button 
                          variant="link" 
                          className="text-blue-600 hover:text-blue-800"
                          onClick={() => handleViewResult(result.id)}
                        >
                          View Result
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardContent className="p-0">
            <div className="bg-gray-800 text-white p-3 font-medium text-center">
              RESULT VIEW (EX)
            </div>
            
            {exResults.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {exResults.map((result: any) => (
                      <tr key={result.id} className="border-b">
                        <td className="border p-4 w-20 text-center">{result.id}</td>
                        <td className="border p-4">{result.description}</td>
                        <td className="border p-4 w-40">
                          <Button 
                            variant="link" 
                            className="text-blue-600 hover:text-blue-800"
                            onClick={() => handleViewResult(result.id)}
                          >
                            View Result
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-10 text-center text-gray-500">
                No EX results available at this time
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ViewResultPage; 