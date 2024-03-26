import { useState } from "react";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import HomeDashboard from "./pages/HomeDashboard";
import Navbar from "./components/Navbar";

const App = ({ signOut, user }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-[auto,1fr] grid-rows-1 h-screen">
        <div className="w-60">
          <Navbar signOut={signOut} />
        </div>
        <div>
          <HomeDashboard />
        </div>
      </div>
    </>
  );
};

export default withAuthenticator(App);
