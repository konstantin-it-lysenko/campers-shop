import CamperList from '../components/CamperList';
import FilterForm from '../components/FilterForm';

const Catalog = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: '64px', marginTop: '40px' }}>
        <FilterForm />
        <CamperList />
      </div>
    </>
  );
};

export default Catalog;
