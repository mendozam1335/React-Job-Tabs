import { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import JobInfo from "./Components/JobInfo";
import BtnContainer from "./Components/BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw "something Went wrong";
        }
        const result = await resp.json();
        setPeople(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <section className="jobs-center">
        <BtnContainer
          jobs={people}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
        <JobInfo jobInfo={people} currentItem={currentItem} />
      </section>
    </main>
  );
};
export default App;
