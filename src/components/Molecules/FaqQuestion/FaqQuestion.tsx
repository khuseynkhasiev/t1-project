import { useEffect, useState, memo } from "react";
import { IFaq } from "../../../interfaces/data";
import LineWidth from "../../Atoms/LineWidth/LineWidth";
import styles from "./FaqQuestion.module.scss";

const FaqQuestion = memo(({ faq }: { faq: IFaq }) => {
    const { question, answer } = faq;
    const [isHidden, setIsHidden] = useState(true);

    const toggleAnswer = () => {
        setIsHidden((prev) => !prev);
    };

    // временное решение для соотвествия макету(раскрыл первый вопрос)
    useEffect(() => {
        if (faq.id === 1) {
            setIsHidden(false);
        }
    }, [faq]);

    return (
        <>
            <li className={styles.faqQuestion}>
                <button
                    className={styles.faqQuestion__btnLi}
                    onClick={toggleAnswer}
                >
                    <div className={styles.faqQuestion__container}>
                        <p className={styles.faqQuestion__question}>
                            {question}
                        </p>
                        <button
                            className={`${styles.faqQuestion__btn} ${
                                isHidden ? "" : styles.faqQuestion__btn_open
                            }`}
                            aria-label="open or close answer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                className={styles.faqQuestion__icon}
                            >
                                <path
                                    d="M12.5 0V25M0 12.5H25"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>
                    <p
                        className={`${styles.faqQuestion__answer} ${
                            isHidden
                                ? styles.faqQuestion__answer_hidden
                                : styles.faqQuestion__answer_visible
                        }`}
                    >
                        {answer}
                    </p>
                </button>
            </li>
            <LineWidth color="rgb(255, 255, 255)" />
        </>
    );
});

export default FaqQuestion;
