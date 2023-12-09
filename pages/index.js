import TodoForm from "@/components/Form/TodoForm";
import TodoList from "@/components/TodoList/TodoList";
import Head from "next/head";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Todo App</title>
        <meta
          name="description"
          content="Add your daily task which you want to do."
        />
      </Head>

      <TodoForm />
      <TodoList filterStatus="incomplete" />
    </Fragment>
  );
};

export default HomePage;
