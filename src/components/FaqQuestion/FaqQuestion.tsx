import { useEffect, useState } from "react";
import { IFaq } from "../../interfaces/data";
import LineWidth from "../LineWidth/LineWidth";
import styles from "./FaqQuestion.module.scss";

function FaqQuestion({ faq }: { faq: IFaq }) {
    const { question, answer } = faq;
    const [isHidden, setIsHidden] = useState(true);

    const toogleAnswer = () => {
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
            <li className={styles.faqQuestion} onClick={toogleAnswer}>
                <div className={styles.faqQuestion__container}>
                    <p className={styles.faqQuestion__question}>{question}</p>
                    <button
                        className={`${styles.faqQuestion__btn} ${
                            isHidden ? "" : styles.faqQuestion__btn_open
                        }`}
                    />
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
            </li>
            <LineWidth color="rgb(255, 255, 255)" />
        </>
    );
}

export default FaqQuestion;
