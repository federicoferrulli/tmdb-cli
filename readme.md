# TMDB CLI

TMDB CLI is a command-line interface (CLI) application that allows you to interact with The Movie Database (TMDb) API to get information about movies. You can discover movies that are currently playing, popular, top-rated, and upcoming.

## Dependencies

The project uses the following dependencies:

  * [axios](https://axios-http.com/): To make HTTP requests to the TMDb API.
  * [chalk](https://github.com/chalk/chalk): To color the terminal output.
  * [commander](https://github.com/tj/commander.js/): For handling CLI commands and options.
  * [dotenv](https://github.com/motdotla/dotenv): For managing environment variables.
  * [ora](https://github.com/sindresorhus/ora): To display a spinner while fetching data.

## Installation and Setup

Follow these steps to get the project running.

**1. Clone the repository**

```bash
git clone <YOUR_REPOSITORY_URL>
cd <FOLDER_NAME>
```

**2. Install dependencies**

Make sure you have [Node.js](https://nodejs.org/) installed. Run the following command to install all the necessary dependencies:

```bash
npm install
```

**3. Set up environment variables**

This project requires access to the TMDb API. To do this, you need to create a `.env` file in the root of the project.

  * Create a file named `.env` in the main directory.
  * Add the following variables to the `.env` file:

<!-- end list -->

```
URITMDB=https://api.themoviedb.org
TOKEN=<YOUR_TMDB_ACCESS_TOKEN>
```

**How to get a TMDb access token:**

1.  Create an account on [The Movie Database](https://www.themoviedb.org/) website.
2.  Go to your account settings and select the "API" section.
3.  Request an API key.
4.  Under the API settings, create an "API Read Access Token (v4 auth)". Copy this token and paste it into your `.env` file as the `TOKEN` value.

**4. Make the CLI available globally**

Because this project is configured as a binary application in `package.json`, you can link it to make it available as a command-line tool anywhere on your system. From the root of the project, run:

```bash
npm link
```

This will create a symbolic link to the `tmdb-app` command.

## Usage

Once you have linked the package, you can call it directly from your terminal using the `tmdb-app` command.

### Syntax

```bash
tmdb-app --type <COMMAND> [OPTIONS]
```

### Available Commands

The following commands are available for the `--type` option:

  * `playing`: Shows movies currently playing in theaters.
  * `popular`: Shows the most popular movies.
  * `top`: Shows the top-rated movies.
  * `upcoming`: Shows upcoming movies.

### Options

You can customize your request using the following options:

  * `-t, --type <string>`: The type of request you want to make (e.g., `popular`). **(Required)**
  * `-l, --language <string>`: The language of the results (e.g., `it-IT`). The default is `en-US`.
  * `-p, --page <number>`: The page number of the results. The default is `1`.

### Usage Examples

**Get the most popular movies (in English):**

```bash
tmdb-app --type popular
```

**Get the second page of top-rated movies in Italian:**

```bash
tmdb-app --type top --language it-IT --page 2
```

**Get upcoming movies in Spanish:**

```bash
tmdb-app --type upcoming --language es-ES
```

## Project URL

[https://roadmap.sh/projects/tmdb-cli](https://axios-http.com/)https://roadmap.sh/projects/tmdb-cli