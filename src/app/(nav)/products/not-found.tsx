import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <center>
        <h2>Not found</h2>
        <p>Could not find requested resource</p>
        <Link href={"/"}>Return Home</Link>
      </center>
    </div>
  );
};

export default NotFound
