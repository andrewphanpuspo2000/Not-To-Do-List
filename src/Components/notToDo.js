import React, { useState, useEffect } from "react";
import { InputField } from "./input";
import { RowTable } from "./RowTable";

export const NotToDo = () => {
  const inputPropArr = [
    {
      type: "text",
      name: "task",
      class: "form-control w-50",
      id: "formGroupExampleInput",
      placeholder: "type the input",
    },
    {
      type: "number",
      class: "form-control w-25",
      id: "number",
      name: "hr",
      placeholder: "type number",
    },
  ];

  const [activity, setActivity] = useState("");
  const [hour, setHour] = useState("");
  const [listTask, setListTask] = useState([]);
  const [badTask, setBadTask] = useState([]);

  //   let goodTask = taskArr.filter((item, i) => item.task === "task");
  //   let badTask = taskArr.filter((item, i) => item.task === "bad");

  const setActi = (event) => {
    setActivity(event.target.value);
  };
  const setHr = (event) => {
    setHour(event.target.value);
  };
  const randomId = (num = 6) => {
    const str = "qwertyuiopasdfghjklQWERTYUIOPASDGFJKLzxcvm";
    let randomID = "";
    for (let i = 0; i <= num; i++) {
      randomID += str[Math.round(Math.random() * str.length - 1)];
    }
    return randomID;
  };
  const handleForm = (event) => {
    const obj = {
      id: randomId(),
      Activity: activity,
      Hour: hour,
      Type: "task",
    };
    const arr = [...listTask, obj];

    setListTask(arr);
    console.log(listTask);
    // console.log(obj);

    event.preventDefault();
  };

  const changeType = (id, type) => {
    if (type === "bad") {
      listTask.forEach((item, i) => {
        if (item.id === id) {
          item.Type = type;
          setBadTask([...badTask, item]);
          updateTable(type);
        }
      });
    }
    if (type === "task") {
      badTask.forEach((item, i) => {
        if (item.id === id) {
          item.Type = type;
          setListTask([...listTask, item]);
          updateTable(type);
        }
      });
    }
  };
  useEffect(() => {
    console.log("This is bad task", badTask); // Log the updated value of count whenever it changes
  }, [badTask]);

  const updateTable = (type) => {
    if (type === "bad") {
      const filterGood = listTask.filter((item) => item.Type !== type);
      setListTask(filterGood);
    }
    if (type === "task") {
      const filterBad = badTask.filter((item) => item.Type !== type);
      setBadTask(filterBad);
    }
  };
  useEffect(() => {
    console.log("this is goodtask:", listTask); // Log the updated value of count whenever it changes
  }, [listTask]);

  const deleteItem = (id, valType) => {
    if (valType === "task") {
      const filterItem = listTask.filter((item) => item.id !== id);
      setListTask(filterItem);
    }
    if (valType === "bad") {
      const filterItem = badTask.filter((item) => item.id !== id);
      setBadTask(filterItem);
    }
  };
  return (
    <div className="wrapper p-5">
      <h1 className="text-center mb-5">Not to Do List</h1>
      <div className="container text-center">
        <div className="row">
          <form onSubmit={handleForm}>
            <div className="col d-flex gap-2 shadow p-3 mb-5 bg-body-tertiary rounded py-5">
              {inputPropArr.map((item, i) => (
                <InputField
                  key={i}
                  index={i}
                  type={item.type}
                  name={item.name}
                  className={item.class}
                  id={item.id}
                  placeholder={item.placeholder}
                  setActivity={setActi}
                  setHour={setHr}
                  actValue={activity}
                  hrValue={hour}
                />
              ))}

              <button type="submit" className="btn btn-primary">
                <i className="fa-solid fa-plus"></i>Add new task
              </button>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col">
            <h2>Task Entry List</h2>
            <table className="table table-striped">
              <tbody>
                {listTask.map((item, i) => (
                  <RowTable
                    key={i}
                    UniqueId={item.id}
                    Activity={item.Activity}
                    HR={item.Hour}
                    deleteItem={deleteItem}
                    changeType={changeType}
                    value="task"
                    changeTo="bad"
                    btnSuccessColor="primary"
                    arrowDirection="right"
                  />
                ))}
              </tbody>
            </table>
            <p id="totalhour"></p>
          </div>
          <div className="col">
            <h2>Bad List</h2>
            <table className="table table-striped">
              <tbody>
                {badTask.map((item, i) => (
                  <RowTable
                    key={i}
                    UniqueId={item.id}
                    Activity={item.Activity}
                    HR={item.Hour}
                    deleteItem={deleteItem}
                    changeType={changeType}
                    value="bad"
                    changeTo="task"
                    btnSuccessColor="warning"
                    arrowDirection="left"
                  />
                ))}
              </tbody>
            </table>
            <p id="savehour"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
