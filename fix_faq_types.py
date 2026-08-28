import os
import re

for root, dirs, files in os.walk('src/components/resources'):
    for f in files:
        if f.endswith('.tsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fp:
                content = fp.read()
            
            # Fix Question and Answer @type fields in FAQ schema
            content = re.sub(
                r'"@type": "Question",',
                '"@type": "Question" as const,',
                content
            )
            content = re.sub(
                r'"@type": "Answer",',
                '"@type": "Answer" as const,',
                content
            )
            
            with open(path, 'w', encoding='utf-8') as fp:
                fp.write(content)
            
print('Done fixing FAQ Question/Answer @type fields')