import Head from 'next/head';
import Link from 'next/link';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<button onClick={() => toast.success('hello toast!')}>Toast Me.</button>
		</div>
	);
}
