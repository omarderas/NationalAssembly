import * as React from "react";
import { useState, useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import SideTab from "./SideTab";
import { useAuth } from "../../../components/auth";

const MainLogo = "../../../images/assembly-logo-main.png";
const PdfIcon = "../../../images/pdf-icon.png";
const UserIcon = "../../../images/belize-main-logo.png";

function AllDocuments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [filterMonth, setFilterMonth] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [selectedItem, setSelectedItem] = useState(null); // Selected item for side tab
  const itemsPerPage = 18; // Number of items to display per page

  // Handle item click to open side tab
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Handle close side tab
  const handleCloseSideTab = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    // Function to update the filter state based on query parameters
    const updateFilterStateFromQueryParams = () => {
      const queryParams = new URLSearchParams(window.location.search);

      setFilterType(queryParams.get("filterType") || "");
      setFilterYear(queryParams.get("filterYear") || "");
      setFilterMonth(queryParams.get("filterMonth") || "");
    
    };

    // Update filter state when component mounts
    updateFilterStateFromQueryParams();
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams();
    queryParams.set("filterType", filterType);
    queryParams.set("filterYear", filterYear);
    queryParams.set("filterMonth", filterMonth);
   

    const queryString = queryParams.toString();
    const newUrl = queryString ? `?${queryString}` : window.location.pathname;

    window.history.pushState({}, "", newUrl);
  }, [filterType, filterYear, filterMonth]);

  return (
    <StaticQuery
      query={graphql`
        query AllDocuments {
          allStrapiAct(filter: { Status: { eq: "Public" } }) {
            distinct(field: { Type: SELECT })
            edges {
              node {
                PDF {
                  id
                  url
                  name
                }
                Description {
                  data {
                    Description
                    id
                  }
                }
                Keywords {
                  data {
                    id
                    Keywords
                  }
                }
                Type
                Year
                Month
                Title
                Status
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

        const monthOptions = allActs
          .map((act) => act.Month)
          .filter(
            (month, index, self) => month && self.indexOf(month) === index
          )
          .map((month) => (
            <label key={month}>
              <input
                type="checkbox"
                value={month}
                checked={filterMonth === month}
                onChange={(e) => setFilterMonth(e.target.checked ? month : "")}
              />
              {month}
            </label>
          ));

        const statusOptions = allActs
          .map((act) => act.Status)
          .filter(
            (status, index, self) => status && self.indexOf(status) === index
          )
          .map((status) => (
            <label key={status}>
              <input
                type="checkbox"
                value={status}
                checked={filterStatus === status}
                onChange={(e) =>
                  setFilterStatus(e.target.checked ? status : "")
                }
              />
              {status}
            </label>
          ));

        // Filter the acts based on type, year, month, and search query
        let filteredActs = allActs.filter((act) => {
          const typeName = act.Type || ""; // Handle undefined or null
          const yearString = act.Year ? act.Year.toString() : ""; // Handle undefined or null
          const monthString = act.Month || ""; // Handle undefined or null

          // Filter based on search query
          if (
            searchQuery &&
            !act.Title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !act.Description.data.Description
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) &&
            !act.PDF[0].name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !act.Keywords.data.Keywords
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
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

          // Filter based on month
          if (filterMonth && monthString !== filterMonth) {
            return false;
          }

          // Filter based on status
          if (filterStatus && act.Status !== filterStatus) {
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
        const isItemSelected = selectedItem !== null;

        return (
          <div className="doc-center-main">
            <div className="row">
              <div className="col-sm-2">
                <div className="sideBar">
                  <div className="filters">
                    <span id="filters-header">
                      <p>Refine Search</p>
                    </span>

                    <details open>
                      <summary>Doc Type</summary>
                      {typeOptions}
                    </details>
                    <details>
                      <summary>Doc Year</summary>
                      {yearOptions}
                    </details>
                    <details>
                      <summary>Doc Month</summary>
                      {monthOptions}
                    </details>
              
                  </div>
                </div>
              </div>
              <div className="col-sm-10">
                <div className="top-menu">
                  <div className="title">
                    <h1>All Public Documents</h1>
                  </div>

                  <div className="search-bar">
                    <input
                      type="text"
                      placeholder="Search Document..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="featured-content">
                  <div className="acts">
                    <div className="acts-header">
                      <span id="doc-type-title">
                        <p>Document Title</p>
                      </span>
                      <span id="doc-name-title">
                        <p>Document Date</p>
                      </span>
                      <span id="doc-year-title">
                        <p>Document Type</p>
                      </span>
                      <span id="doc-status-title">
                        <p>Visibility</p>
                      </span>
                    </div>
                    {currentItems.map((act) => (
                      <div key={act.PDF.id} className="act">
                        {act.PDF.map((data, id) => {
                          return (
                            <a
                              key={act.PDF.id}
                              className="act"
                              onClick={() => handleItemClick(act)}
                            >
                              <span id="doc-name">
                                <StaticImage src={PdfIcon} />
                                <p>{act.Title}</p>
                              </span>

                              <span id="doc-year">
                                <p>{act.Month} {act.Year}</p>
                              </span>
                              <span id="doc-type">
                                <p>{act.Type}</p>
                              </span>
                              <span id="doc-status">
                                <p>{act.Status}</p>
                              </span>
                              <span id="doc-view">
                                <p>View More</p>
                              </span>
                            </a>
                          );
                        })}
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
                  {isItemSelected && (
                    <SideTab item={selectedItem} onClose={handleCloseSideTab} />
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}

export default AllDocuments;
