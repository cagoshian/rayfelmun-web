import dynamic from "next/dynamic";

const Harita = dynamic(() => import("./Map"), { ssr: false });

export default Harita;
