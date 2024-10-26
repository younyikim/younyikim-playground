export default function Page() {
  const sections = [
    { id: 'section1', content: 'Welcome to Section 1!' },
    { id: 'section2', content: 'Here is Section 2!' },
    { id: 'section3', content: 'Now you are in Section 3!' },
    { id: 'section4', content: 'Finally, this is Section 4!' },
  ];

  return (
    <section className="p-8">
      <h1 className="mb-4 text-3xl font-bold">
        Welcome to the Tour Demo - Reacy JoyRide
      </h1>
      <button className="mb-8 rounded bg-blue-500 px-4 py-2 text-white">
        Start Tour
      </button>

      <div>
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="mb-4 h-[500px] rounded-lg border border-gray-300 p-4"
          >
            <h2 className="text-2xl font-semibold">{section.content}</h2>
            <p className="mt-2">Content for {section.content} goes here.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
