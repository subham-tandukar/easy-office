import React, { useContext } from "react";
import { VscCalendar } from "react-icons/vsc";
import { FaUser } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const todayDate = new Date().toLocaleDateString();

const employee = [
  {
    id: 1,
    number: 100,
  },
  {
    id: 2,
    number: 100,
  },
  {
    id: 3,
    number: 100,
  },
  {
    id: 4,
    number: 100,
  },
];

const Employee = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="uk-flex uk-flex-between uk-flex-wrap uk-flex-middle head">
        <div>
          <p className="uk-text-bold" style={theme}>Welcome!</p>
        </div>

        <div>
          <p style={theme}>
            <VscCalendar /> {todayDate} | Fiscal Year: 2079-2080
          </p>
        </div>
      </div>

      <div className="total-employee uk-grid uk-child-width-1-4 uk-grid-match uk-margin-medium-top">
        {employee.map((props) => {
          const { id, number } = props;
          return (
            <div key={id}>
              <div className="total-employee-box">
                <div className="icon">
                  <FaUser color="#0049ae" size="2rem" />
                </div>
                <div>
                  <h3>Total Employee</h3>
                  <p>{number}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Employee;
