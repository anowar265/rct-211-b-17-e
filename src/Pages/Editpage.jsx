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
import { useNavigate, useParams } from "react-router-dom";
import {
  getCountryRequest,
  updateCountryFailure,
  updateCountryRequest,
  updateCountrySuccess,
} from "../Redux/action";

export const Editpage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countries = useSelector((store) => store.countries);
  const navigate = useNavigate();

  const [currentCountry, setCurrentCountry] = useState({});

  const [showCountry, setShowCountry] = useState([]);

  const [loadCountry, setLoadCountry] = useState({
    city: "",
    population: "",
  });

  useEffect(() => {
    getData();

    let currentCountry = countries?.find((item) => item.id === Number(id));
    currentCountry && setCurrentCountry(currentCountry);
  }, [countries, id]);

  const getData = () => {
    dispatch(getCountryRequest());
    axios
      .get(`http://localhost:8080/countries/${id}`)
      .then(({ data }) => setShowCountry(data));
  };

  const handleChange = (e) => {
    const { name } = e.target;
    setLoadCountry({ ...loadCountry, [name]: e.target.value });
  };

  const handleUpdate = (id, newCity, newPopulation) => {
    dispatch(updateCountryRequest());
    axios
      .patch(`http://localhost:8080/countries/${id}`, {
        city: loadCountry.city || newCity,
        population: loadCountry.population || newPopulation,
      })
      .then(({ data }) => {
        dispatch(updateCountrySuccess(data));
        navigate("/");
      })
      .catch((err) => dispatch(updateCountryFailure()));
  };

  return (
    <Box>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Capital City</Text>
        <Input
          data-cy="capital-city"
          name="city"
          onChange={handleChange}
          defaultValue={showCountry.city || currentCountry.city}
        />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input
          data-cy="population"
          name="population"
          onChange={handleChange}
          defaultValue={currentCountry.population || showCountry.population}
          type="number"
        />
      </Box>
      <Button
        data-cy="update-button"
        onClick={() => {
          handleUpdate(
            currentCountry.id,
            currentCountry.city,
            currentCountry.population
          );
        }}
      >
        Update
      </Button>
    </Box>
  );
};

export default Editpage;
