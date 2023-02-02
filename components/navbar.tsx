import React from "react";

import styles from "./navbar.module.scss";
import type { NextPage } from "next";

const Navbar: NextPage = (props) => {
    return (
        <div className={styles["component"]}>
            <h1>Asterki</h1>
        </div>
    );
};

export default Navbar;
