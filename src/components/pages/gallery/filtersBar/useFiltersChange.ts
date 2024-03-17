import { stylesDevelopment, usersDevelopment } from "@/development";
import { findOnArray, forEachObj } from "@/lib";

interface Param {
  id: string;
  type: string;
  label: string;
}

const useFiltersChange = (
  searchParams: {
    [key: string]: string | string[] | undefined;
  },
  translatedBodyParts: {
    name: string;
    id: string;
    isDeleted: boolean;
  }[]
) => {
  const searchParamsMap = new Map<string, Param[]>();

  forEachObj(searchParams, (value, { key }) => {
    const currentParams = searchParamsMap.get(key);

    switch (key) {
      // *------------ STYLES ------------* //
      case "styles": {
        // *------------ STRING
        if (typeof value === "string") {
          const style = findOnArray(stylesDevelopment, {
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
            const style = findOnArray(stylesDevelopment, {
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
          const bodyPart = findOnArray(translatedBodyParts, {
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
            const part = findOnArray(translatedBodyParts, {
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
          const artist = findOnArray(usersDevelopment, {
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
                  label: `${artist.firstName} ${artist.lastName}`,
                },
              ])
            : searchParamsMap.set(key, [
                {
                  id: value,
                  type: key,
                  label: `${artist.firstName} ${artist.lastName}`,
                },
              ]);

          // *------------ ARRAY
        } else if (Array.isArray(value)) {
          const artists = value.map((id) => {
            const artist = findOnArray(usersDevelopment, {
              property: "id",
              value: id,
            });

            if (artist) {
              return {
                id,
                type: key,
                label: `${artist.firstName} ${artist.lastName}`,
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
    }
  });

  return { searchParamsMap };
};

export default useFiltersChange;
