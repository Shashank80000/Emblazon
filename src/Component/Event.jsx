import { events } from "../data/eventsData";

const EventCard = ({ event }) => {
  return (
    <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-[#b98304]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#b98304]/20 cursor-pointer flex flex-col h-full">

      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image || "/images/default.jpg"}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/images/default.jpg";
          }}
        />

        {/* Registration Badge */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-[#b98304] border border-[#b98304]/30 uppercase tracking-wider">
          {event.registrationStatus}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-[#ad5601] text-white mb-1">
            {event.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#b98304] transition-colors">
            {event.title}
          </h3>

          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {event.description}
          </p>
        </div>

        {/* Event Info */}
        <div className="space-y-2 text-sm text-gray-400">
          <div>
            {new Date(event.date).toLocaleDateString("en-IN", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            | {event.time}
          </div>

          <div>
            {event.location}
          </div>
        </div>
      </div>
    </div>
  );
};


const EventSection = ({ title, events }) => {
  if (!events.length) return null;

  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-white mb-10 uppercase tracking-wide">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

const Event = () => {
  const mainEvents = events.filter(
    (e) =>
      e.category === "Cultural" ||
      e.category === "Fun" ||
      e.category === "Drama"
  );

  const literaryEvents = events.filter(
    (e) => e.category === "Literary/Fine Arts"
  );

  const musicEvents = events.filter(
    (e) => e.category === "Music"
  );

  const danceEvents = events.filter(
    (e) => e.category === "Dance"
  );

  return (
    <section id="events" className="section section-event relative min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="text-center mb-20">
          <p className="section-kicker">Experience the Vibe</p>
          <h2 className="section-title">Events Schedule</h2>
          <p className="section-copy mx-auto">
            From electrifying performances to mind-bending competitions,
            explore the pulse of Emblazon 2K26.
          </p>
        </div>

        <EventSection
          title="List of Events of Emblazon-2K26"
          events={mainEvents}
        />

        <EventSection
          title="Literary / Fine Art Events"
          events={literaryEvents}
        />

        <EventSection
          title="Music"
          events={musicEvents}
        />

        <EventSection
          title="Dance"
          events={danceEvents}
        />

      </div>
    </section>
  );
};

export default Event;
