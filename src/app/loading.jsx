import Image from "next/image";
import spinner from "../../public/spinner.svg";

export default function loading() {
  return (
    <div className="flex justify-center">
      <Image src={spinner} alt="loading..." width={200} height={200} />
    </div>
  );
}
