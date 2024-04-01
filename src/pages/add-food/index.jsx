import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";

const AddFoodPage = () => {
  const router = useRouter();
  const [newFood, setNewFood] = useState({});
  const [errors, setErrors] = useState({});
  const handleAddClick = () => {
    let currErrors = {};
    if (!newFood.name || newFood.name.length < 3 || newFood.name.length > 30) {
      currErrors = {
        ...currErrors,
        name: "The Food Name length should be between 3 and 30 characters.",
      };
    }
    if (!newFood.calories) {
      currErrors = {
        ...currErrors,
        calories: "This field cannot be empty.",
      };
    }
    if (!newFood.fat) {
      currErrors = {
        ...currErrors,
        fat: "This field cannot be empty.",
      };
    }
    if (!newFood.carbs) {
      currErrors = {
        ...currErrors,
        carbs: "This field cannot be empty.",
      };
    }
    if (!newFood.protein) {
      currErrors = {
        ...currErrors,
        protein: "This field cannot be empty.",
      };
    }
    setErrors(currErrors);
    if (currErrors.name || currErrors.calories) return;
    const data = JSON.parse(sessionStorage.getItem("nutr-data"));
    data.push(newFood);
    sessionStorage.setItem("nutr-data", JSON.stringify(data));
    router.push("/");
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "120px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <div
          style={{ marginBottom: "15px", width: "230px", maxWidth: "230px" }}
        >
          <TextField
            error={!!errors?.name}
            required
            id="outlined-error-helper-text"
            label="Food Name"
            helperText={errors?.name}
            value={newFood?.name}
            onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
          />
        </div>
        <div
          style={{ marginBottom: "15px", width: "230px", maxWidth: "230px" }}
        >
          <TextField
            error={!!errors?.calories}
            required
            id="outlined-error-helper-text"
            label="Calories"
            helperText={errors?.calories}
            value={newFood?.calories}
            onChange={(e) =>
              setNewFood({ ...newFood, calories: e.target.value })
            }
          />
        </div>
        <div
          style={{ marginBottom: "15px", width: "230px", maxWidth: "230px" }}
        >
          <TextField
            error={!!errors?.fat}
            required
            id="outlined-error-helper-text"
            label="Fat"
            helperText={errors?.fat}
            onChange={(e) => setNewFood({ ...newFood, fat: e.target.value })}
          />
        </div>
        <div
          style={{ marginBottom: "15px", width: "230px", maxWidth: "230px" }}
        >
          <TextField
            error={!!errors?.carbs}
            required
            id="outlined-error-helper-text"
            label="Carb"
            helperText={errors?.carbs}
            onChange={(e) => setNewFood({ ...newFood, carbs: e.target.value })}
          />
        </div>
        <div
          style={{ marginBottom: "15px", width: "230px", maxWidth: "230px" }}
        >
          <TextField
            error={!!errors?.protein}
            required
            id="outlined-error-helper-text"
            label="Protein"
            helperText={errors?.protein}
            onChange={(e) =>
              setNewFood({ ...newFood, protein: e.target.value })
            }
          />
        </div>
      </div>
      <div style={{ margin: "0 auto", marginTop: "20px" }}>
        <Button variant="contained" size="md" onClick={handleAddClick}>
          Add Food
        </Button>
      </div>
    </div>
  );
};

export default AddFoodPage;
