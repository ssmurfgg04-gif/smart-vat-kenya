import os
import re

for root, dirs, files in os.walk('src/components/resources'):
    for f in files:
        if f.endswith('.tsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fp:
                content = fp.read()
            
            # Fix @context schema - need as const on both @context and @type
            content = re.sub(
                r'"@context": "https://schema.org",\s*"@type": "FAQPage" as const,',
                '"@context": "https://schema.org" as const,\n  "@type": "FAQPage" as const,',
                content
            )
            
            with open(path, 'w', encoding='utf-8') as fp:
                fp.write(content)
            
print('Done fixing @context schemas')