import { Heading, Button, ButtonGroup } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

function App() {
  const [dataTodo, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("dataTodo")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(dataTodo));
  });

  const deleteTodo = (id) => {
    const newTodos = dataTodo.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const addTodo = (todo) => {
    setTodos([...dataTodo, todo]);
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <VStack p={4}>
        <IconButton
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound={true}
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
        <Heading
          fontWeight="extrabold"
          size="2xl"
          bgGradient="linear(to-r, pink.500, red.200, blue.300)"
          bgClip="text"
        >
          Todo Application
        </Heading>
        <TodoList dataTodo={dataTodo} deletedTodo={deleteTodo} />
        <AddTodo addedTodo={addTodo} />
      </VStack>
    </div>
  );
}

export default App;
