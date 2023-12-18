"use client"
import styles from "../styles/downloadButton.module.css"

const DownloadButton = ({source}) => {
    const handleDownload = () => {
        // create the JSON string with the value to download
        const jsonData = JSON.stringify(source, null, 2);
        // create blob object to download
        const blob = new Blob([jsonData], {type: 'application/json'});
        // create the url to access the blob object
        const url = URL.createObjectURL(blob);
        // create 'a' element
        const a = document.createElement('a');
        // add the url to the blob
        a.href = url;
        // name de download file
        a.download = `${source.id}_data.json`;
        // click on the 'a' element
        a.click();
        // remove it and revoke the created url
        a.remove();
        URL.revokeObjectURL(url);
    };

    return (
        <div className={styles.download}>
            {/* On click execute the handleDownload */}
            <button className={styles.downloadButton}
                    onClick={handleDownload}>
                Download
            </button>
        </div>
    );
};
export default DownloadButton;
