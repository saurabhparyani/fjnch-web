import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="font-inter text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="font-inter text-xl mb-8">
        The page you are looking for does not exist or the language is not
        supported.
      </p>
      <Link
        href="/"
        className="font-inter px-6 py-3 bg-yellow text-black rounded-full hover:bg-gray-800 hover:text-white transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
