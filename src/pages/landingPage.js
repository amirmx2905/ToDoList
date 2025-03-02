import Footer from "../components/footer";

export default function LandingPage() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 flex-auto flex flex-col">
      <section className="text-center my-10 mx-8 flex-auto">
        <h1 className="font-extrabold text-5xl mb-10"> Welcome </h1>
        <a
          className="py-2 px-4 rounded-lg bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white"
          href="/"
        >
          Log In
        </a>
        <p className="my-10">Create, Edit and See your Tasks Easily</p>
        <a
          className="py-2 px-4 rounded-lg bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white"
          href="/"
        >
          Learn More
        </a>
      </section>
      <Footer />
    </div>
  );
}
