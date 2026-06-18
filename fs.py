from pathlib import Path

TARGET = Path("/tmp/fileserver.py")  # ← change this to any path you want

TARGET.write_text(r'''

import os
import sys
import time
import socket
import signal
import threading
import subprocess
from pathlib import Path
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import unquote, urljoin, parse_qs
import mimetypes
import json
import cgi
import shutil

# ─────────────────────────────────────────
# CONFIG — change these if needed
# ─────────────────────────────────────────
PORT       = 9002                    # local port
SERVE_DIR  = Path("/hex")              # directory to browse  ← change this
PID_FILE   = Path("/tmp/fileserver.pid")
LOG_FILE   = Path("/tmp/fileserver.log")
TUNNEL_LOG = Path("/tmp/tunnel.log")

# ─────────────────────────────────────────
# HTML TEMPLATE  (inline, no files needed)
# ─────────────────────────────────────────
HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>FileServer — {path}</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Syne:wght@400;700;800&display=swap" rel="stylesheet"/>
<style>
  :root {{
    --bg:       #0a0a0f;
    --surface:  #111118;
    --border:   #1e1e2e;
    --accent:   #7fffb2;
    --accent2:  #5ec4ff;
    --muted:    #4a4a6a;
    --text:     #d0d0e8;
    --danger:   #ff6b6b;
    --warning:  #ffd93d;
  }}
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{
    background: var(--bg);
    color: var(--text);
    font-family: 'JetBrains Mono', monospace;
    min-height: 100vh;
    padding: 0;
  }}

  body::before {{
    content: '';
    position: fixed; inset: 0; pointer-events: none; z-index: 999;
    background: repeating-linear-gradient(
      0deg, transparent, transparent 2px,
      rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px
    );
  }}

  header {{
    padding: 24px 40px 20px;
    border-bottom: 1px solid var(--border);
    display: flex; align-items: center; gap: 16px;
    background: linear-gradient(135deg, #0d0d18 0%, #0a0a0f 100%);
    position: sticky; top: 0; z-index: 10;
    backdrop-filter: blur(8px);
  }}
  .logo {{
    font-family: 'Syne', sans-serif;
    font-size: 22px; font-weight: 800;
    color: var(--accent);
    letter-spacing: -0.5px;
  }}
  .logo span {{ color: var(--accent2); }}
  .badge {{
    background: var(--accent); color: #000;
    font-size: 9px; font-weight: 700;
    padding: 2px 7px; border-radius: 3px;
    letter-spacing: 1px; text-transform: uppercase;
  }}

  .breadcrumb {{
    padding: 14px 40px;
    font-size: 12px; color: var(--muted);
    border-bottom: 1px solid var(--border);
    display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
  }}
  .breadcrumb a {{
    color: var(--accent2); text-decoration: none;
    transition: color 0.15s;
  }}
  .breadcrumb a:hover {{ color: var(--accent); }}
  .breadcrumb .sep {{ color: var(--muted); }}

  .container {{ padding: 32px 40px; max-width: 1200px; }}

  .stats {{
    display: flex; gap: 24px; margin-bottom: 28px;
    font-size: 11px; color: var(--muted);
    text-transform: uppercase; letter-spacing: 1px;
  }}
  .stats span {{ color: var(--accent); font-weight: 600; }}

  .upload-section {{
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 32px;
  }}
  .upload-section h3 {{
    margin-bottom: 12px;
    font-size: 14px;
    color: var(--accent2);
  }}
  .upload-form {{
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
  }}
  .upload-form input[type="file"] {{
    background: var(--bg);
    border: 1px solid var(--border);
    padding: 8px 12px;
    border-radius: 4px;
    color: var(--text);
    font-family: inherit;
    font-size: 12px;
    flex: 1;
  }}
  .upload-form button, .delete-btn {{
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text);
    font-family: inherit;
    font-size: 11px;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.15s;
    text-decoration: none;
  }}
  .upload-form button:hover {{
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(127,255,178,0.06);
  }}
  .delete-btn:hover {{
    border-color: var(--danger);
    color: var(--danger);
    background: rgba(255,107,107,0.06);
  }}

  table {{
    width: 100%; border-collapse: collapse;
    font-size: 13px;
  }}
  thead tr {{
    border-bottom: 1px solid var(--border);
  }}
  thead th {{
    text-align: left; padding: 10px 16px;
    color: var(--muted); font-size: 10px;
    text-transform: uppercase; letter-spacing: 1.5px;
    font-weight: 600;
  }}
  tbody tr {{
    border-bottom: 1px solid rgba(30,30,46,0.5);
    transition: background 0.1s;
  }}
  tbody tr:hover {{ background: rgba(127,255,178,0.04); }}
  tbody td {{ padding: 11px 16px; }}

  .icon {{ width: 28px; font-size: 15px; opacity: 0.85; }}
  .name a {{
    color: var(--text); text-decoration: none;
    transition: color 0.15s;
  }}
  .name a:hover {{ color: var(--accent); }}
  .dir .name a {{ color: var(--accent2); }}
  .size, .modified {{ color: var(--muted); font-size: 11px; text-align: right; }}

  .dl-btn, .delete-btn {{
    background: transparent; border: 1px solid var(--border);
    color: var(--muted); font-family: inherit; font-size: 10px;
    padding: 3px 10px; border-radius: 3px; cursor: pointer;
    text-decoration: none; transition: all 0.15s;
    letter-spacing: 0.5px;
    display: inline-block;
  }}
  .dl-btn:hover {{
    border-color: var(--accent); color: var(--accent);
    background: rgba(127,255,178,0.06);
  }}
  .delete-btn:hover {{
    border-color: var(--danger); color: var(--danger);
    background: rgba(255,107,107,0.06);
  }}

  .empty {{
    text-align: center; padding: 60px;
    color: var(--muted); font-size: 13px;
  }}

  .message {{
    padding: 12px 20px;
    margin-bottom: 20px;
    border-radius: 4px;
    font-size: 12px;
    display: none;
  }}
  .message.success {{
    background: rgba(127,255,178,0.1);
    border: 1px solid var(--accent);
    color: var(--accent);
  }}
  .message.error {{
    background: rgba(255,107,107,0.1);
    border: 1px solid var(--danger);
    color: var(--danger);
  }}

  footer {{
    margin-top: 48px; padding: 20px 40px;
    border-top: 1px solid var(--border);
    font-size: 10px; color: var(--muted);
    letter-spacing: 0.5px;
  }}
  footer span {{ color: var(--accent); }}

  @media (max-width: 600px) {{
    header, .breadcrumb, .container {{ padding-left: 16px; padding-right: 16px; }}
    .size, .modified {{ display: none; }}
  }}
</style>
<script>
function showMessage(msg, type) {{
  const msgDiv = document.getElementById('message');
  msgDiv.textContent = msg;
  msgDiv.className = 'message ' + type;
  msgDiv.style.display = 'block';
  setTimeout(() => {{
    msgDiv.style.display = 'none';
  }}, 3000);
}}

function deleteFile(path, filename) {{
  if(confirm('Delete ' + filename + '?')) {{
    fetch('/delete?path=' + encodeURIComponent(path), {{
      method: 'POST'
    }}).then(res => res.json()).then(data => {{
      if(data.success) {{
        showMessage('Deleted: ' + filename, 'success');
        setTimeout(() => location.reload(), 500);
      }} else {{
        showMessage('Error: ' + data.error, 'error');
      }}
    }});
  }}
}}
</script>
</head>
<body>
<header>
  <div class="logo">File<span>Server</span></div>
  <div class="badge">Public</div>
</header>

<div class="breadcrumb">
  {breadcrumb}
</div>

<div class="container">
  <div id="message" class="message"></div>
  
  <div class="upload-section">
    <h3>📤 Upload File</h3>
    <form class="upload-form" action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file" required/>
      <button type="submit">Upload</button>
    </form>
  </div>

  <div class="stats">
    {dirs_count} directories &nbsp;·&nbsp; <span>{files_count}</span> files &nbsp;·&nbsp; {total_size}
  </div>

  <table>
    <thead>
      <tr>
        <th class="icon"></th>
        <th>Name</th>
        <th style="text-align:right">Size</th>
        <th style="text-align:right">Modified</th>
        <th style="text-align:right">Actions</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
  {empty}
</div>

<footer>
  FileServer &nbsp;·&nbsp; serving <span>{serve_dir}</span> &nbsp;·&nbsp; {item_count} items
</footer>
</body>
</html>"""


# ─────────────────────────────────────────
# HTTP HANDLER
# ─────────────────────────────────────────

def human_size(size):
    for unit in ["B", "KB", "MB", "GB", "TB"]:
        if size < 1024:
            return f"{size:.0f} {unit}" if unit == "B" else f"{size:.1f} {unit}"
        size /= 1024
    return f"{size:.1f} PB"


def build_breadcrumb(url_path):
    parts = [p for p in url_path.strip("/").split("/") if p]
    crumbs = [f'<a href="/">~</a>']
    so_far = ""
    for part in parts:
        so_far += f"/{part}"
        crumbs.append(f'<span class="sep">/</span><a href="{so_far}/">{part}</a>')
    return " ".join(crumbs)


class FileHandler(BaseHTTPRequestHandler):

    def log_message(self, fmt, *args):
        pass  # suppress default logging

    def do_GET(self):
        url_path = unquote(self.path.split("?")[0])
        fs_path  = (SERVE_DIR / url_path.lstrip("/")).resolve()

        # Security: prevent path traversal
        try:
            fs_path.relative_to(SERVE_DIR.resolve())
        except ValueError:
            self.send_error(403, "Forbidden")
            return

        if fs_path.is_dir():
            self._serve_dir(fs_path, url_path)
        elif fs_path.is_file():
            self._serve_file(fs_path)
        else:
            self.send_error(404, "Not Found")

    def do_POST(self):
        url_path = unquote(self.path.split("?")[0])
        
        if url_path == "/upload":
            self._handle_upload()
        elif url_path == "/delete":
            self._handle_delete()
        else:
            self.send_error(404, "Not Found")

    def _handle_upload(self):
        content_type = self.headers.get('Content-Type', '')
        
        if not content_type.startswith('multipart/form-data'):
            self.send_error(400, "Bad Request")
            return

        form = cgi.FieldStorage(
            fp=self.rfile,
            headers=self.headers,
            environ={'REQUEST_METHOD': 'POST'}
        )
        
        if 'file' not in form:
            self._send_json_response(False, "No file uploaded")
            return

        file_item = form['file']
        if not file_item.filename:
            self._send_json_response(False, "No file selected")
            return

        # Get current directory from referer or default to root
        referer = self.headers.get('Referer', '')
        if '?' in referer:
            referer = referer.split('?')[0]
        current_path = referer.replace(f'http://localhost:{PORT}', '').replace('http://0.0.0.0', '')
        
        target_dir = SERVE_DIR / current_path.lstrip("/")
        target_dir.mkdir(parents=True, exist_ok=True)
        
        # Save the file
        filename = os.path.basename(file_item.filename)
        target_path = target_dir / filename
        
        try:
            with open(target_path, 'wb') as f:
                f.write(file_item.file.read())
            self._send_json_response(True, f"Uploaded {filename}")
        except Exception as e:
            self._send_json_response(False, str(e))

    def _handle_delete(self):
        query = parse_qs(self.path.split('?')[1]) if '?' in self.path else {}
        file_path = query.get('path', [''])[0]
        
        if not file_path:
            self._send_json_response(False, "No file specified")
            return
        
        fs_path = (SERVE_DIR / file_path.lstrip("/")).resolve()
        
        # Security check
        try:
            fs_path.relative_to(SERVE_DIR.resolve())
        except ValueError:
            self._send_json_response(False, "Forbidden")
            return
        
        try:
            if fs_path.is_file():
                fs_path.unlink()
                self._send_json_response(True, "File deleted")
            elif fs_path.is_dir():
                shutil.rmtree(fs_path)
                self._send_json_response(True, "Directory deleted")
            else:
                self._send_json_response(False, "File not found")
        except Exception as e:
            self._send_json_response(False, str(e))

    def _send_json_response(self, success, message):
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        response = json.dumps({"success": success, "message": message})
        self.wfile.write(response.encode())

    def _serve_dir(self, fs_path, url_path):
        try:
            entries = sorted(fs_path.iterdir(), key=lambda p: (p.is_file(), p.name.lower()))
        except PermissionError:
            self.send_error(403, "Permission Denied")
            return

        rows      = []
        dirs_n    = 0
        files_n   = 0
        total_sz  = 0

        # Parent dir link
        if url_path.strip("/"):
            parent = "/" + "/".join(url_path.strip("/").split("/")[:-1])
            rows.append(f"""
              <tr class="dir">
                <td class="icon">📁</td>
                <td class="name"><a href="{parent}/">..</a></td>
                <td class="size">—</td>
                <td class="modified">—</td>
                <td style="text-align:right">—</td>
               </tr>""")

        for entry in entries:
            try:
                stat = entry.stat()
            except (PermissionError, OSError):
                continue

            name     = entry.name
            mtime    = time.strftime("%Y-%m-%d %H:%M", time.localtime(stat.st_mtime))
            href_base = (url_path.rstrip("/") + "/" + name)
            current_path = (url_path.rstrip("/") + "/" + name).lstrip("/")

            if entry.is_dir():
                dirs_n += 1
                rows.append(f"""
                  <tr class="dir">
                    <td class="icon">📂</td>
                    <td class="name"><a href="{href_base}/">{name}/</a></td>
                    <td class="size">—</td>
                    <td class="modified">{mtime}</td>
                    <td style="text-align:right">
                      <button class="delete-btn" onclick="deleteFile('{current_path}', '{name}')">🗑 delete</button>
                    </td>
                   </tr>""")
            else:
                files_n  += 1
                sz        = stat.st_size
                total_sz += sz
                rows.append(f"""
                  <tr>
                    <td class="icon">📄</td>
                    <td class="name"><a href="{href_base}">{name}</a></td>
                    <td class="size">{human_size(sz)}</td>
                    <td class="modified">{mtime}</td>
                    <td style="text-align:right">
                      <a class="dl-btn" href="{href_base}?download=1">↓ download</a>
                      <button class="delete-btn" onclick="deleteFile('{current_path}', '{name}')">🗑 delete</button>
                    </td>
                   </tr>""")

        empty_html = ""
        if not rows:
            empty_html = '<div class="empty">📭 &nbsp; This directory is empty.</div>'

        html = HTML_TEMPLATE.format(
            path        = url_path or "/",
            breadcrumb  = build_breadcrumb(url_path),
            dirs_count  = dirs_n,
            files_count = files_n,
            total_size  = human_size(total_sz),
            rows        = "\n".join(rows),
            empty       = empty_html,
            serve_dir   = str(SERVE_DIR),
            item_count  = dirs_n + files_n,
        )

        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.end_headers()
        self.wfile.write(html.encode())

    def _serve_file(self, fs_path):
        force_dl = "download=1" in self.path
        mime, _  = mimetypes.guess_type(str(fs_path))
        mime     = mime or "application/octet-stream"

        try:
            data = fs_path.read_bytes()
        except PermissionError:
            self.send_error(403, "Permission Denied")
            return

        self.send_response(200)
        self.send_header("Content-Type", mime)
        self.send_header("Content-Length", str(len(data)))
        if force_dl:
            self.send_header("Content-Disposition", f'attachment; filename="{fs_path.name}"')
        self.end_headers()
        self.wfile.write(data)


# ─────────────────────────────────────────
# SERVER THREAD
# ─────────────────────────────────────────

_server_instance  = None
_server_thread    = None
_tunnel_process   = None

def _run_server():
    global _server_instance
    _server_instance = HTTPServer(("0.0.0.0", PORT), FileHandler)
    _server_instance.serve_forever()


CLOUDFLARED = Path("/tmp/cloudflared")

def _download_cloudflared():
    """Download cloudflared binary if not already present."""
    if CLOUDFLARED.exists():
        return True
    import urllib.request
    print("   Downloading cloudflared (~35MB, one-time)...")
    url = "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64"
    try:
        urllib.request.urlretrieve(url, CLOUDFLARED)
        CLOUDFLARED.chmod(0o755)
        print("   cloudflared ready.")
        return True
    except Exception as e:
        print(f"   Download failed: {e}")
        return False


def _start_tunnel():
    """Cloudflare quick tunnel — no account, no SSH, no root needed."""
    global _tunnel_process
    if not _download_cloudflared():
        return
    _tunnel_process = subprocess.Popen(
        [str(CLOUDFLARED), "tunnel", "--url", f"http://localhost:{PORT}"],
        stdout=open(TUNNEL_LOG, "w"),
        stderr=subprocess.STDOUT,
        preexec_fn=os.setpgrp
    )


def _get_public_url(timeout=40):
    """Poll tunnel log until we see the public URL."""
    import re
    deadline = time.time() + timeout
    while time.time() < deadline:
        try:
            log = TUNNEL_LOG.read_text()
            m = re.search(r"https://[a-z0-9\-]+\.trycloudflare\.com", log)
            if m:
                return m.group(0)
        except Exception:
            pass
        time.sleep(1)
    return None


def start_server():
    global _server_thread

    # Already running?
    if _server_thread and _server_thread.is_alive():
        print("⚡ Server already running.")
        return

    print(f"🚀 Starting FileServer on port {PORT}...")
    print(f"📁 Serving: {SERVE_DIR}")

    # Start HTTP server in background thread
    _server_thread = threading.Thread(target=_run_server, daemon=True)
    _server_thread.start()
    time.sleep(0.5)

    # Start Cloudflare tunnel
    print("🌐 Opening public tunnel via Cloudflare...")
    _start_tunnel()

    # Wait for public URL
    url = _get_public_url(timeout=40)

    if url:
        print(f"\n{'─'*55}")
        print(f"  ✅  Public URL : {url}")
        print(f"  🏠  Local URL  : http://localhost:{PORT}")
        print(f"  📂  Directory  : {SERVE_DIR}")
        print(f"{'─'*55}")
        print(f"\n  Run stop_server() to shut down.\n")
    else:
        print("⚠️  Tunnel URL not found yet — check logs:")
        print(f"   open('{TUNNEL_LOG}').read()")
        print(f"\n   Local server is running at http://localhost:{PORT}")


def stop_server():
    global _server_instance, _tunnel_process
    if _server_instance:
        _server_instance.shutdown()
        print("🛑 HTTP server stopped.")
    if _tunnel_process:
        _tunnel_process.terminate()
        print("🛑 Tunnel stopped.")
    try:
        TUNNEL_LOG.unlink(missing_ok=True)
    except Exception:
        pass


def server_status():
    running = _server_thread and _server_thread.is_alive()
    print(f"HTTP server : {'✅ running' if running else '❌ stopped'}")
    try:
        log = TUNNEL_LOG.read_text()
        import re
        urls = re.findall(r"https://[^\s]+", log)
        if urls:
            print(f"Public URL  : {urls[-1]}")
        else:
            print("Public URL  : (not found yet)")
    except Exception:
        print("Public URL  : (tunnel not started)")


# ─────────────────────────────────────────
# AUTO-START
# ─────────────────────────────────────────
start_server()


   
    
''')

print(f"✅  fileserver.py written to: {TARGET}")
print(f"\n   Now start it with:\n")
print(f'   exec(open("{TARGET}").read())')
