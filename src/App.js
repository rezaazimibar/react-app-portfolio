import { useState } from "react";
import MainLayout from "./components/layouts/MinLayout";
import SideBar from "./components/Slider";
import ContentContainer from "./components/ContentContainer";

const App = () => {
  const [value, setValue] = useState(0);
  const handleChange = (value, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <MainLayout>
        <SideBar value={value} handleChange={handleChange} />
        <ContentContainer />
      </MainLayout>
    </>
  );
};

export default App;
