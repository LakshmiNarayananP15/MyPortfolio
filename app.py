import os
from flask import Flask, render_template

# Create the Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key-change-in-production")

@app.route('/')
def index():
    """Serve the main portfolio page"""
    return render_template('index.html')

if __name__ == '__main__':
    # Run the app on port 5000, binding to all interfaces
    app.run(host='0.0.0.0', port=5000, debug=True)
