import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" variant="solid">
            Button
          </Button>
          <Button colorScheme="teal" variant="outline">
            Button
          </Button>
          <Button colorScheme="teal" variant="ghost">
            Button
          </Button>
          <Button colorScheme="teal" variant="link">
            Button
          </Button>
        </Stack>
      </header>
    </div>
  );
}

export default App;
