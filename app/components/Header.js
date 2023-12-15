import styles from "../styles/header.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Header = ({  }) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLeftPart}>
                <div>
                    <FontAwesomeIcon
                        className={styles.openToolBar}
                        icon={faBars}/>
                </div>
                <div>
                    <Image
                        src="/images/GROWTH_logo.png"
                        alt="Growth Logo"
                        width={52}
                        height={50}
                        priority
                    />
                </div>
                <div className={styles.lineBetweenLogos}></div>
                <div>
                    <Image
                        src="/images/skyportal_logo_dark.png"
                        alt="Skyportal Logo"
                        width={52}
                        height={50}
                        priority
                    />
                </div>
                <div className={styles.websiteName}>
                    <a
                        href="/"
                    >Fritz</a>
                </div>
            </div>
            <div className={styles.headerRightPart}>
                <div className={styles.actualAccount}>
                    <p className={styles.accountName}>
                        AL
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
