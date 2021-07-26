import React, { useState } from "react";
import "./Categories.css";
// import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import Button from "@material-ui/core/Button";
import Platforms from "../Assets/Platforms";
import { useDispatch, useSelector } from "react-redux";
import { setCatData } from "../../../Redux/profileInfo/profileInfoActions";
// import ContentWriter from "./ContentWriter";
// import VideoEditor from "./VideoEditor";
// import GraphicDesigner from "./GraphicDesigner";

const Categories = (props) => {
  const dispatch = useDispatch();
  const categoriesState = useSelector((state) => state.profileInfo.categories);
  const [categories, setCategories] = useState(categoriesState);

  const [NoP, setNoP] = useState(1);

  async function handleSubmit() {
    dispatch(setCatData(categories));
    await props.handleNext();
    //export this data from the API here
  }
  function handleCategory(e) {
    const { value } = e.target;
    setCategories((prevData) => {
      return {
        ...prevData,
        Category: value,
      };
    });
  }
  function handlePlatforms(e) {
    const { id, value, name } = e.target;

    setCategories((prevData) => {
      // console.log(prevData.Platforms[id]);
      // console.log({ ...prevData });
      // const {Platforms} = prevData

      return {
        ...prevData,
        Platforms: {
          ...prevData.Platforms,
          [id]: {
            ...prevData.Platforms[id],
            [name]: value,
          },
        },
      };
    });
  }

  return (
    <div>
      <form>
        <div className="skills">
          <div className="category">
            <h5 style={{ textAlign: "left", marginBottom: "1rem" }}>
              Add your skills
            </h5>
            <InputLabel shrink htmlFor="category" style={{ textAlign: "left" }}>
              Select Category
            </InputLabel>
            <NativeSelect fullWidth id="Category" onChange={handleCategory}>
              <option value={categories.Category} default>
                {categories.Category}
              </option>
              <option value="Beauty">Beauty</option>
              <option value="Animals">Animals</option>
              <option value="Business">Business</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Family">Family</option>
              <option value="Fashion">Fashion</option>
              <option value="Food">Food</option>
              <option value="Health">Health</option>
              <option value="Home">Home</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Music">Music</option>
              <option value="Outdoor Activities">Outdoor Activities</option>
              <option value="Society">Society</option>
              <option value="Sport">Sport</option>
              <option value="Technology">Technology</option>
              <option value="Vehicles">Vehicles</option>
            </NativeSelect>
          </div>
          <Platforms
            id="P1"
            handlePlatforms={handlePlatforms}
            platform={categories.Platforms.P1.Platform}
          />
          {NoP >= 2 && (
            <Platforms
              id="P2"
              handlePlatforms={handlePlatforms}
              platform={categories.Platforms.P2.Platform}
            />
          )}
          {NoP >= 3 && (
            <Platforms
              id="P3"
              handlePlatforms={handlePlatforms}
              platform={categories.Platforms.P3.Platform}
            />
          )}
          {NoP >= 4 && (
            <Platforms
              id="P4"
              handlePlatforms={handlePlatforms}
              platform={categories.Platforms.P4.Platform}
            />
          )}
          {NoP < 4 && (
            <button
              type="button"
              onClick={() => {
                setNoP(NoP + 1);
                console.log(NoP);
              }}
            >
              Add more
            </button>
          )}
        </div>
        <div className="back-next">
          <button
            disabled={props.activeStep === 0}
            onClick={props.handleBack}
            className="back-next-btn"
            id="back"
          >
            Back
          </button>
          <button className="back-next-btn" id="next" onClick={handleSubmit}>
            {props.activeStep === props.steps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Categories;
