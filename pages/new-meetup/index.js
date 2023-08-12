import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

function NewMeetupPage() {
  const router = useRouter()
  async function addMeetupHandler(enteredData) {

    try {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enteredData),
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      const data = await response.json();
      console.log(data)

    } catch (error) {
      console.log(error)
    }
    router.push("/")

  }

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="add your meetup"></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
export default NewMeetupPage;
