import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Header from '../components/Header';
import styles from '../styles/HomeScreen.module.css';
import readingBookImage from '../assets/images/readingbook.jpg';
import explore_button from '../assets/images/button.png';
import summary_button from '../assets/images/button2.png';
import SummaryCarousel from '../components/SummaryCarousel';
const sampleSummaries = [
    { id: 1, image: '/assets/images/sample1.jpg', title: 'Tóm tắt Truyện Cổ Tích' },
    { id: 2, image: '/assets/images/sample2.jpg', title: 'Bài Học Cuộc Sống' },
    { id: 3, image: '/assets/images/sample3.jpg', title: 'Khoa Học Vui' },
    { id: 4, image: '/assets/images/sample4.jpg', title: 'Lịch Sử Việt Nam' },
    { id: 5, image: '/assets/images/sample5.jpg', title: 'Văn Học Thiếu Nhi' },
    { id: 6, image: '/assets/images/sample6.jpg', title: 'Địa Lý Thế Giới' },
    { id: 7, image: '/assets/images/sample7.jpg', title: 'Toán Học Cơ Bản' },
];

const HomeScreen = () => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.mainContent}>
                {/* Hero Section */}
                <section className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <div className={styles.buttonContainer}>
                            <img
                                src={explore_button}
                                alt="Khám phá các bài đọc hay nhất"
                                className={styles.imageButton}
                            />
                            <img
                                src={summary_button}
                                alt="Tóm tắt ngay"
                                className={styles.imageButton1}
                            />
                        </div>
                    </div>

                    {/* Hero Image with Label */}
                    <div className={styles.heroImage}>
                        <div className={styles.heroLabel}>
                            Kho thư viện <strong>tóm tắt</strong> bài đọc bằng <strong>AI</strong> tiện lợi nhất
                        </div>
                        <img
                            src={readingBookImage}
                            alt="Children reading books"
                            className={styles.heroImageContent}
                        />
                    </div>
                </section>

                {/* Reusable Summary Carousel */}
                <SummaryCarousel
                    title="Bài đọc tiêu biểu:"
                    items={sampleSummaries}
                />

                {/* Example of reusing the component */}
                <SummaryCarousel
                    title="Nhà đóng góp tiêu biểu:"
                    items={sampleSummaries} // Replace with actual recent items
                />
            </main>
        </div>
    );
};


export default HomeScreen;
