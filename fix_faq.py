import os
import re

for root, dirs, files in os.walk('src/components/resources'):
    for f in files:
        if f.endswith('.tsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fp:
                content = fp.read()
            
            # Fix FAQPage schema
            content = re.sub(
                r'"@context": "https://schema.org" as const,\s*"@type": "FAQPage",',
                '"@context": "https://schema.org",\n  "@type": "FAQPage" as const,',
                content
            )
            
            with open(path, 'w', encoding='utf-8') as fp:
                fp.write(content)
            
print('Done fixing FAQPage schemas')