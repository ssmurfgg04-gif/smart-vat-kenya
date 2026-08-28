import os
import re

for root, dirs, files in os.walk('src/components/resources'):
    for f in files:
        if f.endswith('.tsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fp:
                content = fp.read()
            
            # Fix multiple "as const as const as const" patterns
            # Pattern: "value" as const as const as const (3+ times)
            content = re.sub(
                r'"([^"]+)" as const as const as const as const as const as const as const',
                r'"\1" as const',
                content
            )
            content = re.sub(
                r'"([^"]+)" as const as const as const as const as const as const',
                r'"\1" as const',
                content
            )
            content = re.sub(
                r'"([^"]+)" as const as const as const as const as const',
                r'"\1" as const',
                content
            )
            content = re.sub(
                r'"([^"]+)" as const as const as const as const',
                r'"\1" as const',
                content
            )
            content = re.sub(
                r'"([^"]+)" as const as const as const',
                r'"\1" as const',
                content
            )
            content = re.sub(
                r'"([^"]+)" as const as const',
                r'"\1" as const',
                content
            )
            
            # Fix FAQPage @type
            content = re.sub(
                r'"@type": "FAQPage",',
                '"@type": "FAQPage" as const,',
                content
            )
            
            with open(path, 'w', encoding='utf-8') as fp:
                fp.write(content)
            
print('Done fixing remaining const assertions')