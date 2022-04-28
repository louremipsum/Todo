import React from "react";
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function TodoList({ dataTodo, deleteTodo }) {
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      p="4"
      mt="8"
      borderWidth="2px"
      borderRadius="16px"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {dataTodo.map((item) => (
        <HStack key={item.id}>
          <Text>{item.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => deleteTodo(item.id)}
          ></IconButton>
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
