import CheckImg from "../../images/icon-thank-you.svg";
import s from "./LastPage.module.scss";

function LastPage() {
  return (
    <div className={s.container}>
      <img src={CheckImg} alt="thank you" width={"80"} height={"80"} className={s.image} />
      <h1 className={s.title}>Thank you!</h1>
      <p className={s.text}>
        Thanks for confirming your subscription! We hope you have fun using our platform If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
}

export { LastPage };
