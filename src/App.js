import React from "react";
import Header from './components/Header/Header';
import CenterBlock from "./components/CenterBlock/CenterBlock";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Playerbar from "./components/Player/Player"
import './components/Player/Player.css'
import { StyledDivApp } from "./App.jsx";
import {TodoList } from './components/todo-list';
import { AddTodo } from "./components/add-todo";
function App() {


  return (
    <StyledDivApp>
       <AddTodo />
        <TodoList />
      <Header/>
      <section className="main">          
        <BurgerMenu/>
        <CenterBlock/>
        <NavigationMenu/>        
      </section>
      <Playerbar/>
    </StyledDivApp>

  );
}
export default App;