import React from "react";
import "./App.css";
import Board from "./components/Board/Board";
import {
  AppBar,
  Button,
  CssBaseline,
  Container,
  Link,
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
              War
            </Typography>
            <Typography style={{ flexGrow: 1 }}></Typography>
            <Link
              color="inherit"
              href="https://en.wikipedia.org/wiki/War_(card_game)"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              Rules
            </Link>
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
