import Image from "next/image";
import Link from "next/link";
import { BiTime } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

const BlogCard = ({
  image,
  date,
  author,
  comments,
  title,
  eventTime,
  key,
  link,
}) => {
  return (
    <Link href={`${link}`} key={key} className="relative group cursor-pointer">
      <Image
        src={image}
        alt={title}
        quality={100}
        className="w-full h-full object-cover"
      />
      <div className="absolute group-hover:opacity-0 inset-0 bg-gradient-to-t from-black  to-transparent z-10 transition duration-300 "></div>

      <div className="absolute z-20 inset-0 flex flex-col justify-between">
        <div className="xl:p-6 p-4">
          <div className=" bg-primary text-white text-center xl:px-3 p-2 xl:py-4 w-fit">
            <p className="w-10 max-lg:!text-xs">{date}</p>
          </div>
        </div>

        <div className="group-hover:bg-white xl:p-6 p-4 group-hover:pt-16">
          <p className="text-white flex items-center gap-5">
            {author && (
              <span className="text-primary flex items-center gap-2 ">
                {" "}
                <FaRegCircleUser />{" "}
                <span className="group-hover:text-black">{author}</span>
              </span>
            )}{" "}
            {comments && (
              <span className="flex items-center gap-2 group-hover:text-black max-lg:!text-xs">
                {" "}
                <FaRegComments className="text-primary" /> {comments} Comment
              </span>
            )}
            {eventTime && (
              <span className="flex items-center gap-2 group-hover:text-black max-lg:!text-xs">
                {" "}
                <BiTime className="text-primary" /> {eventTime}
              </span>
            )}
          </p>
          <h4 className="text-white group-hover:text-black">
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
