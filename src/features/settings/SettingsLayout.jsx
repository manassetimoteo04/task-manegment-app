import BoxHeader from "./BoxHeader";
import SettingsHeader from "./SettingsHeader";
import SettsBox from "./SettsBox";

import UserProfile from "./UserProfile";

function SettingsLayout() {
  return (
    <section>
      <SettingsHeader />
      <SettsBox>
        <BoxHeader>My Profile</BoxHeader>
        <UserProfile />
      </SettsBox>
    </section>
  );
}

export default SettingsLayout;
