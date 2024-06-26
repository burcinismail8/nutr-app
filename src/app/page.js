"use client";
import Image from "next/image";
import TableComponent from "./tableComponent";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";
const defaultData = [
  {
    name: "Frozen yoghurt",
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16,
    carbs: 24,
    protein: 6,
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16,
    carbs: 49,
    protein: 3.9,
  },
];
export default function Home() {
  const router = useRouter();
  const [rows, setRows] = useState(defaultData);
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("nutr-data"))?.length > 0) {
      setRows(JSON.parse(sessionStorage.getItem("nutr-data")));
      return;
    }
    sessionStorage.setItem("nutr-data", JSON.stringify(defaultData));
  }, []);
  const handleSearch = (e) => {
    if (e.target.value.length == 0) {
      setRows(JSON.parse(sessionStorage.getItem("nutr-data")) || defaultData);
      return;
    }
    if (JSON.parse(sessionStorage.getItem("nutr-data").length > 0)) {
      let filteredData = JSON.parse(sessionStorage.getItem("nutr-data")).slice(
        0
      );
      filteredData = filteredData.filter((food) =>
        food.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setRows(filteredData);
    } else {
      let filteredData = defaultData.slice(0);
      filteredData = filteredData.filter((food) =>
        food.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setRows(filteredData);
    }
  };
  return (
    <main>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <TextField
            label="Search Food"
            variant="standard"
            onChange={handleSearch}
            sx={{ width: "350px" }}
          />
        </div>
        <div
          style={{
            width: "80%",
            margin: "0 auto",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <TableComponent rows={rows} />
        </div>
        <div style={{ margin: "0 auto" }}>
          <Button
            variant="contained"
            size="md"
            onClick={() => router.push("/add-food")}
          >
            Add Food
          </Button>
        </div>
      </div>
    </main>
  );
}
