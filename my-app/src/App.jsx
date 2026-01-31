import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import styled from "styled-components";
import Food_Container from "./componenets/Food_Container";
export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [FilterData, setFilterData] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true);
        const response = await fetch(BASE_URL);
        const json = await response.json();
        console.log(json);
        setData(json);
        setFilterData(json);
        setLoading(false);
      } catch (error) {
        setError("unable to fetch data");
      }
    };

    fetchdata();
  }, []);

  const searchFun = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if (searchValue == "") {
      setFilterData(data);
    } else {
      const Filter = data?.filter((food) =>
        food.name.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setFilterData(Filter);
    }
  };

  const categoryFun = (type) => {
    if (type === "all") {
      setFilterData(data);
    } else {
      const Filter = data?.filter((food) =>
        food.type.toLowerCase().includes(type.toLowerCase()),
      );
      setFilterData(Filter);
    }
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading</div>;
  return (
    <>
      <Maincontainer>
        <Topcontainer>
          <div className="nav">
            <img src="/images/logo.svg" alt="" className="logo" />
            <input
              type="text"
              placeholder="Search Food...."
              onChange={searchFun}
            />
          </div>
          <div className="selection">
            {filterBtns.map((value) => (
              <button key={value.name} onClick={() => categoryFun(value.type)}>
                {value.name}
              </button>
            ))}
          </div>
        </Topcontainer>
        <Food_Container data={FilterData} />
      </Maincontainer>
    </>
  );
}

export default App;
const Maincontainer = styled.div`
  background: black;
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const Topcontainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000000;
  height: 130px;
  gap: 35px;
  padding-top: 20px;

  .nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
  }
  input {
    background: transparent;
    color: white;
    border: red 1px solid;
    padding: 10px;
    border-radius: 5px;
  }
  .selection {
    display: flex;
    gap: 14px;

    button {
      background-color: red;
      color: white;
      border: none;
      padding: 7px;
      border-radius: 2px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: #950606;
      }
    }
  }
`;
