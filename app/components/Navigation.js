import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/signin">Log In</Link>
      </li>
      <li>
        <Link href="/signup">Sign Up</Link>
      </li>
    </ul>
  );
}
