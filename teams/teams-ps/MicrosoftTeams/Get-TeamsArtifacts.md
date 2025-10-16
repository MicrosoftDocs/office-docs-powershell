---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-TeamsArtifacts
author: lutingzhao
ms.author: lutingzhao
manager: bashe
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