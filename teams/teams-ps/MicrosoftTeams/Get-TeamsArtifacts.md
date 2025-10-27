---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
title: Get-TeamsArtifacts
author: lutingzhao
ms.author: lutingzhao
ms.date: 10/20/2025
manager: bashe
online version:
schema: 2.0.0
---

# Get-TeamsArtifacts

## SYNOPSIS
The `Get-TeamsArtifacts` is available only to tenant administrators and is designed to export Recordings, Transcripts, Notes and Whiteboard artifacts of Teams Meetings.

## SYNTAX
```
Get-TeamsArtifacts [-OneDrive <String>] [-SharePoint] [-ArtifactType <String>] [-StartTime <String>] [-EndTime <String>]
```

## DESCRIPTION
This cmdlet exports Recordings, Transcripts, Notes and Whiteboard artifacts of Teams Meetings.

## Setup
### Register the app in Azure AD. 
Go to https://entra.microsoft.com. 
Navigate to Identity > Applications > App Registrations. 
Enter a name for the app (e.g., "Microsoft Teams Artifact Export Tool"). 
Choose the appropriate Supported account types (e.g., single tenant). 
Click Register. 
### Grant the necessary permissions to the app. 
Go to the app's API permissions section under Manage. 
Click Add a permission > Microsoft Graph > Application permissions. (Or, Delegated permissions) 
Add the following permissions: 
Files.Read.All 
Sites.Read.All 
User.Read.All 
### Generate a client secret. 
Go to the Certificates & secrets section of the app registration. 
Click New client secret. 
Provide a description and set an expiration period. 
Copy the secret value immediately (it won't be shown again). 

## Before running command
### You first need to set environment variables where the cmdlet will be run. In PowerShell: 
### Option 1: Just for this session. 
```powershell
PS C:\> $env:EXPORT_TOOL.CLIENT_ID = "your-client-id" # from Entra portal Application (client) ID 
PS C:\> $env:EXPORT_TOOL.TENANT_ID = "your-tenant-id" # from home page at https://entra.microsoft.com 
PS C:\> $env:EXPORT_TOOL.CLIENT_SECRET = "your-client-secret" 
```
### Option 2: Permanently for future sessions on the machine. 
```powershell
PS C:\> setx EXPORT_TOOL.CLIENT_ID "your-client-id" 
PS C:\> setx EXPORT_TOOL.TENANT_ID "your-tenant-id" 
PS C:\> setx EXPORT_TOOL.CLIENT_SECRET "your-client-secret" 
```

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-TeamsArtifacts -OneDrive user@contoso.com -StartTime "2025-06-20" -EndTime "2025-06-26"
```

## PARAMETERS
All parameters are optional. If no parameters are specified, artifact metadata is returned for Teams artifacts in all standard OneDrive for Business and SharePoint locations. The actual artifacts themselves can then be downloaded from the URLs in the metadata returned. Output is written to artifacts.json in the current directory.

### -OneDrive
Returns only artifacts that are hosted in the standard locations of that user's OneDrive for Business.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePoint
Returns only the artifacts that are hosted in SharePoint sites (typically from channel meetings).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArtifactType
Filters the results to a single artifact type. It's s Enum containing only three values: RecordingTranscript | Notes | Whiteboard.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: RecordingTranscript | Notes | Whiteboard
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartTime
Omits artifacts that are last modified prior to this date and time.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndTime
Omits artifacts that are last modified after this date and time.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
