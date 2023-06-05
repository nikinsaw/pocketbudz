import { Calendar, momentLocalizer } from "react-big-calendar";

import moment from "moment";
import { useMemo, useState } from "react";

// import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./BigCalendarComponent.styles.css";

const localizer = momentLocalizer(moment);

const BigCalendarComponent = () => {
  const [events, setEvents] = useState([
    {
      start: moment("2023-06-04T10:00:00").toDate(),
      end: moment("2023-06-04T11:00:00").toDate(),
      title: "32,500",
      transactionType: "income",
    },
    {
      start: moment("2023-06-04T10:00:00").toDate(),
      end: moment("2023-06-04T11:00:00").toDate(),
      title: "500",
      transactionType: "expense",
    },
    {
      start: moment("2023-06-04T10:00:00").toDate(),
      end: moment("2023-06-04T11:00:00").toDate(),
      title: "200",
      transactionType: "transfer",
    },
    {
      start: moment("2023-06-05T10:00:00").toDate(),
      end: moment("2023-06-05T11:00:00").toDate(),
      title: "32,500",
      transactionType: "income",
    },
    {
      start: moment("2023-06-05T10:00:00").toDate(),
      end: moment("2023-06-05T11:00:00").toDate(),
      title: "500",
      transactionType: "expense",
    },
    {
      start: moment("2023-06-05T10:00:00").toDate(),
      end: moment("2023-06-05T11:00:00").toDate(),
      title: "200",
      transactionType: "transfer",
    },
  ]);

  const components = useMemo(
    () => ({
      eventTimeRangeFormat: (props) => {
        console.log(props);
      },

      event: ({ event }) => {
        const eventType = event?.transactionType;
        switch (eventType) {
          case "income":
            return (
              <div style={{ color: "#03ac13", backgroundColor: "#03ac1311" }}>
                {event.title}
              </div>
            );
          case "expense":
            return (
              <div style={{ color: "#d0312d", backgroundColor: "#d0312d11" }}>
                {event.title}
              </div>
            );
          case "transfer":
            return (
              <div style={{ color: "#888", background: "#aaa1" }}>
                {event.title}
              </div>
            );
          default:
            return <div>{event.title}</div>;
        }
      },
    }),
    []
  );

  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultView="month"
        events={events}
        components={components}
        style={{
          height: "75vh",
          margin: "auto",
          marginTop: "10px",
          borderRadius: "5px",
        }}
        // eventPropGetter={(event) => {
        //   let newStyle = {
        //     backgroundColor: "white",
        //     color: "black",
        //     borderRadius: "0px",
        //     border: "none",
        //     fontWeight: "400",
        //     fontSize: "13px",
        //   };

        //   if (event.isIncome) {
        //     newStyle.color = "darkgreen";
        //   }

        //   if (event.isExpense) {
        //     newStyle.color = "red";
        //   }

        //   return {
        //     className: "",
        //     style: newStyle,
        //   };
        // }}
      />
    </div>
  );
};
export default BigCalendarComponent;
