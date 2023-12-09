import { Fragment } from "react";
import Head from "next/head";
import TodoList from "@/components/TodoList/TodoList";
import { useRouter } from "next/router";
import CompletedList from "@/components/Completed/completedList";

const CompletedTaskPage = () => {
  // const router = useRouter();
  // const { todos } = router.query;
  // console.log("from completed page",todos)
  return (
    <Fragment>
      <Head>
        <title>Completed Tasks</title>
        <meta name="description" content="View your completed tasks." />
      </Head>
      <TodoList filterStatus = 'completed'/>
    </Fragment>
  );
};

export default CompletedTaskPage;
