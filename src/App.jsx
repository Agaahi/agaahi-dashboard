import { useState } from "react";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import HomeDashboard from "./pages/HomeDashboard";
import Navbar from "./components/Navbar";

const App = ({ signOut, user }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-1 gap-2 h-screen">
        <div className="w-60">
          <Navbar signOut={signOut} />
        </div>
      </div>
    </>
  );
};

export default withAuthenticator(App);
