function ViewApplication() {
  return (
    <div className="container w-75">
      <ViewComponent  />
      <div className="row">
        <div className="col-4">hi</div>
        <div className="col-8">hello</div>
      </div>
    </div>
  );
}

const ViewComponent = ({ header, data }) => {
  return (
    <div className="row">
      <div className="col-4">header</div>
      <div className="col-8">data</div>
    </div>
  );
};
export default ViewApplication;
