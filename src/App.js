import "./App.css";
import { useState, useEffect } from "react";
import CardItem from "./components/CardItem";
import { Row } from "react-bootstrap";

function App() {
  const [dataset, setDataSet] = useState([]);
  const [followStates, setFollowStates] = useState([]);
  const img = "https://api.dicebear.com/7.x/initials/svg?seed=";

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setDataSet(data);
      setFollowStates(data.map((item) => ({ id: item.id, isFollowing: true })));
    };
    fetchUsers();
  }, []);

  function handlerRemove(id) {
    const updatedDataset = dataset.filter((item) => item.id !== id);
    setDataSet(updatedDataset);

    setFollowStates((prevFollowStates) =>
      prevFollowStates.filter((state) => state.id !== id)
    );
  }

  const handleFollowToggle = (id) => {
    setFollowStates((prevFollowStates) =>
      prevFollowStates.map((state) =>
        state.id === id ? { ...state, isFollowing: !state.isFollowing } : state
      )
    );
  };

  return (
    <Row className="cards-section">
      <CardItem
        dataAPI={dataset}
        img={img}
        remove={handlerRemove}
        setDataSet={setDataSet}
        followStates={followStates}
        handleFollowToggle={handleFollowToggle}
      />
    </Row>
  );
}

export default App;
