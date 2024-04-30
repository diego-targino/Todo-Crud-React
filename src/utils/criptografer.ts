import * as crypto from "crypto";

export function EncriptStringSha512(value: string) {
  const result = crypto.createHash("sha512").update(value).digest("hex");

  return result;
}
