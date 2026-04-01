"use client";

import { useState, useRef } from "react";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [uploads, setUploads] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  // 简单密码验证（生产环境应使用 Supabase Auth）
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsLoggedIn(true);
      setMessage("");
    } else {
      setMessage("密码错误");
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const upload = {
        id: Date.now() + Math.random(),
        file,
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + " MB",
        type: file.type,
        status: "ready",
        preview: file.type.startsWith("video/")
          ? URL.createObjectURL(file)
          : file.type.startsWith("image/")
          ? URL.createObjectURL(file)
          : null,
      };
      setUploads((prev) => [...prev, upload]);
    });
  };

  const handleUpload = async (upload) => {
    setUploading(true);
    setMessage(`正在上传 ${upload.name}...`);

    // 模拟上传（实际接入 Supabase Storage 时替换）
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setUploads((prev) =>
      prev.map((u) =>
        u.id === upload.id ? { ...u, status: "uploaded" } : u
      )
    );
    setMessage(`✅ ${upload.name} 上传成功！`);
    setUploading(false);
  };

  const handleRemove = (id) => {
    setUploads((prev) => prev.filter((u) => u.id !== id));
  };

  if (!isLoggedIn) {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.loginCard}>
          <h1 style={styles.loginTitle}>🔐 Admin Access</h1>
          <p style={styles.loginSubtitle}>Enter password to manage content</p>
          <form onSubmit={handleLogin} style={styles.loginForm}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={styles.input}
              autoFocus
            />
            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>
          {message && <p style={styles.error}>{message}</p>}
          <a href="/" style={styles.backLink}>← Back to site</a>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>📂 Content Manager</h1>
        <div style={styles.headerActions}>
          <a href="/" style={styles.backLink}>← Back to site</a>
          <button onClick={() => setIsLoggedIn(false)} style={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </div>

      {message && <div style={styles.messageBar}>{message}</div>}

      {/* Upload Area */}
      <div
        style={styles.dropZone}
        onClick={() => fileInputRef.current?.click()}
      >
        <div style={styles.dropIcon}>📁</div>
        <p style={styles.dropText}>Click to select files or drag & drop</p>
        <p style={styles.dropHint}>
          Supports: MP4, MOV, WebM, PNG, JPG, PDF
        </p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="video/*,image/*,.pdf"
          onChange={handleFileSelect}
          style={{ display: "none" }}
        />
      </div>

      {/* Upload Queue */}
      {uploads.length > 0 && (
        <div style={styles.queue}>
          <h2 style={styles.queueTitle}>Upload Queue ({uploads.length})</h2>
          {uploads.map((upload) => (
            <div key={upload.id} style={styles.queueItem}>
              <div style={styles.queuePreview}>
                {upload.preview && upload.type.startsWith("video/") ? (
                  <video
                    src={upload.preview}
                    style={styles.previewMedia}
                    muted
                  />
                ) : upload.preview ? (
                  <img
                    src={upload.preview}
                    alt=""
                    style={styles.previewMedia}
                  />
                ) : (
                  <span style={styles.previewPlaceholder}>📄</span>
                )}
              </div>
              <div style={styles.queueInfo}>
                <p style={styles.queueName}>{upload.name}</p>
                <p style={styles.queueSize}>{upload.size} · {upload.type}</p>
              </div>
              <div style={styles.queueActions}>
                {upload.status === "ready" && (
                  <button
                    onClick={() => handleUpload(upload)}
                    disabled={uploading}
                    style={{
                      ...styles.uploadBtn,
                      opacity: uploading ? 0.5 : 1,
                    }}
                  >
                    Upload
                  </button>
                )}
                {upload.status === "uploaded" && (
                  <span style={styles.uploaded}>✅ Done</span>
                )}
                <button
                  onClick={() => handleRemove(upload.id)}
                  style={styles.removeBtn}
                  title="Remove"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Instructions */}
      <div style={styles.instructions}>
        <h3 style={styles.instructionsTitle}>📝 How to update content</h3>
        <ol style={styles.instructionsList}>
          <li>Upload video/image files above</li>
          <li>
            Edit <code style={styles.code}>data/content.js</code> to update
            text, links, and file references
          </li>
          <li>
            Set <code style={styles.code}>thumbnail</code> and{" "}
            <code style={styles.code}>videoUrl</code> to point to uploaded
            files in <code style={styles.code}>/public/</code>
          </li>
          <li>Redeploy to Vercel to publish changes</li>
        </ol>
      </div>
    </div>
  );
}

const styles = {
  loginContainer: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f172a",
    padding: "24px",
  },
  loginCard: {
    background: "#1e293b",
    borderRadius: "12px",
    padding: "48px",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
    border: "1px solid rgba(148, 163, 184, 0.1)",
  },
  loginTitle: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#e2e8f0",
    marginBottom: "8px",
  },
  loginSubtitle: {
    fontSize: "14px",
    color: "#94a3b8",
    marginBottom: "32px",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "12px 16px",
    background: "#0f172a",
    border: "1px solid rgba(148, 163, 184, 0.2)",
    borderRadius: "8px",
    color: "#e2e8f0",
    fontSize: "15px",
    outline: "none",
    fontFamily: "Inter, system-ui, sans-serif",
  },
  button: {
    padding: "12px",
    background: "#5eead4",
    color: "#0f172a",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "15px",
    cursor: "pointer",
    fontFamily: "Inter, system-ui, sans-serif",
  },
  error: {
    color: "#f87171",
    fontSize: "13px",
    marginTop: "12px",
  },
  container: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "#e2e8f0",
    padding: "32px",
    maxWidth: "960px",
    margin: "0 auto",
    fontFamily: "Inter, system-ui, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
    flexWrap: "wrap",
    gap: "16px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "700",
  },
  headerActions: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
  backLink: {
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "14px",
    marginTop: "16px",
    display: "inline-block",
  },
  logoutBtn: {
    padding: "8px 16px",
    background: "rgba(148, 163, 184, 0.1)",
    color: "#94a3b8",
    border: "1px solid rgba(148, 163, 184, 0.2)",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "Inter, system-ui, sans-serif",
  },
  messageBar: {
    padding: "12px 16px",
    background: "rgba(94, 234, 212, 0.1)",
    borderRadius: "8px",
    color: "#5eead4",
    fontSize: "14px",
    marginBottom: "24px",
    border: "1px solid rgba(94, 234, 212, 0.2)",
  },
  dropZone: {
    border: "2px dashed rgba(148, 163, 184, 0.2)",
    borderRadius: "12px",
    padding: "48px",
    textAlign: "center",
    cursor: "pointer",
    marginBottom: "32px",
    transition: "all 0.2s ease",
  },
  dropIcon: {
    fontSize: "48px",
    marginBottom: "16px",
  },
  dropText: {
    fontSize: "16px",
    color: "#e2e8f0",
    fontWeight: "500",
    marginBottom: "8px",
  },
  dropHint: {
    fontSize: "13px",
    color: "#64748b",
  },
  queue: {
    marginBottom: "32px",
  },
  queueTitle: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "16px",
    color: "#e2e8f0",
  },
  queueItem: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "12px 16px",
    background: "rgba(30, 41, 59, 0.5)",
    borderRadius: "8px",
    marginBottom: "8px",
    border: "1px solid rgba(148, 163, 184, 0.1)",
  },
  queuePreview: {
    width: "56px",
    height: "40px",
    borderRadius: "4px",
    overflow: "hidden",
    background: "#0f172a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  previewMedia: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  previewPlaceholder: {
    fontSize: "20px",
    opacity: 0.4,
  },
  queueInfo: {
    flex: 1,
    minWidth: 0,
  },
  queueName: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#e2e8f0",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  queueSize: {
    fontSize: "12px",
    color: "#64748b",
    marginTop: "2px",
  },
  queueActions: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexShrink: 0,
  },
  uploadBtn: {
    padding: "6px 16px",
    background: "#5eead4",
    color: "#0f172a",
    border: "none",
    borderRadius: "6px",
    fontWeight: "600",
    fontSize: "13px",
    cursor: "pointer",
    fontFamily: "Inter, system-ui, sans-serif",
  },
  uploaded: {
    color: "#5eead4",
    fontSize: "13px",
    fontWeight: "500",
  },
  removeBtn: {
    width: "28px",
    height: "28px",
    background: "transparent",
    border: "1px solid rgba(148, 163, 184, 0.2)",
    borderRadius: "6px",
    color: "#64748b",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontFamily: "Inter, system-ui, sans-serif",
  },
  instructions: {
    background: "rgba(30, 41, 59, 0.5)",
    borderRadius: "12px",
    padding: "24px",
    border: "1px solid rgba(148, 163, 184, 0.1)",
  },
  instructionsTitle: {
    fontSize: "15px",
    fontWeight: "600",
    marginBottom: "12px",
  },
  instructionsList: {
    paddingLeft: "20px",
    fontSize: "14px",
    color: "#94a3b8",
    lineHeight: "2",
  },
  code: {
    background: "rgba(94, 234, 212, 0.1)",
    color: "#5eead4",
    padding: "2px 6px",
    borderRadius: "4px",
    fontSize: "13px",
    fontFamily: "monospace",
  },
};
