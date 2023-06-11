import * as React from "react";
import { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const MainLogo = "../../../images/assembly-logo-main.png";
const PdfIcon = "../../../images/pdf-icon.png";

function DocumentCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const itemsPerPage = 18; // Number of items to display per page

  return (
    <StaticQuery
      query={graphql`
        query Documents {
          allStrapiAct {
            distinct(field: { Type: SELECT })
            edges {
              node {
                Doc {
                  id
                  url
                  name
                }
                Type
                Year
              }
            }
          }
        }
      `}
      render={(data) => {
        const allActs = data.allStrapiAct.edges.map((edge) => edge.node);

        const typeOptions = data.allStrapiAct.distinct.map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              value={type}
              checked={filterType === type}
              onChange={(e) => setFilterType(e.target.checked ? type : "")}
            />
            {type}
          </label>
        ));

        const yearOptions = allActs
          .map((act) => act.Year)
          .filter((year, index, self) => year && self.indexOf(year) === index)
          .map((year) => (
            <label key={year}>
              <input
                type="checkbox"
                value={year}
                checked={parseInt(filterYear) === year}
                onChange={(e) =>
                  setFilterYear(e.target.checked ? year.toString() : "")
                }
              />
              {year}
            </label>
          ));

        // Filter the acts based on type, year, and search query
        let filteredActs = allActs.filter((act) => {
          const typeName = act.Type || ""; // Handle undefined or null
          const yearString = act.Year ? act.Year.toString() : ""; // Handle undefined or null

          // Filter based on search query
          if (
            searchQuery &&
            !typeName.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !yearString.includes(searchQuery)
          ) {
            return false;
          }

          // Filter based on type
          if (filterType && typeName !== filterType) {
            return false;
          }

          // Filter based on year
          if (filterYear && parseInt(yearString) !== parseInt(filterYear)) {
            return false;
          }

          return true;
        });

        // Pagination
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = filteredActs.slice(
          indexOfFirstItem,
          indexOfLastItem
        );

        const paginate = (pageNumber) => setCurrentPage(pageNumber);

        return (
          <div className="container doc-center-main">
            <div className="row">
              <div className="col-sm-2">
                <div className="sideBar">
                  <div className="logo">
                    <StaticImage src={MainLogo} />
                  </div>
                  <div className="filters">
                    <details open>
                      <summary>Doc Type</summary>
                      {typeOptions}
                    </details>
                    <details open>
                      <summary>Doc Year</summary>
                      {yearOptions}
                    </details>
                  </div>
                </div>
              </div>
              <div className="col-sm-10">
                <div className="top-menu">
                  <div className="title">
                    <h1>Document Center</h1>
                  </div>
                  <div className="search-bar">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="featured-content">
                  <div className="acts">
                    <div className="acts-header">
                      <span id="doc-type-title">
                        <p>Document Type</p>
                      </span>
                      <span id="doc-name-title">
                        <p>Document Name</p>
                      </span>
                      <span id="doc-year-title">
                        <p>Document Year</p>
                      </span>
                    </div>
                    {currentItems.map((act) => (
                      <div key={act.Doc.id} className="act">
                        {(act.Doc).map((data, id) => (
                          <a
                            href={"http://localhost:1338" + data.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span id="doc-name">
                              <StaticImage src={PdfIcon} />
                              <p>{act.Type}</p>
                            </span>
                            <span id="doc-type">
                              <p>{data.name}</p>
                            </span>
                            <span id="doc-year">
                              <p>{act.Year}</p>
                            </span>
                            <span id="doc-view">
                              <p>View/Download</p>
                            </span>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                  {/* Pagination */}
                  <div className="pagination">
                    {filteredActs.length > itemsPerPage && (
                      <div className="pagination-items">
                       
                        <ul>
                          {Array.from(
                            {
                              length: Math.ceil(
                                filteredActs.length / itemsPerPage
                              ),
                            },
                            (_, index) => (
                              <li
                                key={index}
                                className={
                                  currentPage === index + 1 ? "active" : ""
                                }
                                onClick={() => paginate(index + 1)}
                              >
                                {index + 1}
                              </li>
                            )
                          )}
                        </ul>
                        <p>
                          Showing {indexOfFirstItem + 1}-
                          {Math.min(indexOfLastItem, filteredActs.length)} of{" "}
                          {filteredActs.length} Documents
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}

export default DocumentCenter;
