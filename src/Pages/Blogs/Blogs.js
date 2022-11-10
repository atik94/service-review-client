import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="card  bg-neutral text-neutral-content">
        <div className="card-body items-center text-center ">
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">Difference between SQL and NoSQL</div>
            <div className="collapse-content">
              <p>
                SQL is the programming language used to interface with relational databases. (Relational databases model
                data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are
                non-relational and generally do not use SQL.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center ">
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">What is JWT, and how does it work?</div>
            <div className="collapse-content">
              <p>
                JSON Web Token is an open industry standard used to share information between two entities, usually a
                client (like your app’s frontend) and a server (your app’s backend). They contain JSON objects which
                have the information that needs to be shared. Each JWT is also signed using cryptography (hashing) to
                ensure that the JSON contents (also known as JWT claims) cannot be altered by the client or a malicious
                party.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center ">
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              What is the difference between javascript and NodeJS ?
            </div>
            <div className="collapse-content">
              <p>
                JavaScript is a simple programming language that can be used with any browser that has the JavaScript
                Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the
                JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript
                programming to be more helpful.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center ">
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              How does NodeJS handle multiple requests at the same time?
            </div>
            <div className="collapse-content">
              <p>
                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the
                concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that
                receives requests and processes them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
