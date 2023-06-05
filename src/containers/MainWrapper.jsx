// the main wrapper component
import AddEditTransaction from "../components/TransactionForm/AddEditTransaction";
import Header from "../components/Header";
import "./MainWrapper.styles.css";
import BigCalendarComponent from "../components/CalendarComponent/BigCalendarComponent";
function MainWrapper() {
  return (
    <>
      <Header
        value={
          <>
            PocketBudz
            <br /> <span>Your personal budget buddy!</span>
          </>
        }
      />
      <div className="main-content__container">
        <BigCalendarComponent />
        <AddEditTransaction />
        <AddEditTransaction />
      </div>
    </>
  );
}

export default MainWrapper;
