<body>

  <div class="auth-page-wrapper pt-5">
    <!-- auth page bg -->
    <div class="auth-one-bg-position auth-one-bg">
      <div class="bg-overlay"></div>
    </div>

    <!-- auth page content -->
    <div class="auth-page-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center mt-sm-5 mb-4 text-white-50">
              <div>
                <a href="<?= base_url() ?>" class="d-inline-block auth-logo">
                  <img src="<?= base_url() ?>public/images/PUPLogo (1).webp" height="100    ">
                  <br>
                  <img src="<?= base_url() ?>public/images/logo-light.png" alt="" height="60">
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->

        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card mt-4">

              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <h5 class="text-primary">Forgot Password?</h5>
                  <p class="">Reset your password in myPUPQC.</p>
                  <lord-icon src="https://cdn.lordicon.com/rhvddzym.json" trigger="loop" colors="primary:#0ab39c" class="avatar-xl"></lord-icon>

                </div>

                <div class="alert alert-borderless alert-warning text-center mb-2 mx-2" role="alert">
                  Enter your email and instructions will be sent to you!
                </div>
                <div class="p-2">
                  <form id="forgotPasswordForm" class="needs-validation" novalidate>
                    <div class="mb-4">
                      <label class="form-label">Email Address</label>
                      <input type="email" class="form-control" id="email_address" name="email_address" placeholder="Enter Email Address">
                    </div>

                    <div class="text-center mt-4">
                      <button class="btn btn-success w-100" type="submit">Send Reset Link</button>
                    </div>
                  </form><!-- end form -->
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->

            <div class="mt-4 text-white text-center">
              <p class="mb-0">Wait, I remember my password... <a href="<?= base_url() ?>signin" class="fw-semibold text-white-75 text-primary text-decoration-underline"> Signin </a> </p>
            </div>

          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
    <!-- end auth page content -->

    <!-- footer -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center text-white">
              <p class="mb-0 ">&copy;
                <script>
                  document.write(new Date().getFullYear())
                </script> POLYTECHNIC UNIVERSITY OF THE PHILIPPINES - QUEZON CITY BRANCH

              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- end Footer -->
  </div>
  <!-- end auth-page-wrapper -->