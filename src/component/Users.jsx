import React from "react";
import { useState } from "react";
import "./first.css";

export default function Users() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    {
      first_name: "Abdushukur",
      last_name: "Saidaxmedov",
      phone: +998977618445,
      count: 0,
    },
    {
      first_name: "Muhammad",
      last_name: "Abbosov",
      phone: +998977375355,
      count: count,
    },
    {
      first_name: "Abduvoris",
      last_name: "Xusniddinov",
      phone: +9987882877,
      count: count,
    },
    {
      first_name: "Asilhoja",
      last_name: "Saidaxrorov",
      phone: +9984451316,
      count: count,
    },
    {
      first_name: "Nodir",
      last_name: "Turgunbayev",
      phone: +998333373704,
      count: count,
    },
    {
      first_name: "Abdujabbor",
      last_name: "Xikmatullayev",
      phone: +998978746261,
      count: count,
    },
    {
      first_name: "Nurmuhammad",
      last_name: "Shukurullayev",
      phone: +998971234567,
      count: count,
    },
  ]);

  const deleteUsers = (index) => {
    let result = users;
    result.splice(index, 1);
    setUsers([...result]);
  };

  const increaseCount = (index) => {
    let result = users[index].count++;
    setCount(result);
  };
  const decreaseCount = (index) => {
    if (count > 1) {
      let result = users[index].count--;
      setCount(result);
    }
  };

  return (
    <div className="header_box">
      <div className="box">
        <table width={650} border={20}>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Active</th>
              <th>Count</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.phone}</td>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <td>
                    <span>
                      <button
                        onClick={() => increaseCount(index)}
                        className="btn2"
                      >
                        +
                      </button>
                      {item.count}
                      <button
                        onClick={() => decreaseCount(index)}
                        className="btn3"
                      >
                        -
                      </button>
                    </span>
                  </td>
                  <th>
                    <button onClick={() => deleteUsers(index)} className="btn">
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
