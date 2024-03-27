import { findOnArray, forEachObj } from "@/lib";
import type {
  BodyPartSchema,
  StyleSchema,
  UserSchema,
} from "@/settings/@types";

export interface Param {
  id: string;
  type: string;
  label: string;
}

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
  styles: StyleSchema[];
  artists: UserSchema[];
  translatedBodyParts: BodyPartSchema[];
}

const useFiltersChange = ({
  searchParams,
  styles: stylesData,
  artists: artistsData,
  translatedBodyParts: bodyPartsData,
}: Props) => {
  const searchParamsMap = new Map<string, Param[]>();

  forEachObj(searchParams, (value, { key }) => {
    const currentParams = searchParamsMap.get(key);

    switch (key) {
      // *------------ STYLES ------------* //
      case "styles": {
        // *------------ STRING
        if (typeof value === "string") {
          const style = findOnArray(stylesData, {
            property: "id",
            value,
          });
          if (!style) return;

          currentParams
            ? searchParamsMap.set(key, [
                ...currentParams,
                {
                  id: value,
                  type: key,
                  label: style.name,
                },
              ])
            : searchParamsMap.set(key, [
                {
                  id: value,
                  type: key,
                  label: style.name,
                },
              ]);
          // *------------ ARRAY
        } else if (Array.isArray(value)) {
          const styles = value.map((id) => {
            const style = findOnArray(stylesData, {
              property: "id",
              value: id,
            });

            if (style) {
              return {
                id,
                type: key,
                label: style.name,
              };
            }
            return {
              id,
              type: key,
              label: "",
            };
          });

          currentParams
            ? searchParamsMap.set(key, currentParams.concat(styles))
            : searchParamsMap.set(key, styles);
        }
        break;
      }

      // *------------ BODY PARTS ------------* //
      case "bodyParts": {
        // *------------ STRING
        if (typeof value === "string") {
          const bodyPart = findOnArray(bodyPartsData, {
            property: "id",
            value,
          });
          if (!bodyPart) return;

          currentParams
            ? searchParamsMap.set(key, [
                ...currentParams,
                {
                  id: value,
                  type: key,
                  label: bodyPart.name,
                },
              ])
            : searchParamsMap.set(key, [
                {
                  id: value,
                  type: key,
                  label: bodyPart.name,
                },
              ]);

          // *------------ ARRAY
        } else if (Array.isArray(value)) {
          const parts = value.map((id) => {
            const part = findOnArray(bodyPartsData, {
              property: "id",
              value: id,
            });

            if (part) {
              return {
                id,
                type: key,
                label: part.name,
              };
            }
            return {
              id,
              type: key,
              label: "",
            };
          });

          currentParams
            ? searchParamsMap.set(key, currentParams.concat(parts))
            : searchParamsMap.set(key, parts);
        }
        break;
      }

      // *------------ ARTISTS ------------* //
      case "artists": {
        // *------------ STRING
        if (typeof value === "string") {
          const artist = findOnArray(artistsData, {
            property: "id",
            value,
          });
          if (!artist) return;

          currentParams
            ? searchParamsMap.set(key, [
                ...currentParams,
                {
                  id: value,
                  type: key,
                  label: `${artist.name} ${artist.lastname}`,
                },
              ])
            : searchParamsMap.set(key, [
                {
                  id: value,
                  type: key,
                  label: `${artist.name} ${artist.lastname}`,
                },
              ]);

          // *------------ ARRAY
        } else if (Array.isArray(value)) {
          const artists = value.map((id) => {
            const artist = findOnArray(artistsData, {
              property: "id",
              value: id,
            });

            if (artist) {
              return {
                id,
                type: key,
                label: `${artist.name} ${artist.lastname}`,
              };
            }
            return {
              id,
              type: key,
              label: "",
            };
          });

          currentParams
            ? searchParamsMap.set(key, currentParams.concat(artists))
            : searchParamsMap.set(key, artists);
        }
        break;
      }

      default:
        {
          // *------------ STRING
          if (typeof value === "string") {
            currentParams
              ? searchParamsMap.set(key, [
                  ...currentParams,
                  { id: value, type: key, label: "" },
                ])
              : searchParamsMap.set(key, [{ id: value, type: key, label: "" }]);
            // *------------ ARRAY
          } else if (Array.isArray(value)) {
            const data = value.map((val) => ({
              id: val,
              type: key,
              label: "",
            }));

            currentParams
              ? searchParamsMap.set(key, currentParams.concat(data))
              : searchParamsMap.set(key, data);
          }
        }
        break;
    }
  });

  return { searchParamsMap };
};

export default useFiltersChange;
