import * as React from "react";
import { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useEffect } from 'react';
import SideTab from "./SideTab";
import { useAuth } from "../../../components/auth";

const MainLogo = "../../../images/assembly-logo-main.png";
const PdfIcon = "../../../images/pdf-icon.png";
const UserIcon = "../../../images/belize-main-logo.png";

function DocumentCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [filterMonth, setFilterMonth] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [selectedItem, setSelectedItem] = useState(null); // Selected item for side tab
  const itemsPerPage = 18; // Number of items to display per page
  const { isAuthenticated, logout } = useAuth();
  
  const [user, setUser] = useState(null);
  const [UserRole, setRole] = useState(null);
  // Handle item click to open side tab
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Handle close side tab
  const handleCloseSideTab = () => {
    setSelectedItem(null);
  };
  
  useEffect(() => {
    const fetchUser = async () => {
      const authData = await isAuthenticated();
      
      // Check if the authentication data is not null
      if (authData !== null) {
        const { user, UserRole } = authData; // Destructure user and role
        setUser(user);
        setRole(UserRole); // Set the role state
      }
    };
  
    fetchUser();
  }, [isAuthenticated]);


  if (!isAuthenticated()) {
    return <div className="login"><div class="login-container"> <StaticImage src={UserIcon} /> <br/><p>This is a Restricted Page - Please login to access. <br/><a href="/login">Login</a></p></div></div>;
  }

  return (
    <StaticQuery
      query={graphql`
        query Documents {
          allStrapiAct {
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
          <div className="container doc-center-main">
            <div className="row">
              <div className="col-sm-2">
                <div className="sideBar">
                  <div className="logo">
                    <StaticImage src={MainLogo} />
                  </div>
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
                    <details>
                      <summary>Doc Visibility</summary>
                      {statusOptions}
                    </details>
                  </div>
                  <div className="user-info">
                   <div id="userLogo">
                      <StaticImage src={UserIcon} /> 
                      <p> {user?.username}<br />{UserRole}</p>
              
                     
                      
                    </div>
                    <button onClick={logout}>Logout</button>
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
                            // Check the user's role
                            const isAdmin = UserRole === "Admin";
                            const isRegular = UserRole === "Regular";
                            
                            // Filter the documents based on the user's role
                            const showDocument = isAdmin || (isRegular && act.Status === "Public");

                            if (showDocument) {
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
                            } else {
                              return null;
                            }
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

export default DocumentCenter;
