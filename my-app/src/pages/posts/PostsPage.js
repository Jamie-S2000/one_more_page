import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useLocation } from "react-router-dom";
import PostCard from "./PostCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

function PostsPage() {
  const [posts, setPosts] = useState({ results: [] });
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/`);
        setPosts(data);
      } catch (err) {}
    };

    fetchPosts();
  }, [pathname]);

  return (
    <Row className={`${appStyles.Content}`}>
      <Col className="my-auto" lg={6}>
        <Container>
          <InfiniteScroll
            dataLength={posts.results.length}
            children={posts.results.map((post) => (
              <PostCard key={post.id} {...post} setPosts={setPosts} />
            ))}
            hasMore={!!posts.next}
            next={() => fetchMoreData(posts, setPosts)}
          />
        </Container>
      </Col>
    </Row>
  );
}

export default PostsPage;
