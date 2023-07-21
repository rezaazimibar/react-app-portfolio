import * as Yup from "yup";
export const contactValidationSchema = Yup.object().shape({
  fullname: Yup.string().required("نام و نام خانوادگی الزامی میباشد"),
  email: Yup.string().required("نوشتن ایمیل الزامیست"),
  object: Yup.string().required("نوشتن عنوان الزامیست"),
  message: Yup.string().required("نوشتن پیام الزامیست"),
  recaptcha: Yup.string().required("تیک را بزن"),
});
