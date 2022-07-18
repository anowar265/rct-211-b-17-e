import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { store } from "../Redux/store";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getCountryRequest } from "../Redux/action";
import { type } from "@testing-library/user-event/dist/type";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { countries, isLoading, isError } = useSelector((store) => store);
  const dispatch = useDispatch();

  const [sorting, setSorting] = useState({
    sortBy: "",
    types: 1,
  });

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = () => {
    axios
      .get("http://localhost:8080/countries")
      .then(({ data }) => dispatch(getCountryRequest(data)));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/countries/${id}`).then(getCountry);
  };

  const handleChange = (sortBy, types) => {
    setSorting({ sortBy, types });
  };
  return (
    <Box>
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup>
          <Stack direction="row">
            <Radio
              data-cy="asc"
              onClick={() => {
                handleChange("population", 1);
              }}
              value="asc"
            >
              Ascending
            </Radio>
            <Radio
              data-cy="desc"
              onClick={() => {
                handleChange("population", -1);
              }}
              value="desc"
            >
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {countries
              .sort((a, b) =>
                sorting.types === 1
                  ? a.population - b.population
                  : b.population - a.population
              )
              .map((e) => (
                <Tr key={e.id}>
                  <Th>{e.country}</Th>
                  <Th>{e.city}</Th>
                  <Th>{e.population}</Th>
                  <Th>
                    <Link to={`/country/${e.id}`} key={e.id} {...e}>
                      Edit
                    </Link>
                  </Th>
                  <Th>
                    <button
                      onClick={() => {
                        handleDelete(e.id);
                      }}
                    >
                      Delete
                    </button>
                  </Th>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
