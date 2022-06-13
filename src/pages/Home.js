import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../stylesheets/pages/home.scss";
import EnhancedTable from "../components/Table";

function Home() {
  const [regional, setRegional] = useState([]);
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    axios
      .get("https://api.rootnet.in/covid19-in/stats/latest")
      .then((res) => {
        if (res && res.data.success) {
            setCountData(res.data.data.summary);
          setRegionalData(res.data.data.regional);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const convertNumber = (number) => {
    return number.toLocaleString("en-IN");
  };

  function setCountData (countData) {
    setCounts([
      {
        id: "1",
        key: "total",
        value: convertNumber(countData.total),
        bgColor: '108, 117, 125',
        textColor: 'grey'
      },
      {
        id: "2",
        key: "active",
        value: convertNumber(countData.confirmedCasesIndian),
        bgColor: '0, 123, 255',
        textColor: 'blue'
      },
      {
        id: "3",
        key: "recovered",
        value: convertNumber(countData.discharged),
        bgColor: '40, 167, 69',
        textColor: 'green'
      },
      {
        id: "4",
        key: "deceased",
        value: convertNumber(countData.deaths),
        bgColor: '255, 7, 58',
        textColor: 'red'
      },
    ]);
  };

  function createRowData(name, active, recover, deaths) {
    return {
      name,
      active,
      recover,
      deaths
    };
  }

  function setRegionalData (regionalData) {
    let rows =[];
    let headCells = [
        {
          id: 'name',
          numeric: false,
          disablePadding: false,
          label: 'State Name',
        },
        {
          id: 'active',
          numeric: true,
          disablePadding: false,
          label: 'Active Cases',
        },
        {
          id: 'recover',
          numeric: true,
          disablePadding: false,
          label: 'Recovered',
        },
        {
          id: 'deaths',
          numeric: true,
          disablePadding: false,
          label: 'Deceased',
        }
      ];
    regionalData.forEach(data => {
        rows.push(createRowData(data.loc,data.confirmedCasesIndian,data.discharged,data.deaths));
    });

    let updatedData = {
        headCells: headCells,
        rows: rows
    }
    setRegional(updatedData);
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Coronavirus Stats of India</title>
        </Helmet>
      </HelmetProvider>
      <main>
        {counts.length === 0 ? (
          <div>Loading...</div>
        ) : (
            <>
          <section>
            <div className="d-flex gap-4 justify-content-center flex-wrap">
              {counts.map((data, index) => {
                return (
                  <div
                    className="card text-center shadow-sm fadeInUp"
                    key={data.key}
                    style={{
                      animationDelay: `${0.5 + index * 0.1}s`,
                      "--bgColor": `${data.bgColor}`,
                    }}
                  >
                    <div
                      className="card-body"
                      style={{ "--textColor": `${data.textColor}` }}
                    >
                      <h5 className="card-title">{data.key}</h5>
                      <p className="card-text">{data.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="table-section mx-4">
            <div className="table-header">State wise Report</div>
            <EnhancedTable tableData={regional}/>
          </section>
          </>
        )}
      </main>
    </>
  );
}

export default Home;
