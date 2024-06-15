import { IFaq } from "../../../interfaces/data";
import LineWidth from "../../Atoms/LineWidth/LineWidth";
import FaqQuestion from "../../Molecules/FaqQuestion/FaqQuestion";
import styles from "./Faq.module.scss";

const faqData: IFaq[] = [
    {
        id: 1,
        question: "Question 1",
        answer: "Long answer to the first question",
    },
    {
        id: 2,
        question: "Question 2",
        answer: "Long answer to the first question",
    },
];

function Faq() {
    return (
        <section className={styles.faq} id="faq-id">
            <div className={styles.faq__container}>
                <h2 className={styles.faq__title}>FAQ</h2>
                <LineWidth color="#fff" />
                <ul>
                    {faqData.map((faq) => (
                        <FaqQuestion faq={faq} key={faq.id} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Faq;
