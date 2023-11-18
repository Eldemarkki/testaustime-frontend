"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FormikTextInput } from "../forms/FormikTextInput";
import { FormikPasswordInput } from "../forms/FormikPasswordInput";
import { Button, LoadingOverlay } from "@mantine/core";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getErrorMessage } from "../../lib/errorHandling/errorHandler";
import { showNotification } from "@mantine/notifications";
import { useTranslation } from "react-i18next";

const allowedRedirects = ["/profile", "/friends", "/leaderboards"];

export const LoginForm = () => {
  const [visible, setVisible] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const unsafeRedirect = String(searchParams.get("redirect") ?? "/");
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required(
          t("loginPage.validation.username.required"),
        ),
        password: Yup.string().required(
          t("loginPage.validation.password.required"),
        ),
      })}
      onSubmit={async (values) => {
        setVisible(true);
        try {
          try {
            await fetch("/api/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: values.username,
                password: values.password,
              }),
            });
          } catch (error) {
            // eslint-disable-next-line @typescript-eslint/no-throw-literal
            throw getErrorMessage(error);
          }

          router.push(
            allowedRedirects.includes(unsafeRedirect) ? unsafeRedirect : "/",
          );
          router.refresh();
        } catch (e) {
          showNotification({
            title: t("error"),
            color: "red",
            message: t("loginPage.invalidCredentials"),
          });
        }
        setVisible(false);
      }}
    >
      {() => (
        <Form style={{ width: "100%" }}>
          <FormikTextInput
            name="username"
            label={t("loginPage.username")}
            style={{ width: "100%" }}
          />
          <FormikPasswordInput
            name="password"
            label={t("loginPage.password")}
            mt={15}
            style={{ width: "100%" }}
          />
          <Button mt={20} type="submit">
            <LoadingOverlay visible={visible} />
            {t("loginPage.loginButton")}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
