import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { db } from "../../services/firebase.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faRuler } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faSquareParking } from "@fortawesome/free-solid-svg-icons";
import { faBathtub } from "@fortawesome/free-solid-svg-icons";
import house from "./../../images/test.jpg";

import "./../Houses/Houses.css";

const collectionRef = collection(db, "casas");

const Houses = () => {
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
      <body>
        <div class="py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="card">
                  <div class="card-block">
                    <div>
                      <img src={house} style={{ width: "100%" }} />
                    </div>
                    <h1 class="card-title custom">San Isidro, Heredia</h1>
                    <h2 class="card-title custom">$100.000</h2>
                    <p class="card-text p-y-1">
                      Casa de 1 planta que cuenta con....
                    </p>
                    <div className="features-container">
                      <ul className="features-list">
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faRuler} />
                          <span>5</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faBed} />
                          <span>4</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faSquareParking} />
                          <span>3</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faBathtub} />
                          <span>5</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-block">
                    <img src={house} style={{ width: "100%" }} />
                    <h1 class="card-title custom">San Isidro, Heredia</h1>
                    <h2 class="card-title custom">$100.000</h2>
                    <p class="card-text p-y-1">
                      Casa de 1 planta que cuenta con....
                    </p>
                    <div className="features-container">
                      <ul className="features-list">
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faRuler} />
                          <span>5</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faBed} />
                          <span>4</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faSquareParking} />
                          <span>3</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faBathtub} />
                          <span>5</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-block">
                    <img src={house} style={{ width: "100%" }} />
                    <h1 class="card-title custom">San Isidro, Heredia</h1>
                    <h2 class="card-title custom">$100.000</h2>
                    <p class="card-text p-y-1">
                      Casa de 1 planta que cuenta con....
                    </p>
                    <div className="features-container">
                      <ul className="features-list">
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faRuler} />
                          <span>5</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faBed} />
                          <span>4</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faSquareParking} />
                          <span>3</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faBathtub} />
                          <span>5</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-md-4">
                <div class="card">
                  <div class="card-block">
                    <img src={house} style={{ width: "100%" }} />
                    <h1 class="card-title custom">San Isidro, Heredia</h1>
                    <h2 class="card-title custom">$100.000</h2>
                    <p class="card-text p-y-1">
                      Casa de 1 planta que cuenta con....
                    </p>
                    <div className="features-container">
                      <ul className="features-list">
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faRuler} />
                          <span>5</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faBed} />
                          <span>4</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faSquareParking} />
                          <span>3</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faBathtub} />
                          <span>5</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-block">
                    <img src={house} style={{ width: "100%" }} />
                    <h1 class="card-title custom">San Isidro, Heredia</h1>
                    <h2 class="card-title custom">$100.000</h2>
                    <p class="card-text p-y-1">
                      Casa de 1 planta que cuenta con....
                    </p>
                    <div className="features-container">
                      <ul className="features-list">
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faRuler} />
                          <span>5</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faBed} />
                          <span>4</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faSquareParking} />
                          <span>3</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faBathtub} />
                          <span>5</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-block">
                    <img src={house} style={{ width: "100%" }} />
                    <h1 class="card-title custom">San Isidro, Heredia</h1>
                    <h2 class="card-title custom">$100.000</h2>
                    <p class="card-text p-y-1">
                      Casa de 1 planta que cuenta con....
                    </p>
                    <div className="features-container">
                      <ul className="features-list">
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faRuler} />
                          <span>5</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faBed} />
                          <span>4</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faSquareParking} />
                          <span>3</span>
                        </li>
                        <li className="feature-item">
                          <FontAwesomeIcon icon={faBathtub} />
                          <span>5</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
        <script src="https://pingendo.com/assets/bootstrap/bootstrap-4.0.0-alpha.6.min.js"></script>
      </body>
    </>
  );
};
export default Houses;
