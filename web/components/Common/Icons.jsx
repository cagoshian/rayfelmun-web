export const ChevronDownIcon = ({ className = "" }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" className={className} fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
    />
  </svg>
);

export const InstagramIcon = ({ className = "" }) => (
  <svg width="20" height="20" viewBox="0 0 16 16" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="insta-grad-a" x1="1.464" x2="14.536" y1="14.536" y2="1.464" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFC107" />
        <stop offset=".507" stopColor="#F44336" />
        <stop offset=".99" stopColor="#9C27B0" />
      </linearGradient>
      <linearGradient id="insta-grad-b" x1="5.172" x2="10.828" y1="10.828" y2="5.172" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFC107" />
        <stop offset=".507" stopColor="#F44336" />
        <stop offset=".99" stopColor="#9C27B0" />
      </linearGradient>
      <linearGradient id="insta-grad-c" x1="11.923" x2="12.677" y1="4.077" y2="3.323" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFC107" />
        <stop offset=".507" stopColor="#F44336" />
        <stop offset=".99" stopColor="#9C27B0" />
      </linearGradient>
    </defs>
    <path fill="url(#insta-grad-a)" d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z" />
    <path fill="url(#insta-grad-b)" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z" />
    <circle cx="12.3" cy="3.7" r=".533" fill="url(#insta-grad-c)" />
  </svg>
);
