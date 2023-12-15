"use client"
import styles from "../styles/downloadButton.module.css"

const DownloadButton = ({source}) => {
    const handleDownload = () => {
        const jsonData = JSON.stringify(source, null, 2);
        const blob = new Blob([jsonData], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${source.id}_data.json`;
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    return (
        <div className={styles.download}>
            <button className={styles.downloadButton}
                    onClick={handleDownload}>
                Download
            </button>
        </div>
    );
};
export default DownloadButton;
