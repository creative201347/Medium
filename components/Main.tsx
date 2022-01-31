const Main = () => {
  return (
    <div
      className="flex items-center justify-between border-y
  border-black bg-gradient-to-b from-yellow-300 to-yellow-600 py-10 lg:py-0"
    >
      <div className="space-y-5 px-10">
        <h1 className="max-w-xl text-6xl">
          <span
            className="underline decoration-black decoration-4 mr-4"
          >
            CreativeNepal
          </span>
          is a place to write, read and connect
        </h1>
        <h2>
          It's easy and free to post your thinking on any topic and connect with
          millions of readers
        </h2>
      </div>

      <img
        className="hidden h-48 md:inline-flex lg:h-auto"
        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        alt=""
      />
    </div>
  )
}

export default Main
