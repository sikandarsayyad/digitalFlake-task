import "./App.css";
import React from "react";
import SigninPage from "./component/SigninPage";
import { Route, Routes } from "react-router-dom";
import MainPage from "./component/MainPage";
import Error from "./component/Error";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
