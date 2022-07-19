import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  useStatStyles,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { updateCountrySuccess } from "../Redux/action";

export const Editpage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { countries, isLoading, isError } = useSelector((store) => store);
  const navigate = useNavigate();

  const [showCountry, setShowCountry] = useState([]);

  const [loadCountry, setLoadCountry] = useState({
    city: "",
    population: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(updateCountrySuccess());
    axios
      .get(`http://localhost:8080/countries/${id}`)
      .then(({ data }) => setShowCountry(data));
  };

  const handleChange = (e) => {
    const { name } = e.target;
    setLoadCountry({ ...loadCountry, [name]: e.target.value });
  };

  const handleUpdate = (e) => {
    axios.put(`http://localhost:8080/countries/${id}`, loadCountry).then(() => {
      navigate("/");
    });
    console.log(loadCountry);
  };

  return isLoading ? (
    ""
  ) : (
    <Box>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Capital City</Text>
        <Input
          data-cy="capital-city"
          name="city"
          onChange={handleChange}
          defaultValue={showCountry.city}
        />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input
          data-cy="population"
          name="population"
          onChange={handleChange}
          defaultValue={showCountry.population}
          type="number"
        />
      </Box>
      <Button data-cy="update-button" onClick={handleUpdate}>
        Update
      </Button>
    </Box>
  );
};

export default Editpage;
