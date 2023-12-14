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
    cutouts: '/cutouts.png',
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
            <div className={styles.source}>
                <div> {/* Source Title */}
                    <h1 className={styles.title}>{source.id}</h1>
                </div>
                {/* Summary */}
                <div className={styles.sourceField}>
                    <h2>Summarize:</h2>
                    <div>
                        <p>
                            {source.summary}
                        </p>
                    </div>
                </div>
                {/* redshift */}
                <div className={styles.sourceField}>
                    <h2>Redshift:</h2>
                    <div className={styles.number}>
                        <p>{source.redshift.toFixed(1)}</p>
                    </div>
                </div>
                {/* ra */}
                <div className={styles.sourceField}>
                    <h2>RA:</h2>
                    <div className={styles.number}>
                        <p>{source.ra.toFixed(1)}</p>
                    </div>
                </div>
                {/* dec */}
                <div className={styles.sourceField}>
                    <h2>DEC:</h2>
                    <div className={styles.number}>
                        <p>{source.dec.toFixed(1)}</p>
                    </div>
                </div>
                {/* cutouts */}
                <div className={styles.cutouts}>
                    <h2>Cutouts</h2>
                    <div>
                        <Image
                            src={source.cutouts}
                            alt="Cutouts"
                            width={600}
                            height={375}
                        />
                    </div>
                    </div>
                </div>
        </main>
)
}
