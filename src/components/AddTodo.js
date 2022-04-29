import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { nanoid } from "nanoid";

function AddTodo({ addedTodo }) {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      toast({
        title: "No content",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const todo = {
      id: nanoid(),
      body: content,
    };

    addedTodo(todo);
    setcontent("");
  };

  const [content, setcontent] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt={8}>
        <Input
          variant="filled"
          placeholder="Buy eggs, groceries..."
          value={content}
          onChange={(e) => setcontent(e.target.value)}
        />
        <Button colorScheme="pink" px={8} type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;

// TODO: why are we using {} in line 4 to extract the prop?
// TODO: the spacing in the app is fucked for some reason...
