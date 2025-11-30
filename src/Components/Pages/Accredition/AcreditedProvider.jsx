import React from "react";

export default function AccreditedProvidersPage() {
  return (
    <>
      <style>{`
        body {
          background: #ffffff;
          font-family: "Segoe UI", sans-serif;
        }

        .accredited-wrapper {

          max-width: 1050px;
          margin: 3rem auto;
          padding: 9rem 1rem 4rem 1rem;
        }

        /* MAIN PAGE TITLE */
        .accredited-title {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 800;
          color: #0c2e60;
          margin-bottom: 0.3rem;
        }

        .accredited-description {
          text-align: center;
          color: #444;
          font-size: 1rem;
          max-width: 800px;
          margin: 0 auto 2.5rem auto;
          line-height: 1.5;
        }

        /* CARD CONTAINER AROUND TABLE */
        .accredited-card {
          background: #fff;
          border-radius: 12px;
          border: 1px solid #ececec;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          overflow-x: auto;
          padding: 0;
        }

        /* TABLE STYLING */
        .accredited-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 1rem;
        }

        /* TABLE HEADER */
        .accredited-table thead th {
          background: #fff9e6; /* Cream color like screenshot */
          color: #0c2e60;
          font-weight: 700;
          padding: 1rem 1.2rem;
          border-bottom: 2px solid #e6dba8;
          border-right: 1px solid #f3ecd1;
          text-align: left;
          white-space: nowrap;
        }

        /* BODY CELL */
        .accredited-table tbody td {
          padding: 0.9rem 1.2rem;
          border-bottom: 1px solid #ececec;
          font-size: 0.97rem;
          color: #333;
        }

        /* LINK STYLE LIKE WEBSITE */
        .provider-link {
          color: #b57d15;
          text-decoration: underline;
          font-weight: 500;
          cursor: pointer;
        }

        .provider-link:hover {
          color: #875800;
        }

        /* MOBILE RESPONSIVENESS */
        .accredited-card::-webkit-scrollbar {
          height: 6px;
        }

        @media (max-width: 768px) {
          .accredited-wrapper {
            padding-top: 8rem;
          }
          .accredited-title {
            font-size: 1.7rem;
          }
          .accredited-description {
            font-size: 0.95rem;
          }
          .accredited-table tbody td,
          .accredited-table thead th {
            font-size: 0.9rem;
            padding: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .accredited-title {
            font-size: 1.55rem;
          }
        }
      `}</style>

      <div className="accredited-wrapper">
        {/* MAIN HEADING */}
        <h1 className="accredited-title">Accredited Providers</h1>

        {/* SECTION SUBTITLE */}
        <p className="accredited-description">
          List of Accredited Post-Secondary/Tertiary Education and Training
          Providers in Montserrat
        </p>

        {/* PROVIDERS TABLE */}
        <div className="accredited-card">
          <table className="accredited-table">
            <thead>
              <tr>
                <th>Name of Provider</th>
                <th>Accreditation Period</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <a
                    href="https://vusom.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="provider-link"
                  >
                    Vanguard University School of Medicine
                  </a>
                </td>
                <td>2024–2029</td>
              </tr>

              <tr>
                <td>
                  <span className="provider-link">
                    Montserrat Technical College
                  </span>
                </td>
                <td>2024–2029</td>
              </tr>

              <tr>
                <td>
                  <span className="provider-link">Samuel Academy</span>
                </td>
                <td>2024–2029</td>
              </tr>

              <tr>
                <td>
                  <span className="provider-link">
                    St. Augustine Catholic Primary School
                  </span>
                </td>
                <td>2024–2029</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
