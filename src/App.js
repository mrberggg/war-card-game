import React from "react";
import "./App.css";
import Board from "./components/Board/Board";
import {
  AppBar,
  CssBaseline,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="h1">
              War Game
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Board />
        </Container>
      </div>
    </>
  );
}

export default App;
