import PostsTable from "@/components/posts/PostsTable"
import BackButton from "@/components/BackButton"
import PostPagination from "@/components/posts/PostPagination"

const PostPage = () => {
  return (
    <div>
         <BackButton link="/" text="Lar Yar Lan"/>
        <PostsTable/>
        <PostPagination/>

   
    </div>
  )
}

export default PostPage