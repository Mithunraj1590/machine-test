import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Spinner } from 'react-bootstrap';
import './ListCountries.css';
import { useSelector } from 'react-redux';

const API_URL = 'https://restcountries.com/v2/all?fields=name,region,flag';
const PAGE_SIZE = 10; // Number of countries to show per load

const ListCountries = () => {
  const [countries, setCountries] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(true);
  const selectedRegion = useSelector(state => state.region.selectedRegion);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [selectedRegion]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + PAGE_SIZE);
  };

  if (loading) {
    return <div className="d-flex justify-content-center py-5"><Spinner animation="border" /></div>;
  }

  const filteredCountries = selectedRegion === 'All'
    ? countries
    : countries.filter(country => country.region === selectedRegion);

  return (
    <section>
    <div className="container">
      <Row className="g-3">
        {filteredCountries.slice(0, visibleCount).map((country, idx) => (
          <Col md={6} key={country.name + idx}>
            <div className="country-card d-flex align-items-center p-3 mb-2 bg-white">
              <div className="country-flag me-5">
                <img src={country.flag} alt={country.name} width={48} height={32} style={{ objectFit: 'cover', borderRadius: 4, border: '1px solid #eee' }} />
              </div>
              <div>
                <div className="fw-bold" style={{ fontSize: 24,color: '#3D3D3D' }}>{country.name}</div>
                <div style={{ fontSize: 16, color: '#6F6F6F' }}>{country.region}</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      {visibleCount < filteredCountries.length && (
        <div className="d-flex justify-content-center my-4">
          <Button onClick={handleLoadMore} className='py-2' style={{ background: '#333', border: 'none', borderRadius: 0, minWidth: 146 }}>
            Load more
          </Button>
        </div>
      )}
    </div>
    </section>
  );
};

export default ListCountries; 