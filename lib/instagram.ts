export function getInstagramContactUrl(): string {
  const username = process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME;

  if (!username) {
    return 'https://www.instagram.com/';
  }

  return `https://www.instagram.com/${username}/`;
}
