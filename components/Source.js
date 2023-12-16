"use client"
import styles from "../styles/source.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileScreen} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import DownloadButton from "@/components/DownloadButton";

function Source ({ source }) {
    return (
        <div className={styles.source}>
            <div className={styles.sourceTitleAndDate}>
                {/* Source Title */}
                <div className={styles.sourceTitle}>
                    <FontAwesomeIcon
                        className={styles.sourceTitleIconPhone}
                        icon={faMobileScreen}/>
                    <h1>{source.id}</h1>
                    <FontAwesomeIcon
                        className={styles.sourceTitleIconStar}
                        icon={faStar}/>
                </div>
                <div>
                    <em>{source.updateDate}</em>
                </div>
            </div>
            {/*Summary*/}
            <div className={styles.sourceField}>
                <h2>Summarize:</h2>
                <div>
                    <p>
                        {source.summary}
                    </p>
                </div>
            </div>
            {/*redshift*/}
            <div className={styles.sourceField}>
                <h2>Redshift:</h2>
                <div className={styles.number}>
                    <p>{source.redshift.toFixed(1)}</p>
                </div>
            </div>
            {/*ra*/}
            <div className={styles.sourceField}>
                <h2>RA:</h2>
                <div className={styles.number}>
                    <p>{source.ra.toFixed(1)}</p>
                </div>
            </div>
            {/*dec*/}
            <div className={styles.sourceField}>
                <h2>DEC:</h2>
                <div className={styles.number}>
                    <p>{source.dec.toFixed(1)}</p>
                </div>
            </div>
            {/*cutouts*/}
            <div className={styles.cutouts}>
                <h2>Cutouts</h2>
                <div className={styles.cutoutsImage}>
                    <Image
                        src={source.cutouts}
                        alt="Cutouts"
                        width={600}
                        height={375}
                    />
                </div>
            </div>
            {/*Download button*/}
            <DownloadButton source={source}/>
        </div>
    );
}

export default Source;

