import Image from 'next/image'
import styles from './page.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const source = {
    objectID: 'ZTF21aaqjyho',
    id: 'ZTF21aaqjyho',
    ra: 0.0,
    dec: 0.0,
    redshift: 0.0,
    summary: 'This is a fake source, bla bla bla',
    cutouts: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fweb.ipac.caltech.edu%2Fstaff%2Ffmasci%2Fztf%2Fmasci_pasadena_05.04.18.pdf&psig=AOvVaw3gqvPQ6B8KclpZOIQHVOw-&ust=1702258106371000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiit-Dbg4MDFQAAAAAdAAAAABAI',
    // feel free to use any image if you can't access the link above, it's just a placeholder image
};

export default function Home() {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className={styles.headerLeftPart}>
                    <div>
                        <FontAwesomeIcon
                            className={styles.openToolBar}
                            icon={faBars}/>
                    </div>
                    <div>
                        <Image
                            src="/GROWTH_logo.png"
                            alt="Growth Logo"
                            width={52}
                            height={50}
                            priority
                        />
                    </div>
                    <div className={styles.lineBetweenLogos}></div>
                    <div>
                        <Image
                            src="/skyportal_logo_dark.png"
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

        </main>
    )
}
