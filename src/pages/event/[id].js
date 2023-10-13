import { useRouter } from "next/router";
import EventDetail from "../../components/EventDetails";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllEventsAction } from "../../services/actions/userActions";
import { motion } from "framer-motion";

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
    }
  }, [router.query.id, id, dispatch, events, loadingState]);

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
          <div className="event-content">
             <motion.p
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           duration: 1,
           ease: "easeInOut",
           repeat: Infinity,
           repeatType: "reverse",
         }}
         className="text-white font-bold text-2xl mt-56"
       >
         Loading event details...
       </motion.p>
          </div>
        )}
      </>
    </Layout>
  );
};

export default EventPage;
