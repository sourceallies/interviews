import subprocess
import sys
import asyncio

from client import list_transitive_dependencies

def run():
    if len(sys.argv) < 2:
        print("Usage: python npm_client.py <package-name>")
    package_name = sys.argv[1]

    dependencies = asyncio.run(list_transitive_dependencies(package_name))
    print(f"Transitive dependencies of: {package_name}:")
    for dep in dependencies:
        print(f"  - {dep}")

if __name__ == "__main__":
    run()
