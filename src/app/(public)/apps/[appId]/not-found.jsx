import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 mt-7 h-100">
      <h1>404 - Page Not Found</h1>
      <p>App Details Page that you are looking for does not exist.</p>
      <Link href="/">
        <button className="btn bg-purple-500 text-white">Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
