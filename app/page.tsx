import { execSync } from 'child_process';
import HomeScreen from './screens/home-page';

const GITHUB_REPO = 'https://github.com/kingbary/my-portfolio-v3';

function getGitInfo() {
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
    const raw = execSync('git log -1 --format="%cr|%h|%s"').toString().trim();
    const [lastCommit, commitHash, ...msgParts] = raw.split('|');
    return { branch, lastCommit, commitHash, commitMessage: msgParts.join('|'), repoUrl: GITHUB_REPO };
  } catch {
    return { branch: 'main', lastCommit: 'unknown', commitHash: '', commitMessage: '', repoUrl: GITHUB_REPO };
  }
}

export default function Page() {
  const git = getGitInfo();
  return <HomeScreen git={git} />;
}
