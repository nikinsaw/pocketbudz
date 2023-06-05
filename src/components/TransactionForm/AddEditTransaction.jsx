import { useCallback, useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import "./AddEditTransaction.styles.css";
import FormField from "../Form/FormField";
import { useDispatch, useSelector } from "react-redux";
import { saveTransactionDetails } from "../../store/Actions";

const AddEditTransaction = () => {
  const {
    transactionDetails: {
      type,
      title,
      amount,
      date,
      time,
      category,
      account,
      note,
    },
  } = useSelector((state) => state);

  const [localState, setLocalState] = useState({
    type,
    title,
    amount,
    date,
    time,
    category,
    account,
    note,
  });
  const dispatch = useDispatch();
  const onSubmitForm = useCallback(
    async (e) => {
      e.preventDefault();
      const { type, title, amount, date, time, category, account, note } =
        localState;
      const transactionDetails = {
        type,
        title,
        amount,
        date,
        time,
        category,
        account,
        note,
      };
      dispatch(saveTransactionDetails(transactionDetails));
    },
    [dispatch, localState]
  );

  console.log(type, title, amount, date, time, category, account, note);
  const onChange = useCallback((e) => {
    switch (e.target.id) {
      case "title":
        setLocalState((old) => ({ ...old, title: e.target.value }));
        break;
      case "amount":
        setLocalState((old) => ({ ...old, amount: e.target.value }));
        break;
      case "date":
        setLocalState((old) => ({ ...old, date: e.target.value }));
        break;
      case "time":
        setLocalState((old) => ({ ...old, time: e.target.value }));
        break;
      case "category":
        setLocalState((old) => ({ ...old, category: e.target.value }));
        break;
      case "account":
        setLocalState((old) => ({ ...old, account: e.target.value }));
        break;
      case "note":
        setLocalState((old) => ({ ...old, note: e.target.value }));
        break;
      default:
        break;
    }
  }, []);

  const onTransactionTypeClicked = (type) => (e) => {
    e.preventDefault();
    setLocalState((old) => ({ ...old, type }));
  };

  return (
    <>
      <div className="transaction-detail__content">
        <form className="transaction-detail__form" onSubmit={onSubmitForm}>
          <div className="transaction-detail__form__header">
            <button
              className="transaction-detail__transaction-type expense"
              onClick={onTransactionTypeClicked("expense")}
            >
              Expense
            </button>
            <button
              className="transaction-detail__transaction-type income"
              onClick={onTransactionTypeClicked("income")}
            >
              Income
            </button>

            <button
              className="transaction-detail__transaction-type transfer"
              onClick={onTransactionTypeClicked("transfer")}
            >
              Transfer
            </button>
          </div>
          <FormField
            label="Title"
            type="text"
            id="title"
            value={title}
            onChange={onChange}
          />
          <FormField
            label="Amount"
            type="number"
            id="amount"
            value={amount}
            onChange={onChange}
          />
          <FormField
            label="Date"
            type="date"
            id="date"
            value={date}
            onChange={onChange}
          />
          <FormField
            label="Time"
            type="time"
            id="time"
            value={time}
            onChange={onChange}
          />
          <FormField
            label="Note"
            type="text"
            id="note"
            value={note}
            onChange={onChange}
          />
          <FormField
            label="Category"
            type="text"
            id="category"
            value={category}
            onChange={onChange}
          />
          <FormField
            label="Account"
            type="text"
            id="account"
            value={account}
            onChange={onChange}
          />
        </form>
        <button className="add-button">
          <HiPlusCircle color="orange" size="2.5em" />
        </button>
      </div>
    </>
  );
};

export default AddEditTransaction;
