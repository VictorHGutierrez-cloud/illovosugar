#!/usr/bin/env bash
# Create a new client proposal folder from this template.
# Usage: ./scripts/novo-cliente.sh "Acme Corp" "acme"
# Output: ~/Documents/proposta-acme

set -euo pipefail

CLIENT_NAME="${1:-}"
REPO_NAME="${2:-}"

if [[ -z "$CLIENT_NAME" || -z "$REPO_NAME" ]]; then
  echo "Usage: $0 \"Client Name\" \"repo-name\""
  echo "Example: $0 \"Acme Corp\" \"acme\""
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMPLATE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SLUG="$(echo "$REPO_NAME" | tr '[:upper:]' '[:lower:]' | tr -cd 'a-z0-9-')"
DEST="$HOME/Documents/proposta-${SLUG}"

if [[ -e "$DEST" ]]; then
  echo "Error: $DEST already exists."
  exit 1
fi

echo "Creating $DEST ..."
rsync -a \
  --exclude='node_modules' \
  --exclude='dist' \
  --exclude='.git' \
  "$TEMPLATE_DIR/" "$DEST/"

PARTICLE_LABEL="$(echo "$CLIENT_NAME" | tr '[:lower:]' '[:upper:]')"

replace_in_files() {
  local pattern="$1"
  local replacement="$2"
  shift 2
  for f in "$@"; do
    if [[ -f "$f" ]]; then
      sed -i '' "s|${pattern}|${replacement}|g" "$f"
    fi
  done
}

replace_in_files '__REPO_NAME__' "$SLUG" \
  "$DEST/vite.config.ts"

replace_in_files '__CLIENT_NAME__' "$CLIENT_NAME" \
  "$DEST/src/utils/constants.ts" \
  "$DEST/index.html"

replace_in_files 'CLIENT NAME' "$PARTICLE_LABEL" \
  "$DEST/src/components/ui/particle-text-effect.tsx"

replace_in_files '\[NOME CLIENTE\]' "$CLIENT_NAME" \
  "$DEST/src/utils/constants.ts"

# cliente.config.json from example
if [[ -f "$DEST/cliente.config.json.example" ]]; then
  cp "$DEST/cliente.config.json.example" "$DEST/cliente.config.json"
  # Simple JSON replace (no jq required)
  sed -i '' "s|Nome do Cliente|${CLIENT_NAME}|g" "$DEST/cliente.config.json"
  sed -i '' "s|nome-repo-github|${SLUG}|g" "$DEST/cliente.config.json"
fi

echo ""
echo "Done."
echo "  Folder:  $DEST"
echo "  Repo:    $SLUG"
echo "  Client:  $CLIENT_NAME"
echo ""
echo "Next steps:"
echo "  1. Paste transcript into $DEST/transcricao/reuniao.txt"
echo "  2. Open $DEST in Cursor"
echo "  3. Paste prompt from $DEST/docs/PROMPT-CURSOR-7-SLIDES.md"
echo "  4. cd $DEST && npm ci && npm run dev"
echo "  5. Open http://localhost:8080/${SLUG}/"
