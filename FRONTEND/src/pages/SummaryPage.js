import React, { useState } from 'react';
import Header from '../components/Header';
import styles from '../styles/SummaryPage.module.css';
import pdf_icon from '../assets/images/pdf-icon.png';

const SummaryPage = () => {
    const [selectedMethod, setSelectedMethod] = useState('extract');
    const [isDragging, setIsDragging] = useState(false);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        console.log('Uploaded file:', file, 'Method:', selectedMethod);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.mainContent}>
                {/* Method Selection */}
                <div className={styles.methodContainer}>
                    <h2 className={styles.methodTitle}>Chọn phương pháp tóm tắt:</h2>
                    <div className={styles.methodButtons}>
                        <button
                            className={`${styles.methodButton} ${selectedMethod === 'extract' ? styles.active : ''}`}
                            onClick={() => setSelectedMethod('extract')}
                        >
                            Trích xuất
                        </button>
                        <button
                            className={`${styles.methodButton} ${selectedMethod === 'paraphrase' ? styles.active : ''}`}
                            onClick={() => setSelectedMethod('paraphrase')}
                        >
                            Diễn giải
                        </button>
                    </div>
                </div>

                {/* Dropzone Section */}
                <section
                    className={`${styles.dropzone} ${isDragging ? styles.dragover : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={() => setIsDragging(false)}
                >
                    <div className={styles.uploadTextContainer}>
                        <p className={styles.uploadText}>
                            Kéo và thả file PDF của bạn vào đây
                        </p>
                        <p className={styles.uploadText}>
                            hoặc nhấn để chọn file
                        </p>
                    </div>

                    <label htmlFor="file-upload" className={styles.uploadZone}>
                        <div className={styles.uploadContent}>
                            <img
                                src={pdf_icon}
                                alt="PDF Icon"
                                className={styles.pdfIcon}
                            />
                            <button className={styles.uploadButton}>
                                UPLOAD
                                <span className={styles.uploadIcon}>⬆️</span>
                            </button>
                        </div>
                    </label>
                    <input
                        type="file"
                        id="file-upload"
                        className={styles.fileInput}
                        onChange={handleFileUpload}
                    />
                </section>
            </main>
        </div>
    );
};

export default SummaryPage;
