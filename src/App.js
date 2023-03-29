import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [element, setElemet] = useState([]);
  const [showElement, setShowElemet] = useState([]);
  let newelements = [...element];
  for (let i = 0; i < 10000; i++) {
    newelements.push({ id: i, body: `the body of : ${i}` });
  }

  let createItems = (e, start, end) => {
    let newValue = [];
    for (let i = start; i < end; i++) {
      if (e[i]) {
        newValue.push(
          <tr>
            <td>{e[i].id}</td>
            <td>{e[i].body}</td>
          </tr>
        );
      }
    }
    return newValue;
  };

  useEffect(() => {
    setElemet(newelements);
  }, []);
  useEffect(() => {
    const divise = 100;
    const trNumbur = element.length;
    const size = trNumbur / divise;
    let iteration = 0;
    let value = [...showElement];
    let func;
    setTimeout(
      (func = () => {
        console.log("===============================");
        const neAdd = createItems(
          element,
          iteration * size,
          Math.min(iteration * size + size, trNumbur + 1)
        );
        value = [...neAdd, ...value];
        setShowElemet(value);
        iteration++;
        if (iteration <= divise) {
          setTimeout(func(), 0);
        }
      }),
      0
    );
  }, [element]);

  const hadelClick = () => {
    //takeAllItme(10);
  };

  return (
    <div className="App">
      <h1>{element.length}</h1>
      <button onClick={hadelClick}> change</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>{showElement}</tbody>
        <div>ffffffffffffffffffffffffffffffffffffffff</div>
      </table>
    </div>
  );
}
