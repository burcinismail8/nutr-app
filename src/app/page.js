"use client";
import Image from "next/image";
import TableComponent from "./tableComponent";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rowsDefault = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
export default function Home() {
  const router = useRouter();
  const [rows, setRows] = useState(rowsDefault);
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
