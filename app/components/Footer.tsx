export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white p-4 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-400">
      &copy; {new Date().getFullYear()} WCAG SaaS. All rights reserved.
    </footer>
  );
}
