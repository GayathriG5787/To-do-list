import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
    const [items, setItems] = useState(
      [
        {
          id:1,
          checked:true,
          item:"Practice Coding"
        },
        {
          id:2,
          checked: false,
          item:"Play Cricket"
        },
        {
          id:3,
          checked: false,
          item: "Read About AI"
        }
    ]);

    const handleCheck = (id) => {
      const listItems = items.map((item) => item.id ===id ? {...item,checked: !item.checked} : item)
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id!==id)
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify(listItems))
    }

  return (
    <main>
      {(items.length) ? (
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input
             type="checkbox"
             onChange={() => handleCheck(item.id)}
             checked = {item.checked}
              />
            <label
              style={(item.checked)? {textDecoration: 'line-through'} : null}
              onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
            <FaTrashAlt 
              role='button'
              onClick={() => handleDelete(item.id)}
              tabIndex='0'
            />
          </li>
        ))}
      </ul>
      ) : (
        <p style={{marginTop: '2rem'}}>Your list is Empty</p>
      )}
    </main>
  )
}

export default Content