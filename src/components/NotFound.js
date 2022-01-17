import React from "react";
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <section class="section pt-5 pb-5 osahan-not-found-page">
        <div class="container">
          <div class="row">
            <div class="text-center pt-5 pb-5 col-md-12">
              <img
                src="https://osahan-eat.surge.sh/img/404.png"
                alt="404"
                class="img-fluid"
              />
              <h1 class="mt-2 mb-2">Page not found</h1>
              <p>
                Uh-oh! Looks like the page you are trying to access, doesn't{" "}
                <br />
                exist. Please start afresh.
              </p>
              <Link class="btn btn-primary btn-lg" to="/">
                GO HOME
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
