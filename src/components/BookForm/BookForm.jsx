import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/catalog/catalogSelectors';
import bookFormSchema from 'schemas/bookFormSchema';
import { bookForm } from '../../redux/catalog/catalogOperations';
import {
  BookFormList,
  BookFormText,
  BookFormTitle,
  FormUi,
  Input,
  SubmitBtn,
  TextArea,
} from './BookForm.styled';

const BookForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    const formData = {
      name: values.name,
      email: values.email,
      date: values.date,
      comment: values.comment,
    };

    const isValid = await bookFormSchema.isValid(formData);

    if (!isValid) {
      return;
    }

    dispatch(bookForm({ ...formData }));
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        date: '',
        comment: '',
      },
      validationSchema: bookFormSchema,
      onSubmit,
    });

  return (
    <FormUi onSubmit={handleSubmit} autoComplete="off">
      <BookFormTitle>Book your campervan now</BookFormTitle>
      <BookFormText>
        Stay connected! We are always ready to help you.
      </BookFormText>
      <BookFormList>
        <Input
          name="name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          // $error={errors.name && touched.name}
          placeholder="Name"
        />
        {/* {errors.name && touched.name && <p>{errors.name}</p>} */}
        <Input
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          // $error={errors.email && touched.email}
          placeholder="Email"
          type="email"
        />
        {/* {errors.email && touched.email && <p>{errors.email}</p>} */}
        <Input
          name="date"
          value={values.date}
          onBlur={handleBlur}
          onChange={handleChange}
          // $error={errors.date && touched.date}
          placeholder="Booking date"
          type="date"
        />
        <TextArea
          name="comment"
          value={values.comment}
          onBlur={handleBlur}
          onChange={handleChange}
          $error={errors.comment && touched.comment}
          placeholder="Comment"
        ></TextArea>
        {/* {errors.comment && touched.comment && <p>{errors.comment}</p>} */}
      </BookFormList>
      <SubmitBtn type="submit" disabled={isLoading}>
        Send
      </SubmitBtn>
    </FormUi>
  );
};

export default BookForm;
