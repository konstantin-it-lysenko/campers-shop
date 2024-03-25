import { useFormik } from 'formik';
import sprite from '../../assets/icons/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { filterCatalog } from '../../redux/catalog/catalogOperations';
import {
  EquipTitle,
  FilterList,
  FilterTitle,
  FormUi,
  LocationLabel,
  LocationOption,
  LocationSelect,
  OptionLabel,
  OptionRadioInput,
  SubmitBtn,
  TypeTitle,
} from './FilterForm.styled';

const Option1Icon = () => (
  <svg width={28} height={28}>
    <use xlinkHref={`${sprite}#icon-ac`}></use>
  </svg>
);

const Option2Icon = () => (
  <svg width={28} height={28}>
    <use xlinkHref={`${sprite}#icon-transmission`}></use>
  </svg>
);

const Option3Icon = () => (
  <svg width={28} height={28} stroke="black">
    <use xlinkHref={`${sprite}#icon-kitchen`}></use>
  </svg>
);

const Option4Icon = () => (
  <svg width={28} height={28} stroke="black" fill="white">
    <use xlinkHref={`${sprite}#icon-tv`}></use>
  </svg>
);

const Option5Icon = () => (
  <svg width={28} height={28} fill="white" stroke="black">
    <use xlinkHref={`${sprite}#icon-shower`}></use>
  </svg>
);

const Vehicle1Icon = () => (
  <svg width={28} height={28} stroke="black">
    <use xlinkHref={`${sprite}#icon-van`}></use>
  </svg>
);

const Vehicle2Icon = () => (
  <svg width={28} height={28} fill="white" stroke="black">
    <use xlinkHref={`${sprite}#icon-fully`}></use>
  </svg>
);

const Vehicle3Icon = () => (
  <svg width={28} height={28} fill="white" stroke="black">
    <use xlinkHref={`${sprite}#icon-alcove`}></use>
  </svg>
);

const FilterForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    const formData = {
      location: values.location,
      equipment: values.equipment,
      type: values.type,
    };

    dispatch(filterCatalog({ ...formData }));
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        location: 'Kyiv, Ukraine',
        equipment: '',
        type: '',
      },
      onSubmit,
    });

  return (
    <FormUi onSubmit={handleSubmit}>
      <div>
        <LocationLabel htmlFor="location">Location</LocationLabel>
        <LocationSelect
          id="location"
          name="location"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.location}
        >
          <LocationOption value="Kyiv, Ukraine">Kyiv, Ukraine</LocationOption>
          <LocationOption value="Kyiv, Ukraine">
            Poltava, Ukraine
          </LocationOption>
          <LocationOption value="Kyiv, Ukraine">Dnipro, Ukraine</LocationOption>
          <LocationOption value="Kyiv, Ukraine">Odesa, Ukraine</LocationOption>
          <LocationOption value="Kyiv, Ukraine">
            Kharkiv, Ukraine
          </LocationOption>
          <LocationOption value="Kyiv, Ukraine">Sumy, Ukraine</LocationOption>
          <LocationOption value="Kyiv, Ukraine">Lviv, Ukraine</LocationOption>
        </LocationSelect>
      </div>

      <div>
        <FilterTitle>Filters</FilterTitle>
        <EquipTitle>Vehicle equipment</EquipTitle>
        <FilterList>
          <li>
            <OptionRadioInput
              type="radio"
              id="option1"
              name="option"
              value="option1"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.option === 'option1'}
            />
            <OptionLabel htmlFor="option1">
              <Option1Icon />
              <p>AC</p>
            </OptionLabel>
          </li>

          <li>
            <OptionRadioInput
              type="radio"
              id="option2"
              name="option"
              value="option2"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.option === 'option2'}
            />
            <OptionLabel htmlFor="option2">
              <Option2Icon />
              <p>Automatic</p>
            </OptionLabel>
          </li>

          <li>
            <OptionRadioInput
              type="radio"
              id="option3"
              name="option"
              value="option3"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.option === 'option3'}
            />
            <OptionLabel htmlFor="option3">
              <Option3Icon />
              <p>Kitchen</p>
            </OptionLabel>
          </li>

          <li>
            <OptionRadioInput
              type="radio"
              id="option4"
              name="option"
              value="option4"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.option === 'option4'}
            />
            <OptionLabel htmlFor="option4">
              <Option4Icon />
              <p>TV</p>
            </OptionLabel>
          </li>

          <li>
            <OptionRadioInput
              type="radio"
              id="option5"
              name="option"
              value="option5"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.option === 'option5'}
            />
            <OptionLabel htmlFor="option5">
              <Option5Icon />
              <p>Shower/WC</p>
            </OptionLabel>
          </li>
        </FilterList>
      </div>

      <TypeTitle>Vehicle type</TypeTitle>

      <FilterList>
        <li>
          <OptionRadioInput
            type="radio"
            id="vehicle1"
            name="type"
            value="vehicle1"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.type === 'vehicle1'}
          />
          <OptionLabel htmlFor="vehicle1">
            <Vehicle1Icon />
          </OptionLabel>
        </li>

        <li>
          <OptionRadioInput
            type="radio"
            id="vehicle2"
            name="type"
            value="vehicle2"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.type === 'vehicle2'}
          />
          <OptionLabel htmlFor="vehicle2">
            <Vehicle2Icon />
          </OptionLabel>
        </li>

        <li>
          <OptionRadioInput
            type="radio"
            id="vehicle3"
            name="type"
            value="vehicle3"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.type === 'vehicle3'}
          />
          <OptionLabel htmlFor="vehicle3">
            <Vehicle3Icon />
          </OptionLabel>
        </li>
      </FilterList>

      <SubmitBtn type="submit">Submit</SubmitBtn>
    </FormUi>
  );
};

export default FilterForm;
