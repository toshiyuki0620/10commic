//
//
//
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home">
      <Header></Header>
      <section>
        <div className="jumbotron jumbotron-fluid py-5">
          <div className="container text-center py-5">
            <h1 className="display-4">テンシステムの公式チャンネルへようこそ</h1>
            <p className="lead">ゆっくりお愉しみください</p>
            <div className="mt-4">
              <Link className="btn btn-primary px-5 mr-3" to="/signup">新規アカウントを作る</Link>
              <Link className="btn px-5" to="/login">アカウントをお持ちの方は、こちら</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default HomePage;
