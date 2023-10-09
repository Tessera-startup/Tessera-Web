import { useRouter } from "next/router";
import EventDetail from "../../components/EventDetails";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllEventsAction } from "../../services/actions/userActions";

const EventPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { events, loadingState } = useSelector((state) => state.user);
  const [event, setEvent] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchEvents = async () => {
      await dispatch(getAllEventsAction());
    };

    if (!events && !loadingState) {
      fetchEvents();
    } else {
      const foundEvent = events?.find((event) => event?._id === id);
      setEvent(foundEvent);
      console.log("event id", events);
      console.log(id);
    }
  }, [router.query.id, id, dispatch, events, loadingState]);

  if (loadingState) {
    return <Layout> <p className="text-white text-[20px] ml-2">loading...</p></Layout>; 
  }

  return (
    <Layout>
      <>
        {event ? (
          <>
            <div className="event-content">
              <div className="gradient fixed"></div>
              <EventDetail event={event} />
            </div>
          </>
        ) : (
          <p className="text-white text-[20px] ml-2">loading...</p>
        )}
      </>
    </Layout>
  );
};

export default EventPage;
