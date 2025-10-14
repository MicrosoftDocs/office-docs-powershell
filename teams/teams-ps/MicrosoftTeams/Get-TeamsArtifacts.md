---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-TeamsArtifacts
author: lutingzhao
ms.author: lutingzhao
manager: bashe
online version:
schema: 2.0.0
---

# Get-TeamsArtifacts

## SYNOPSIS
The `Get-TeamsArtifacts` is available only to tenant administrators and is designed to export Recordings, Transcripts, Notes and Whiteboard artifacts of Teams Meetings.

## SYNTAX
```
Get-TeamsArtifacts -OneDrive <String> -SharePoint -ArtifactType <String> -StartTime <String> -EndTime <String>
```

## DESCRIPTION
This cmdlet exports Recordings, Transcripts, Notes and Whiteboard artifacts of Teams Meetings.

## EXAMPLES

### Example 1
```
Get-TeamsArtifacts -OneDrive user@contoso.com -StartTime "2025-06-20" -EndTime "2025-06-26"
```
```
[
  {
    "name" : "TestTranscript-20250703_152206-Meeting Recording.mp4"
    "mime-type" : "video/mp4"
    "downloadUrl" : "https://m365x63647914-my.sharepoint.com/personal/alexw_m365x63647914_onmicrosoft_com/_layouts/15/download.aspx?UniqueId=1b07d398-c1aa-4892-bf5b-ed4fa14f3fa0&Translate=false&tempauth=v1.eyJzaXRlaWQiOiI1Y2JkMmE5My03ZGYzLTQ0NjAtYTdjOC1hZWVmMDczMWM4MGEiLCJhcHBfZGlzcGxheW5hbWUiOiJNaWNyb3NvZnQgVGVhbXMgQXJ0aWZhY3QgRXhwb3J0IFRvb2wiLCJuYW1laWQiOiIwZDQwNGYyYi1iMDJiLTRjYWUtYmZjMy00N2QxZTg2MDdlMjZAZTM1MGExN2MtNjhiZC00YWZhLTgzODAtODZhZjZlNzE3YWQ3IiwiYXVkIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL20zNjV4NjM2NDc5MTQtbXkuc2hhcmVwb2ludC5jb21AZTM1MGExN2MtNjhiZC00YWZhLTgzODAtODZhZjZlNzE3YWQ3IiwiZXhwIjoiMTc1MzQzMjEwNiJ9.CkAKDGVudHJhX2NsYWltcxIwQ09QaGpNUUdFQUFhRmpWdWRHRTJTa1kyVTFWNWNqZzFSVFZZYTJGT1FVRXFBQT09CjIKCmFjdG9yYXBwaWQSJDAwMDAwMDAzLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMAoKCgRzbmlkEgI2NBILCLCwmYfc1aU-EAUaDTQwLjEyNi4zNS4xNTMqLEZPNlQxczE1cVV6czVOblV0dTNMTG1FK21uZGtDUlF5QjY1M0c0b2VkMDg9MKwBOAFCEKG1KojXQACQmW4kof7b_W9KEGhhc2hlZHByb29mdG9rZW56ATG6ASxhbGxzaXRlcy5yZWFkIGFsbGZpbGVzLnJlYWQgYWxscHJvZmlsZXMucmVhZMgBAQ.0jcjbfvGoDA2dmMq76pQ-eQ4j3xnsqqpQylFszuWB5M&ApiVersion=2.0"
    "lastModifiedDateTime" : "2025-06-23T07:23:40Z"
  },
  {
    "name" : "series test111_6-27-2025.loop"
    "mime-type" : "application/octet-stream"
    "downloadUrl" : "https://m365x63647914-my.sharepoint.com/personal/kennytestaccount_m365x63647914_onmicrosoft_com/_layouts/15/download.aspx?UniqueId=8d4545b6-3327-4d65-bb05-de02fbbce977&Translate=false&tempauth=v1.eyJzaXRlaWQiOiI4ZjFmNDc5Yy1jYzNlLTRhN2UtOTgxNC03MjE4ZmRmZDUwMGEiLCJhcHBfZGlzcGxheW5hbWUiOiJNaWNyb3NvZnQgVGVhbXMgQXJ0aWZhY3QgRXhwb3J0IFRvb2wiLCJuYW1laWQiOiIwZDQwNGYyYi1iMDJiLTRjYWUtYmZjMy00N2QxZTg2MDdlMjZAZTM1MGExN2MtNjhiZC00YWZhLTgzODAtODZhZjZlNzE3YWQ3IiwiYXVkIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL20zNjV4NjM2NDc5MTQtbXkuc2hhcmVwb2ludC5jb21AZTM1MGExN2MtNjhiZC00YWZhLTgzODAtODZhZjZlNzE3YWQ3IiwiZXhwIjoiMTc1MzQzMjEyMCJ9.CkAKDGVudHJhX2NsYWltcxIwQ09QaGpNUUdFQUFhRmpWdWRHRTJTa1kyVTFWNWNqZzFSVFZZYTJGT1FVRXFBQT09CjIKCmFjdG9yYXBwaWQSJDAwMDAwMDAzLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMAoKCgRzbmlkEgI2NBILCMLEj5Pd1aU-EAUaDTQwLjEyNi4zNS4xNTMqLEo1RVZyMnNLVmIrYUZMdFRmalJ3cjJyYlJBUys1dmZoUHM2TWV2VjdTTkk9MLcBOAFCEKG1KoxuMACQmW4kWe_aSj1KEGhhc2hlZHByb29mdG9rZW56ATG6ASxhbGxzaXRlcy5yZWFkIGFsbGZpbGVzLnJlYWQgYWxscHJvZmlsZXMucmVhZMgBAQ.D9NLUkZMo9v8-cJ3GvYeTfSjCs8W7xZ-V2UQ0Q375JE&ApiVersion=2.0"
    "lastModifiedDateTime" : "2025-06-27T07:20:19Z"
  },
  {
    "name" : "Call with temp-mcps12 and 2 others-20250623_150419-Meeting Transcript.mp4"
    "mime-type" : "video/mp4"
    "downloadUrl" : "https://m365x63647914-my.sharepoint.com/personal/kennytestaccount_m365x63647914_onmicrosoft_com/_layouts/15/download.aspx?UniqueId=b3758571-808a-4f34-8f61-7cef6d8c40b2&Translate=false&tempauth=v1.eyJzaXRlaWQiOiI4ZjFmNDc5Yy1jYzNlLTRhN2UtOTgxNC03MjE4ZmRmZDUwMGEiLCJhcHBfZGlzcGxheW5hbWUiOiJNaWNyb3NvZnQgVGVhbXMgQXJ0aWZhY3QgRXhwb3J0IFRvb2wiLCJuYW1laWQiOiIwZDQwNGYyYi1iMDJiLTRjYWUtYmZjMy00N2QxZTg2MDdlMjZAZTM1MGExN2MtNjhiZC00YWZhLTgzODAtODZhZjZlNzE3YWQ3IiwiYXVkIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL20zNjV4NjM2NDc5MTQtbXkuc2hhcmVwb2ludC5jb21AZTM1MGExN2MtNjhiZC00YWZhLTgzODAtODZhZjZlNzE3YWQ3IiwiZXhwIjoiMTc1MzQzMjEyMSJ9.CkAKDGVudHJhX2NsYWltcxIwQ09QaGpNUUdFQUFhRmpWdWRHRTJTa1kyVTFWNWNqZzFSVFZZYTJGT1FVRXFBQT09CjIKCmFjdG9yYXBwaWQSJDAwMDAwMDAzLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMAoKCgRzbmlkEgI2NBILCKSbyZrd1aU-EAUaDTQwLjEyNi4zNS4xNTMqLEs3NnkvRU5QYXI5Uy9jbWQwbzJad0hCSUdKWHUrWW9RVzJRWXlnbjdWbDg9MLcBOAFCEKG1KoybIACQmW4p7LyOIeVKEGhhc2hlZHByb29mdG9rZW56ATG6ASxhbGxzaXRlcy5yZWFkIGFsbGZpbGVzLnJlYWQgYWxscHJvZmlsZXMucmVhZMgBAQ.zRfQPVMNNT5d8zOV3rt86ZNZaRZfZ1GeJ0OQ0IlOHv4&ApiVersion=2.0"
    "lastModifiedDateTime" : "2025-06-23T07:06:24Z"
  },
  {
    "name" : "Break Out Room mcps1.whiteboard"
    "mime-type" : "application/octet-stream"
    "downloadUrl" : "https://m365x63647914-my.sharepoint.com/personal/temp-mcps1_m365x63647914_onmicrosoft_com/_layouts/15/download.aspx?UniqueId=ff2cabd8-ef38-45f8-a7c5-a6d2766dfb69&Translate=false&tempauth=v1.eyJzaXRlaWQiOiJjMWMzZmI2ZC0yODBjLTQxMTktYmFkZC0yODU2MGUwZGFhMDkiLCJhcHBfZGlzcGxheW5hbWUiOiJNaWNyb3NvZnQgVGVhbXMgQXJ0aWZhY3QgRXhwb3J0IFRvb2wiLCJuYW1laWQiOiIwZDQwNGYyYi1iMDJiLTRjYWUtYmZjMy00N2QxZTg2MDdlMjZAZTM1MGExN2MtNjhiZC00YWZhLTgzODAtODZhZjZlNzE3YWQ3IiwiYXVkIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL20zNjV4NjM2NDc5MTQtbXkuc2hhcmVwb2ludC5jb21AZTM1MGExN2MtNjhiZC00YWZhLTgzODAtODZhZjZlNzE3YWQ3IiwiZXhwIjoiMTc1MzQzMjE0NCJ9.CkAKDGVudHJhX2NsYWltcxIwQ09QaGpNUUdFQUFhRmpWdWRHRTJTa1kyVTFWNWNqZzFSVFZZYTJGT1FVRXFBQT09CjIKCmFjdG9yYXBwaWQSJDAwMDAwMDAzLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMAoKCgRzbmlkEgI2NBILCLy87vXe1aU-EAUaDTQwLjEyNi4zNS4xNTMqLHM2Y0hwVUF3dWhTVWRvTGZ2YzdRaEJyKyttenMwNVpIR29UbnJveWZwWE09MLEBOAFCEKG1KpI7MACQmW4uX9jmzdhKEGhhc2hlZHByb29mdG9rZW56ATG6ASxhbGxzaXRlcy5yZWFkIGFsbGZpbGVzLnJlYWQgYWxscHJvZmlsZXMucmVhZMgBAQ.rNC9OQ6ltskGZs6EjwiofuP30vlFrJKJj6e6cYFDGGE&ApiVersion=2.0"
    "lastModifiedDateTime" : "2025-06-23T03:41:53Z"
  }
]
```

## PARAMETERS
All parameters are optional. If no parameters are specified, artifact metadata is returned for Teams artifacts in all standard OneDrive for Business and SharePoint locations. The actual artifacts themselves can then be downloaded from the URLs in the metadata returned. Output is written to artifacts.json in the current directory.
### -OneDrive
Returns only artifacts that are hosted in the standard locations of that user's OneDrive for Business.

### -SharePoint
Returns only the artifacts that are hosted in SharePoint sites (typically from channel meetings).

### -ArtifactType
Filters the results to a single artifact type. It's s Enum containing only three values: RecordingTranscript | Notes | Whiteboard.

### -StartTime
Omits artifacts that are last modified prior to this date and time.

### -EndTime
Omits artifacts that are last modified after this date and time.

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS