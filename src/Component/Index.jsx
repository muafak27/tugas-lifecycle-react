import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getNews, searchNews } from './ApiNews';
import { useEffect, useState } from 'react';

const Index = () => {
    const [berita, setBerita] = useState([])
    
    useEffect(() => {
        getNews().then((result) => {
            setBerita(result)
        })
    }, [])

    
    const beritaList = () => {
        return berita.map((news, i) => (
                <div key={i}>
                    <div>
                    <Card className='card'>
                        <Card.Img variant="top" src={news.urlToImage} className='image'/>
                        <Card.Body>
                        <Card.Title className='title'>{news.title}</Card.Title>
                        <Card.Text className='deskripsi'>{news.description}</Card.Text>
                        <Button variant="primary">Detail</Button>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
        ))
    }

    const search = async(q) => {
       const query = await searchNews(q)
       setBerita(query)
    }

  return (
    <div>
        <div className='boxSearch'>
            <input
             placeholder=' Search...'
             className='search'
             onChange={({target}) => {
                search(target.value)} }
             />
        </div>
        
        <div className='boxCard' >
        {beritaList()}
        </div>
    
    </div>
  );
}

export default Index;