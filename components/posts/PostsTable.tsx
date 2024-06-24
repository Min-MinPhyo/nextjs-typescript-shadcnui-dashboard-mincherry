import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import posts from "@/data/post";
import { Post } from "@/types/posts";

interface PostsTableProps {
  limit?: number;
  title?: string;
}

const PostsTable = ({ limit, title }: PostsTableProps) => {
  // sorted posts ngal sin kyi lite
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getDate()
  );

  console.log("sarr");

  // filter posts
  const filterPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;
  console.log(filterPosts);

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Posts"}</h3>

      <Table>
        <TableCaption>Min Cherry Table For Dashboard</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>

            <TableHead className="hidden md:table-cell">View</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filterPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="hidden: text-cell">{post.author}</TableCell>

              <TableCell className="text-right hidden md:table-cell">
                {post.date}
              </TableCell>

              <TableCell>
                <Link href={`/posts/edit/${post.id}`}>
                  <button className="bg-blue-500 text-white hover:bg-blue-700 font-bold px-4 py-2 rounded-md text-xs">
                    Edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostsTable;
