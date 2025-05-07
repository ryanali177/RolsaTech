import sqlite3
import bcrypt

def register_user(username, password, email):
    try:
        # Connect to SQLite database
        conn = sqlite3.connect('rolsa.db')
        cursor = conn.cursor()

        # Hash the password
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        # Insert user into the database
        cursor.execute("INSERT INTO Users (username, password, email) VALUES (?, ?, ?)",
                       (username, hashed_password, email))
        conn.commit()
        print("User  registered successfully!")

    except sqlite3.IntegrityError:
        print("Username or email already exists.")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        conn.close()

def login_user(username, password):
    try:
        # Connect to SQLite database
        conn = sqlite3.connect('rolsa.db')
        cursor = conn.cursor()

        # Fetch user from the database
        cursor.execute("SELECT password FROM Users WHERE username = ?", (username,))
        result = cursor.fetchone()

        if result and bcrypt.checkpw(password.encode('utf-8'), result[0].encode('utf-8')):
            print("Login successful!")
        else:
            print("Invalid username or password.")

    except Exception as e:
        print(f"Error: {e}")
    finally:
        conn.close()

# Example usage
# Register a user
register_user("testuser", "password123", "testuser@example.com")

# Login a user
login_user("testuser", "password123")