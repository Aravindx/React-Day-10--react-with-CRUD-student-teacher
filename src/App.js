import "./sb-admin-2.min.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Portal from "./Components/Portal";
import Dashboard from "./Components/Dashboard";
import { UserProvider } from "./UserContext";
import { useState } from "react";
import AddStudent from "./Components/AddStudent";
import View from "./Components/View";
import Edit from "./Components/Edit";

function App() {
  const [Student, setStudent] = useState([
    {
      id: "1",
      name: "Arun",
      gender: "Male",
      gpa: "7",
      dob: "04/06/1998",
      average: "93%",
      father: "Annadhurai",
      mother: "Unknown",
      number: "1111111111",
      job: "Govt Job",
    },
    {
      id: "2",
      name: "Sugundhan",
      gender: "Male",
      gpa: "8.1",
      dob: "17/08/1997",
      average: "81%",
      father: "Subramaniyan",
      mother: "Sumadhi",
      num: "1245678987",
      job: "Doctor",
    },
    {
      id: "3",
      name: "Divya",
      gender: "Female",
      gpa: "8.7",
      dob: "11/11/1997",
      average: "87%",
      father: "Sekar",
      mother: "uma",
      num: "9876543214",
      job: "Real Estate",
    },
    {
      id: "4",
      name: "Bala",
      gender: "Male",
      gpa: "8.4",
      dob: "15/06/1998",
      average: "84%",
      father: "Anbu",
      mother: "Unknown",
      num: "9790795432",
      job: "Business",
    },
    {
      id: "5",
      name: "Ajay",
      gender: "Male",
      gpa: "8.6",
      dob: "15/06/1999",
      average: "86%",
      father: "Prakash",
      mother: "Unknowm",
      num: "9876534981",
      job: "Govt Job",
    },
    {
      id: "6",
      name: "Pandi",
      gender: "Female",
      gpa: "8.1",
      dob: "10/10/1998",
      average: "81%",
      father: "Guna",
      mother: "Anjali",
      num: "9003876282",
      job: "Business",
    },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route
              path="/"
              element={<Login />}
              style={{ backgroundColor: "#DBF477" }}
            />
            <Route path="/portal" element={<Portal />}>
              <Route
                path="dashboard"
                element={
                  <Dashboard Student={Student} setStudent={setStudent} />
                }
              />
              <Route
                path="add"
                element={
                  <AddStudent Student={Student} setStudent={setStudent} />
                }
              />
              <Route path="view/:id" element={<View Student={Student} />} />
              <Route path="edit/:id" element={<Edit Student={Student} />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
