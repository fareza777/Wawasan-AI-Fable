#!/usr/bin/env python3
"""Insert ThoughtSpot entry into stacks.ts by replacing placeholder."""
import sys

entry_path = r"C:\Users\FAJAR\AppData\Local\Temp\stacks_entry.txt"
stacks_path = r"E:\agents\hermes-agent\work\wawasan-ai\Wawasan-AI-Fable\src\data\stacks.ts"

with open(entry_path, 'r', encoding='utf-8') as f:
    entry_content = f.read().rstrip('\n').rstrip()

with open(stacks_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the placeholder with actual entry
placeholder = "\n{ENTRY_CONTENT_HERE}\n"
replacement = "\n  " + entry_content + "\n"

if placeholder not in content:
    print("ERROR: Placeholder not found!", file=sys.stderr)
    sys.exit(1)

new_content = content.replace(placeholder, replacement, 1)

with open(stacks_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Entry inserted. Old size: {len(content)} chars, New size: {len(new_content)} chars")
print(f"Line delta: +{new_content.count(chr(10)) - content.count(chr(10))} lines")
