import BoxHeader from "./BoxHeader";
import SettingsHeader from "./SettingsHeader";
import SettsBox from "./SettsBox";
import UpdateData from "./UpdateData";
import UpdatePassword from "./UpdatePassword";

function SettingsLayout() {
  return (
    <section>
      <SettingsHeader />
      <SettsBox>
        <BoxHeader>Update personal data</BoxHeader>
        <UpdateData />
      </SettsBox>
      <SettsBox>
        <BoxHeader>Update personal data</BoxHeader>
        <UpdatePassword />
      </SettsBox>
    </section>
  );
}

export default SettingsLayout;
