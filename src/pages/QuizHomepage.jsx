import React, { useEffect, useState } from "react";
import { Loader, SearchBar } from "../components";
import { get } from "../services";
import { apiPaths, CONSTANTS } from "../constants";
import { useLocation } from "react-router-dom";
import { Card, NoDataFound } from "../components/reusable";

function QuizHomepage() {
  const location = useLocation();
  const [data, setData] = useState();
  const [Loading, setLoading] = useState(true)
  const streamId = location?.state?.streamId;

  const fetchData = async (url, setData) => {
    try {
      const data = await get(url);
      setData(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false)
    }
  };
  const streamPath = "Streams >";

  const isStream = location.pathname.endsWith("all-streams")

  useEffect(() => {
    setLoading(true)

    if (isStream)
      fetchData(apiPaths.STUDENT.STREAM.ALL, setData);
    else {
      fetchData(
        `${apiPaths.STUDENT.SUBJECT.FROM_STREAM}`.replace("streamId", streamId),
        setData
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  if (Loading) {
    return <Loader />
  }

  return (
    <div className="p-2">
      <SearchBar />

      <div className="py-2 mb-2">
        <span>{streamPath}</span>
      </div>

      {data?.length === 0 ? (
        <NoDataFound description={"No subjects added yet. Please check back later!"} />
      ) : (
        <div className="wrapper">
          {data?.map((ele) => (
            // <div key={ele._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div key={ele._id}>
              <Card
                name={ele.name}
                backgroundImage={ele.bgImage}
                id={ele._id}
                type={!isStream && CONSTANTS.CARD_TYPE.SUBJECT}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuizHomepage;
