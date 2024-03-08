import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, ListIcon, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleInputChange = (event) => setInputValue(event.target.value);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "No todo entered.",
        description: "Please enter a todo item.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDeleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Box p={4}>
      <Heading mb={6}>Todo App</Heading>
      <Box mb={4}>
        <Input placeholder="Add a new todo" value={inputValue} onChange={handleInputChange} mr={2} />
        <Button leftIcon={<FaPlus />} onClick={handleAddTodo} colorScheme="orange">
          Add Todo
        </Button>
      </Box>
      <List spacing={3}>
        {todos.map((todo, index) => (
          <ListItem key={index} d="flex" alignItems="center">
            {todo}
            <IconButton icon={<FaTrash />} isRound={true} size="sm" onClick={() => handleDeleteTodo(index)} ml={2} aria-label={`Delete todo ${index}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
