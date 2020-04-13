FROM react-builder as build

COPY public/ public/
COPY src/ src/

RUN npm run build

FROM nginx:alpine

COPY --from=build /var/build/build/ /usr/share/nginx/html/
