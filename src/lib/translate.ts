import { translate } from "@vitalets/google-translate-api";

const translateToEn = async (
  str: string
): Promise<{ text?: string; error?: string }> => {
  try {
    const { text } = await translate(str, { to: "fr" });
    return {
      text: text,
    };
  } catch (error) {
    return {
      error: "There was a error during translation, Please try again later.",
    };
  }
};

export default translateToEn;
