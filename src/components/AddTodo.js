import { Button, HStack, Input } from "@chakra-ui/react";
import React from "react";

function AddTodo() {
  const handleSubmit = (e) => {};
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt={8}>
        <Input variant="filled" placeholder="Buy eggs, groceries..." />
        <Button colorScheme="pink" px={8} type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
