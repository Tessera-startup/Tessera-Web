import { useRouter } from "next/router";
import EventDetail from "../../components/EventDetails";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";

const EventPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { events } = useSelector((state) => state.user);
  const event = events?.find((event) => event?._id === id);

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
          <p className="text-white text-[20px] ml-2">Event not found</p>
        )}
      </>
    </Layout>
  );
};

export default EventPage;
