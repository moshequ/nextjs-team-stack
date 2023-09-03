import styles from "./page.module.css";
import * as React from "react";
import { Home as HomeIcon } from "@mui/icons-material";

export default function HomePage() {
  return (
    <main className={styles.main}>
      This is the home page <HomeIcon />
    </main>
  );
}
