# React-Dessert-Shopping-Cart-List

My solution to the FrontEnd Mentor Product list with cart project.

## Table of contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Live Site](#site)
  - [Docker Image](#Docker-Image)
- [Features](#features)
  - [Built with](#built-with)

## Overview

### Screenshots

![react dessert shopping cart list multidisplay](https://github.com/user-attachments/assets/941dfeae-0fbe-4b76-8320-75f6023f2edf)

![react dessert shopping cart list darkMode](https://github.com/user-attachments/assets/94f21aa4-4db9-44fa-a732-6f48bfd36d41)

![react dessert shopping cart list mobile form darkMode](https://github.com/user-attachments/assets/7ef6cf4b-8479-4bc6-bf45-4f79dd2774d9)

### Site

- Live Site URL: https://ejbolts.github.io/React-Dessert-Shopping-Cart-List

### Docker Image

To run the production build of the application locally using Docker, follow these steps:

1. **Pull the Docker Image**:

```
docker pull ejbolts/react-desert-shoppinglist-app
```

2. **Run the Docker Container**:

```
docker run --name react-dessert-app --rm -p 3000:80 ejbolts/react-desert-shoppinglist-app
```

## Features

- Filter and search for desserts
- Toggle between light and dark themes
- Display modals for detail form, cart and user profile

### Built with

- React
- Tailwind CSS
- TanStack/React Query
- Redux
