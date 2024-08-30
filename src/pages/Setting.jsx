import { useEffect } from "react";
import SettingsLayout from "../features/settings/SettingsLayout";

function Setting() {
  useEffect(() => {
    document.title = "Settings | Configure your account settings";
  }, []);
  return (
    <main>
      <SettingsLayout />
    </main>
  );
}

export default Setting;
