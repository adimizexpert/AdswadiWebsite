import React from 'react';

const BootstrapTest: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Bootstrap Component Test</h5>
              <p className="card-text">
                This is a Bootstrap card component working alongside Tailwind CSS.
                If you can see this styled card, Bootstrap is successfully integrated!
              </p>
              <button className="btn btn-primary">Bootstrap Button</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Success!</h4>
            <p>
              Bootstrap and Tailwind are working together without conflicts.
              You can now use Bootstrap components for new features.
            </p>
            <hr />
            <p className="mb-0">
              This alert uses Bootstrap classes while your existing site uses Tailwind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootstrapTest;
