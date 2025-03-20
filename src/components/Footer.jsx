const Footer = () => {
  return (
    <div className="">
      <section class="row text-white bg-warning p-4">
        <div class="col-md-4">
          <h4 class="text-center">About Us</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo at
            nobis, harum optio deleniti minima?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            modi nulla incidunt impedit atque est assumenda exercitationem
            quibusdam, itaque maiores possimus. Quam recusandae, blanditiis unde
            quis dolor, enim vel iure, veniam cupiditate animi vitae incidunt
            nisi?
          </p>
        </div>

        <div class="col-md-4">
          <h4 class="text-center">Contact Us</h4>
          <form action="">
            <input
              type="email"
              placeholder="Enter your email"
              class="form-control"
            />
            <br />

            <textarea
              name=""
              id=""
              class="form-control"
              placeholder="leave a comment"
              rows="7"
            ></textarea>
          </form>
        </div>

        <div class="col-md-4">
          <h4 class="text-center">Stay Connected</h4>
          <br />
          <a href="https://facebook.com">
            <img src="images/fb.png" alt="" width="30px" />
          </a>
          <a href="https://wa.com">
            <img src="images/in.png" alt="" width="30px" />
          </a>
          <p class="text-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            consequuntur voluptate in quia obcaecati pariatur totam aut, facere
            quibusdam dolores!
          </p>
        </div>
      </section>
      <footer class="text-white bg-dark text-center p-2">
        <h5>Developed by D. Muturi &copy; 2025. All rights reserved</h5>
      </footer>
    </div>
  );
};

export default Footer;
