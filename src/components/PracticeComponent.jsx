import {useState} from "react";
import "./PracticeComponent.css";


const PracticeComponent = () => {

  const [bucket1Count, setBucket1Count] = useState(10);
  const [bucket2Count, setBucket2Count] = useState(0);

  const handleBucket1Increment = () => {
    setBucket1Count(bucket1Count + 1);
  };

  const handleBucket1Decrement = () => {
    if (bucket1Count > 0) {
      setBucket1Count(bucket1Count - 1);
    }
  };

  const handleBucket2Increment = () => {
    setBucket2Count(bucket2Count + 1);
  };

  const handleBucket2Decrement = () => {
    if (bucket2Count > 0) {
      setBucket2Count(bucket2Count - 1);
    }
  };

  const moveToBucket2 = () => {
    if (bucket1Count > 0) {
      setBucket1Count(bucket1Count - 1);
      setBucket2Count(bucket2Count + 1);
    }
  };

  const moveToBucket1 = () => {
    if (bucket2Count > 0) {
      setBucket2Count(bucket2Count - 1);
      setBucket1Count(bucket1Count + 1);
    }
  };


  return (
    <div className="practice-component-wrapper">
      <div className="practice-component">
        <div className="bucket">
          <div className="bucket-header">Bucket 1</div>
          <div className="bucket-count">{bucket1Count}</div>
          <div style={{ gap: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button className="practice-button" onClick={handleBucket1Decrement}>
              -
            </button>
            <button className="practice-button" onClick={handleBucket1Increment}>
              +
            </button>
            <button className="practice-button" onClick={moveToBucket2}>
              {" > "}
            </button>
          </div>
        </div>
        <div className="bucket">
          <div className="bucket-header">Bucket 2</div>
          <div className="bucket-count">{bucket2Count}</div>
          <div style={{ gap: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button className="practice-button" onClick={moveToBucket1}>
              {"<"}
            </button>
            <button className="practice-button" onClick={handleBucket2Decrement}>
              -
            </button>
            <button className="practice-button" onClick={handleBucket2Increment}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeComponent;