import Button from "../../ui/Button";
function UpdatePassword() {
  return (
    <form className="update-data-form">
      <div className="form-row">
        <label htmlFor="last-pass">Last Password</label>
        <input type="password" id="last-pass" />
      </div>
      <div className="form-row">
        <label htmlFor="email">New Password</label>
        <input type="password" id="email" />
      </div>
      <div className="form-row">
        <label htmlFor="email">Confirm Password</label>
        <input type="password" id="email" />
      </div>

      <div className="form-buttons">
        <Button type="primary">Cancel</Button>
        <Button type="secondary">Change Password</Button>
      </div>
    </form>
  );
}

export default UpdatePassword;
