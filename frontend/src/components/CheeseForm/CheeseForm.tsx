import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import useGetCheese from "../../hooks/useGetCheese";
import { createCheese, deleteCheese, updateCheese } from "../../requests";
import { BaseCheeseItem } from "../../types";
import { ErrorAlert } from "../ErrorAlert";
import { LoadingIndicator } from "../LoadingIndicator";

const Wrapper = styled.div``;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin: 0 25% 2% 25%;
  height: 35px;
`;

const StyledErrorMessage = styled.span`
  margin: 0 25% 2% 25%;
`;

const StyledButton = styled.button`
  margin: 0 25% 2% 25%;
  width: 20%;
  height: 35px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  margin-bottom: 10px;
  text-align: center;
`;

type Action = "create" | "update";

const CheeseForm = () => {
  const { id } = useParams();
  const { cheese, loading, hasError } = useGetCheese(id);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const history = useNavigate();
  // Check if the form is creating or updating a cheese. Re-use this for button names/actions etc
  const itemAction: Action = id ? "update" : "create";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BaseCheeseItem>();
  const onSubmit = handleSubmit(async (data) => {
    try {
      // Back-end API stores data as cents, accepting dollars on the front-end. Convert to cents
      const item = data;
      item.price *= 100;
      setSubmitting(true);
      if (!id) {
        await createCheese(item);

        history("/");
      }
      // If we have an ID,
      if (id) {
        await updateCheese(id, item);
      }

      history("/");
    } catch (e) {
      // TODO: Update to utilise error messages / validation error's from the back-end API
      setError("Sorry, we ran into an error");
    } finally {
      setSubmitting(false);
    }
  });

  const handleDelete = async () => {
    try {
      if (id) {
        await deleteCheese(id);
        history("/");
      }
    } catch (e) {
      // TODO: Update to utilise error messages / validation error's from the back-end API
      setError("Sorry, we ran into an error");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (!id) {
      reset({ name: "", colour: "", image: "", price: 0 });
    }
  }, [id]);

  useEffect(() => {
    // reset form with user data
    if (cheese?.price) {
      cheese.price /= 100;
    }
    reset(cheese);
  }, [cheese]);

  if (loading) {
    return <LoadingIndicator loading />;
  }

  if (hasError || error) {
    // TODO: Update to utilise error messages / validation error's from the back-end API and handle scenario where an ID doesn't exist

    return <ErrorAlert />;
  }
  return (
    <Wrapper>
      <StyledTitle>
        {itemAction === "update" ? "Update" : "Create"} Cheese
      </StyledTitle>
      <StyledForm onSubmit={onSubmit}>
        <StyledInput
          id="name"
          {...register("name", { required: true, minLength: 2, maxLength: 25 })}
          placeholder="Name"
        />
        {errors.name && errors.name.type === "required" && (
          <StyledErrorMessage>Must have a name</StyledErrorMessage>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <StyledErrorMessage>
            Name must have at least 2 characters
          </StyledErrorMessage>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <StyledErrorMessage>
            Must be less than 25 characters
          </StyledErrorMessage>
        )}
        <StyledInput
          id="colour"
          {...register("colour", {
            required: true,
            minLength: 2,
            maxLength: 25,
          })}
          placeholder="Colour"
        />
        {errors.colour && errors.colour.type === "required" && (
          <StyledErrorMessage>Must have a colour</StyledErrorMessage>
        )}
        {errors.colour && errors.colour.type === "minLength" && (
          <StyledErrorMessage>
            colour must have at least 2 characters
          </StyledErrorMessage>
        )}
        {errors.colour && errors.colour.type === "maxLength" && (
          <StyledErrorMessage>
            Must be less than 25 characters
          </StyledErrorMessage>
        )}
        <StyledInput
          id="image"
          {...register("image", {
            required: true,
            minLength: 2,
            maxLength: 500,
          })}
          placeholder="Image"
        />
        {errors.image && errors.image.type === "required" && (
          <StyledErrorMessage>Must have an image</StyledErrorMessage>
        )}
        {errors.image && errors.image.type === "minLength" && (
          <StyledErrorMessage>
            image must have at least 2 characters
          </StyledErrorMessage>
        )}
        {errors.image && errors.image.type === "maxLength" && (
          <StyledErrorMessage>
            Must be less than 150 characters
          </StyledErrorMessage>
        )}
        <StyledInput
          id="price"
          type="text"
          {...register("price", {
            required: true,
            pattern: {
              value: /^\d*\.?\d*$/,
              message: "Entered value does not match email format",
            },
          })}
          placeholder="Price e.g. 1.50"
        />
        {errors.price && errors.price.type === "pattern" && (
          <StyledErrorMessage>
            Must have a valid price, e.g. 1.50
          </StyledErrorMessage>
        )}
        {errors.price && errors.price.type === "required" && (
          <StyledErrorMessage>Must have a price</StyledErrorMessage>
        )}
        <ButtonWrapper>
          {id && (
            <StyledButton
              disabled={submitting}
              onClick={handleDelete}
              type="button"
            >
              Delete Cheese
            </StyledButton>
          )}
          <StyledButton disabled={submitting} type="submit">
            {itemAction === "update" ? "Update" : "Submit"}
          </StyledButton>
        </ButtonWrapper>
      </StyledForm>
    </Wrapper>
  );
};

export default CheeseForm;
