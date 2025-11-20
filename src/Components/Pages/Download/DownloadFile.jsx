import React, { useState } from "react";
import styles from "./style.module.css";
import { FaFilePdf } from "react-icons/fa";

const files = [
  {
    title: "Application for Appeal",
    url: "/pdfs/application-appeal.pdf",
    size: "205 KB",
    downloads: 443,
  },
  {
    title: "Application Form for Certification of Recognition CARICOM Skills Certificate",
    url: "/pdfs/certification-recognition-caricom.pdf",
    size: "545 KB",
    downloads: 5314,
  },
  {
    title: "Application Form for Reregistration",
    url: "/pdfs/reregistration.pdf",
    size: "247 KB",
    downloads: 847,
  },
  {
    title: "Application Form Recognition and Verification of Qualification",
    url: "/pdfs/recognition-verification.pdf",
    size: "447 KB",
    downloads: 1352,
  },
  {
    title: "Application Form Recognition of Qualification Equivalency",
    url: "/pdfs/recognition-equivalency.pdf",
    size: "259 KB",
    downloads: 707,
  },
  {
    title: "BAC Act",
    url: "/pdfs/bac-act.pdf",
    size: "693 KB",
    downloads: 220,
  },
];

const perPageOptions = [20, 50, 100];

export default function DownloadsAndForms() {
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(perPageOptions[0]);

  const filtered = files.filter(f =>
    f.title.toLowerCase().includes(search.toLowerCase())
  ).slice(0, perPage);

  return (
    <div>
      <div className={styles.banner}>
        <img src="https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?cs=srgb&dl=pexels-lilartsy-1925536.jpg&fm=jpg" alt="Downloads banner" />
        <h1 className={styles.bannerTitle}>Downloads and Forms</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.controls}>
          <label>
            Display{" "}
            <select
              value={perPage}
              onChange={e => setPerPage(Number(e.target.value))}
            >
              {perPageOptions.map(opt =>
                <option key={opt} value={opt}>{opt}</option>
              )}
            </select>{" "}
            downloads per page
          </label>
          <div>
            Search:{" "}
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              className={styles.searchInput}
              placeholder="Search files..."
            />
          </div>
        </div>
        <div className={styles.tableScroller}>
          <table className={styles.dlTable}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Download</th>
                <th>Size</th>
                <th>Download Count</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((f, i) => (
                <tr key={i}>
                  <td>
                    <span className={styles.pdfIcon}><FaFilePdf size={26} /></span>
                    <span className={styles.fileTitle}>{f.title}</span>
                  </td>
                  <td>
                    <a href={f.url} download className={styles.downloadBtn}>Download</a>
                  </td>
                  <td>{f.size}</td>
                  <td>{f.downloads}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
