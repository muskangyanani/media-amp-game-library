import React from 'react';
import { Form } from 'react-bootstrap';

function Sidebar({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="p-3 border rounded bg-light">
      <h5>Filters</h5>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select name="genres" onChange={handleChange}>
          <option value="">All</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="rpg">RPG</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Tags</Form.Label>
        <Form.Control
          name="tags"
          type="text"
          placeholder="e.g. multiplayer"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Release Year</Form.Label>
        <Form.Control
          name="dates"
          type="text"
          placeholder="e.g. 2020-01-01,2024-12-31"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Sort By</Form.Label>
        <Form.Select name="ordering" onChange={handleChange}>
          <option value="">Default</option>
          <option value="-rating">Top Rated</option>
          <option value="-released">Recently Released</option>
        </Form.Select>
      </Form.Group>
    </div>
  );
}

export default Sidebar;
