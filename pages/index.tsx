import Button from "@/theme/Button";
import NextIcon from "@/icons/NextIcon";
import BackIcon from "@/icons/BackIcon";
import Input from "@/theme/input/Index";

export default function Home() {
  const handleClick = () => {
    console.log("clicked!");
  };

  const handleChange = () => {
    console.log("change");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <Button
        text="Next"
        className="bg-blue-700 text-white p-3"
        disable={false}
        rightIcon={<NextIcon />}
        leftIcon={<BackIcon />}
        type="button"
        onClick={handleClick}
      />

      {/* input  */}

      <Input
        value=""
        onChange={handleChange}
        label="Name"
        placeholder="Write here..."
        disabled={false}
        className="p-0"
        classNameContianer="mt-5"
      />
    </div>
  );
}
