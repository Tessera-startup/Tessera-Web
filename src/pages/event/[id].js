import { useRouter } from "next/router";
import EventDetail from "../../components/EventDetails";
import Layout from "../../components/Layout";

const EventPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(`EventPage ${id}`);

  // const event = event.find((event) => event._id === parseInt(id));

  return (
    <Layout>
      <>
        {event ? (
          <>
            <div className="event-content">
              <div className="gradient fixed"></div>
              <EventDetail event={id} />
            </div>
          </>
        ) : (
          <p>Event not found</p>
        )}
      </>
    </Layout>
  );
};

export default EventPage;
