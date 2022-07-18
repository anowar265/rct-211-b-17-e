import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

export const Editpage = ({ country, city, population }) => {
  return (
    <Box>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Capital City</Text>
        <Input data-cy="capital-city" value={city} placeholder={city} />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input
          data-cy="population"
          value={population}
          placeholder={population}
        />
      </Box>
      <Button data-cy="update-button">Update</Button>
    </Box>
  );
};

export default Editpage;
