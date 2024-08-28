import Button from "../../ui/Button";
function UpdateData() {
  return (
    <form className="update-data-form">
      <div className="form-row">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email Address</label>
        <input type="text" id="email" />
      </div>
      <div className="form-row">
        <label htmlFor="file"> Update Avatar</label>
        <input type="file" id="file" accept="image/*" />
      </div>
      <div className="form-buttons">
        <Button type="primary">Cancel</Button>
        <Button type="secondary">Update account</Button>
      </div>
    </form>
  );
}

export default UpdateData;
