import * as React from "react";

function SideTab({ item, onClose }) {
  return (
    <div className="side-tab">
      <div className="side-tab-header">
        <h2>{item.Title}</h2>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="side-tab-content">
        <span id="date"><h3>Document Date</h3>
        <p>{item.Month} {item.Year}</p>
        </span>
        <span id="status"><h3>Document Visibility</h3>
        <p>{item.Status}</p>
        </span>
        <span id="desc"><h3>Document Description</h3>
        <p>{item.Description.data.Description}</p>
        </span>
     
        {item.PDF.map((data, id) => (
          <div key={id}>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
            <a href={data.url} download>
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideTab;
