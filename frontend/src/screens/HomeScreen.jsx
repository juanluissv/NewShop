import { React } from 'react';
import { Col, Row, Nav, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/ProductApiSlice';
import Product from '../components/Product';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Oimage from '../components/Oimage';
import Testimonial from '../components/Testimonial';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';

const HomeScreen = () => {

  const { pageNumber } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({ pageNumber }); 

  return (
    <>
    { isLoading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>
        {error?.data?.message || error.error}
      </Message>
    ) : (
      <>
      <Banner />
      <Services />
        <div class="container">

        <Row>
        <h3>Latest Products</h3>

        {data?.products.map((product) => (
            <Col key={product._id}  sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
        </Row>
        <Paginate
            pages={data.pages}
            page={data.page}
            
          />
        </div>
        <Oimage />
        <Testimonial />
      </>
    ) } 
    </>
  )
}

export default HomeScreen