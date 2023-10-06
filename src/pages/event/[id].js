import { useRouter } from "next/router";
import EventDetail from "../../components/EventDetails";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";

const EventPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { events } = useSelector(state => state.user)

  // const events = [
  //   {
  //     id: 1,
  //     title: "Tech Conference 2023",
  //     date: "October 15, 2023",
  //     location: "Virtual",
  //     imageUrl:
  //       "https://res.cloudinary.com/tix-africa/image/upload/v1687936947/b5h4yxj0ajbwcdftjfx6.png",
  //   },
  //   {
  //     id: 2,
  //     title: "Music Festival 2023",
  //     date: "November 5, 2023",
  //     location: "City Park",
  //     imageUrl:
  //       "https://res.cloudinary.com/tix-africa/image/upload/c_scale,f_jpg,w_640/v1694123697/akwjikiiy00pojsdprpr.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Art Exhibition",
  //     date: "December 10, 2023",
  //     location: "Art Gallery",
  //     imageUrl:
  //       "https://res.cloudinary.com/tix-africa/image/upload/c_scale,f_jpg,w_640/v1694123697/akwjikiiy00pojsdprpr.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Food Expo",
  //     date: "January 20, 2024",
  //     location: "Convention Center",
  //     imageUrl:
  //       "https://res.cloudinary.com/tix-africa/image/upload/c_scale,f_jpg,w_640/v1694123697/akwjikiiy00pojsdprpr.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Startup Pitch Event",
  //     date: "February 8, 2024",
  //     location: "Tech Hub",
  //     imageUrl:
  //       "https://res.cloudinary.com/tix-africa/image/upload/c_scale,f_jpg,w_640/v1694123697/akwjikiiy00pojsdprpr.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "Fitness Expo",
  //     date: "March 30, 2024",
  //     location: "Sports Complex",
  //     imageUrl:
  //       "https://res.cloudinary.com/tix-africa/image/upload/c_scale,f_jpg,w_640/v1694123697/akwjikiiy00pojsdprpr.jpg",
  //   },
  // ];

  const event = events?.find((event) => event?._id === id);
 

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
          <p className="text-white text-[20px] ml-2">Event not found</p>
        )}
      </>
    </Layout>
  );
};

export default EventPage;
