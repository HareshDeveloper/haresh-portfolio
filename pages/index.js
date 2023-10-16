import Head from 'next/head';
import Homepage from '../src/app/components/HomePage';
import '../src/app/style/HomePage.scss';
import '../src/app/style/MenuIcon.scss';
import '../src/app/globals.css';
export default function Home() {
  return (
    <div>
      <Homepage/>
    </div>
  );
}
