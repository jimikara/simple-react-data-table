import React, { useState, useEffect } from "react";
import axios from 'axios'
import Header from './Header'
import DataTable from "./DataTable";

export default function Main() {
  const [tableData, setTableData] = useState([])
  const [competitionData, setCompetitionData] = useState({})

  const getData = async (req, res) => {
    const { data } = await axios.get('https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=39', {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_FOOTBALL_DATA_API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    })

    setCompetitionData(data.response[0].league)
    setTableData(data.response[0].league.standings[0])
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Header competitionData={competitionData} />
      <DataTable tableData={tableData} setTableData={setTableData} />
    </div>
  )
}