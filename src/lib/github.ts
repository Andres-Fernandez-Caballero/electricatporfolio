export interface GithubResponse {
  repos_url: string
  company: string
  avatar_url: string
  name: string
  bio: string
  public_repos: number
}

interface GithubRepo {
  id: number
  name: string
  full_name: string
  private: boolean
  html_url: string
  description: string
  url: string
  languages_url: string
  clone_url: string
  created_at: string
  updated_at: string
}

export async function fetchUserData(): Promise<GithubResponse | null> {
  try {
    const res = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`Error fetching user data: ${res.statusText}`);
    return (await res.json()) as GithubResponse;
  } catch (error) {
    console.error("fetchUserData error:", error);
    throw new Error("Unable to fetch user data");
  }
}

export async function fetchRepositories(reposUrl: string): Promise<GithubRepo[]> {
  try {
    const res = await fetch(reposUrl, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });

    if (!res.ok) throw new Error(`Error fetching repositories: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error("fetchRepositories error:", error);
    throw new Error("Unable to fetch repositories");
  }
}

export async function getLanguagesFromRepos(repos: GithubRepo[]): Promise<string[]> {
  try {
    const languages = new Set<string>();

    const languagePromises = repos.map(async (repo) => {
      const lang = await fetchLanguages(repo.languages_url);
      Object.keys(lang).forEach((l) => languages.add(l));
    });

    await Promise.all(languagePromises);
    return Array.from(languages);
  } catch (error) {
    console.error("getLanguagesFromRepos error:", error);
    throw new Error("Unable to fetch languages from repositories");
  }
}

async function fetchLanguages(languagesUrl: string): Promise<Record<string, unknown>> {
  try {
    const res = await fetch(languagesUrl, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });

    if (!res.ok) throw new Error(`Error fetching languages: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error("fetchLanguages error:", error);
    throw new Error("Unable to fetch repository languages");
  }
}
