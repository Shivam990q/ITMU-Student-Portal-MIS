import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { toast } from "sonner";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // For demo purposes, we'll accept any credentials
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Login successful!");
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gray-50">
      {/* Background circles */}
      <div className="absolute -left-64 -bottom-32 w-[600px] h-[600px] rounded-full" 
           style={{background: "radial-gradient(circle, rgba(255, 90, 95, 0.9) 0%, rgba(255, 90, 95, 0) 70%)"}}></div>
      <div className="absolute -right-80 -top-40 w-[500px] h-[500px] rounded-full" 
           style={{background: "radial-gradient(circle, rgba(255, 90, 95, 0.4) 0%, rgba(255, 90, 95, 0) 70%)"}}></div>
      <div className="absolute right-20 bottom-20 w-[300px] h-[300px] rounded-full" 
           style={{background: "radial-gradient(circle, rgba(255, 90, 95, 0.3) 0%, rgba(255, 90, 95, 0) 70%)"}}></div>
           
      {/* Enhanced header with gradient and better styling */}
      <header className="bg-gradient-to-r from-white to-gray-50 p-5 shadow-md border-b border-gray-200 relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/placeholder.svg" alt="ITM University Logo" className="w-12 h-12" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-3xl text-red-600 tracking-tight">ITM UNIVERSITY</h1>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs font-medium text-gray-500">GWALIOR・MP・INDIA</span>
              </div>
              <span className="text-[11px] italic text-red-400 mt-1">" CELEBRATING DREAMS "</span>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-[#6b46c1] font-bold text-3xl">प्रबंध</h2>
            <p className="text-amber-500 text-xs font-medium">THE INFORMATION MANAGER</p>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-8">
          {/* Left side with title */}
          <div className="w-full md:w-1/2 md:pr-12">
            <div className="relative">
              <h1 className="text-5xl font-bold mb-4 text-gray-900 relative">
                MIS Login
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-red-600"></span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md">Welcome to ITM University's Management Information System</p>
              
              {/* Small decorative circles */}
              <div className="absolute -left-8 -bottom-4 w-16 h-16 rounded-full" 
                   style={{background: "radial-gradient(circle, rgba(255, 90, 95, 0.7) 0%, rgba(255, 90, 95, 0) 70%)"}}></div>
            </div>
            
            {/* Enhanced Campus Updates */}
            <div className="mt-12 p-6 bg-white rounded-lg shadow-md border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 rounded-full bg-red-50 opacity-50"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="inline-block w-3 h-8 bg-red-600 mr-3"></span>
                Campus Updates
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2 bg-gray-50 p-2 rounded-md transition-all hover:bg-gray-100">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span>New scholarship opportunities available</span>
                </li>
                <li className="flex items-center gap-2 bg-gray-50 p-2 rounded-md transition-all hover:bg-gray-100">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span>National level hackathon registrations open</span>
                </li>
                <li className="flex items-center gap-2 bg-gray-50 p-2 rounded-md transition-all hover:bg-gray-100">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span>Summer internship applications due next week</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right side with login form - enhanced styling */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-300"></div>
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-red-50 opacity-50"></div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="inline-block w-2 h-6 bg-red-600 mr-3"></span>
                Instructions
              </h2>
              <ul className="space-y-2 list-none pl-0 mb-6 text-sm text-gray-600">
                {[
                  "Do not save/share your password.",
                  "In case unable to login please clean your system/phone cache.",
                  "Register your Mobile No & Email id.",
                  "Please change your password within 30 days for security reasons.",
                  "Please register your mobile no and DOB for getting quick updates."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 py-1">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs mt-0.5">{index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2 py-1">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs mt-0.5">6</span>
                  <span>Click <a href="#" className="text-red-500 hover:underline font-medium">here</a> to pay your fee online through Credit/Debit Card & Net banking.</span>
                </li>
                <li className="flex items-start gap-2 py-1">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs mt-0.5">7</span>
                  <span>Click <a href="#" className="text-red-500 hover:underline font-medium">here</a> to get the details about FAQ - By Student</span>
                </li>
                <li className="flex items-start gap-2 py-1">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs mt-0.5">8</span>
                  <span>Click <a href="#" className="text-red-500 hover:underline font-medium">here</a> to visit ITM University, Gwalior website.</span>
                </li>
              </ul>
              
              <form onSubmit={handleLogin}>
                <div className="space-y-4">
                  <div className="relative">
                    <Input 
                      type="text" 
                      placeholder="Enter Email or Roll No" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="border border-gray-300 rounded-md py-2 pl-10 pr-4 w-full focus:border-red-500 focus:ring focus:ring-red-200"
                      required
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </span>
                  </div>
                  
                  <div className="relative">
                    <Input 
                      type="password" 
                      placeholder="Enter Password or DOB" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border border-gray-300 rounded-md py-2 pl-10 pr-4 w-full focus:border-red-500 focus:ring focus:ring-red-200"
                      required
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </span>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md transition-colors relative overflow-hidden group"
                    disabled={isLoading}
                  >
                    <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
                    {isLoading ? "Logging in..." : "LOGIN"}
                  </Button>
                </div>
              </form>
              
              <div className="flex justify-between mt-4 text-sm">
                <a href="#" className="text-red-500 hover:underline font-medium">Don't have an account?</a>
                <a href="#" className="text-red-500 hover:underline font-medium">Forgot your password?</a>
              </div>
              
              <div className="mt-6 pt-4 border-t text-sm text-gray-600">
                <p className="font-medium">For Tech Support:-</p>
                <p className="mt-1">Mail to: <a href="mailto:erp@itmuniversity.ac.in" className="text-red-500 hover:underline font-medium">erp@itmuniversity.ac.in</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
