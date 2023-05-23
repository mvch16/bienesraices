import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { db } from "../services/firebase.config";

const collectionRef = collection(db, "casas");

const Todo = () => {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const getTodo = async () => {
      await getDocs(collectionRef)
        .then((todo) => {
          let todoData = todo.docs.map((doc) => ({
            ...doc.data(),
            id: "ztZeTHTj19WOkEQ64Kj9",
          }));
          setTodo(todoData);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getTodo();
  }, []);

  return (
    <>
    <div>
        <ul>
            <li>
            <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
            </li>
        </ul>
    </div>
    </>
  );
};
export default Todo;
