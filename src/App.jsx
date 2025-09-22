import AuthPage from "./pages/AuthPage.jsx";
import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Layout />}>
    //         <Route index element={<Index />} />
    //         {/* <Route path="cal" element={<MyCalendar/>} /> */}
    //         <Route path="contests" element={<Contests />} />
    //         <Route path="auth" element={<AuthPage />} />
    //         <Route path="profile" element={<Profile />} />
    //         <Route path="practice" element={<Practice />} />
    //         <Route path="questions" element={<QuestionsList />} />
    //         <Route path="editor/:id" element={<CodeEditor />} />
    //         <Route path="leaderboard" element={<Lead />} />
    //         <Route path="learn" element={<Learn/>} />
    //         <Route path="intern" element={<Internship/>}/>
    //         <Route path="room" element={<RoomDashboard/>}/>
    //         <Route path="room/:id" element={<RoomPage/>}/>
    //         <Route path="ai" element={<AIChatAgent/>}/>
    //         <Route path="resume" element={<ResumeAnalyzer/>}/>
    //       </Route>
    //       <Route path="/admin" element={<AdminDashboard />} />
    //     </Routes>
    //   </BrowserRouter>
    // </QueryClientProvider>

    <h1 class="bg-sky-600"> Hello Sandhya JI HoW are you Harikesh SIR fine  </h1>
  );
}

export default App;
