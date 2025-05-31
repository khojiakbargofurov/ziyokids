import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer bottom-0 sm:footer-horizontal footer-center bg-base-100 text-base-content py-8 ">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ZiyoKids and Khojiakbar Gofurov
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
