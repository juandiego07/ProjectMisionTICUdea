import { Fragment } from "react";

export default function Banner( {text} ) {
    return (
      <Fragment>
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <p className="text-primary module-title">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}
