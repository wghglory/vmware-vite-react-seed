export default function AppDropdown({children}: {children: React.ReactNode}) {
  return (
    <div className="absolute z-10 ml-2 inline-flex w-max flex-col border bg-white py-4 shadow dark:border-gray-500 dark:bg-gray-700">
      {children}
      {/* <li>
        <button className="hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 w-full text-left">AppDropdown</button>
      </li>
      <li>
        <button className="hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 w-full text-left">AppDropdown 2</button>
      </li> */}
    </div>
  );
}
