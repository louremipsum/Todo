import { Heading, Button, ButtonGroup } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { VStack, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [dataTodo, setTodos] = useState(data);

  const deleteTodo = (id) => {
    const newTodos = dataTodo.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <VStack p={4}>
        <IconButton
          icon={<FaSun />}
          isRound={true}
          size="lg"
          alignSelf="flex-end"
        ></IconButton>
        <Heading
          mb="8"
          fontWeight="extrabold"
          size="2xl"
          bgGradient="linear(to-r, pink.500, red.200, blue.300)"
          bgClip="text"
        >
          Todo Application
        </Heading>
        <TodoList dataTodo={data} deleteTodo={deleteTodo} />
        <AddTodo />
      </VStack>
    </div>
  );
}

export default App;
