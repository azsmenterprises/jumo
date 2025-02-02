import React from 'react'
import { Link } from 'react-router-dom';

function BreadcrumbComp() {
  return (
    <>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
          <li class="breadcrumb-item"><Link to="/products-listing">Buy Car</Link></li>
          <li class="breadcrumb-item active" aria-current="page">data</li>
        </ol>
    </nav>
    </>
  )
}

export default BreadcrumbComp