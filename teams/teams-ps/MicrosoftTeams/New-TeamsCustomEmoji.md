---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-teamscustomemoji
schema: 2.0.0
title: New-TeamsCustomEmoji
---

# New-TeamsCustomEmoji

## SYNOPSIS

Uploads custom emojis to a Microsoft Teams tenant.

## SYNTAX

### Path (Default)
```powershell
New-TeamsCustomEmoji -Path <String[]> [-WhatIf] [-Confirm] [<CommonParameters>]
```

### LiteralPath
```powershell
New-TeamsCustomEmoji -LiteralPath <String[]> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The `New-TeamsCustomEmoji` cmdlet uploads one or more PNG, GIF, or JPEG files as tenant custom emojis. Specify file or folder paths directly or provide them through the pipeline. Folders are searched for .png, .gif, .jpg, and .jpeg files without searching subfolders.

This cmdlet is in preview and uses the Microsoft Graph beta API. First connect with `Connect-MicrosoftTeams` using a delegated user session. Application-only authentication, including certificate and managed identity sessions, isn't supported. The cmdlet requests the `TeamworkCustomEmoji.Create` delegated Microsoft Graph permission.

Prepare images before uploading; the cmdlet doesn't resize, compress, or convert them. Each file must be between 1 and 2,999,232 bytes and contain a PNG, GIF, or JPEG image; the format is checked from the file contents, not its extension. For best results, use square images under 256 KB with a transparent background. For animated GIFs, reduce the number of frames to keep the file size small. These recommendations aren't enforced by the cmdlet.

The emoji display name is the file name without its extension. Names must contain 1 to 50 lowercase letters, numbers, hyphens, or underscores. Duplicate names are compared without regard to case or extension. For example, `smile.png` and `smile.gif` are both rejected if they're valid files in the same batch. The same file path supplied more than once is processed only once.

An invocation accepts at most 5,000 distinct paths after folder expansion, including paths that later fail validation. Larger batches are rejected before upload. Use `-WhatIf` to check proposed uploads without creating emojis.

The cmdlet returns a result for each processed item. A batch stops after 40 consecutive qualifying failures, such as permission, service, or network errors. Remaining items are reported as `Skipped`; some uploads may already have completed.

Microsoft Graph requests can be audited using [Microsoft Graph activity logs](https://learn.microsoft.com/en-us/graph/microsoft-graph-activity-logs-overview) when log collection is configured.

## EXAMPLES

### Example 1
```powershell
PS C:\> Connect-MicrosoftTeams
PS C:\> New-TeamsCustomEmoji -Path "C:\Emojis\celebrate.png"
```

Uploads one image with the display name `celebrate`, derived from the file name.

### Example 2
```powershell
PS C:\> New-TeamsCustomEmoji -Path "C:\Emojis" -WhatIf
```

Validates the supported images in the folder and shows the proposed uploads without creating emojis. It doesn't check for existing emojis or permission problems.

### Example 3
```powershell
PS C:\> Import-Csv "C:\Emojis\emojis.csv" | New-TeamsCustomEmoji
```

Uploads the images listed in a CSV file with a `Path` column. Each emoji name is derived from its image file name.

### Example 4
```powershell
PS C:\> Get-ChildItem "C:\Emojis\*.png" | New-TeamsCustomEmoji
```

Uploads PNG files supplied as file objects through the pipeline.

## PARAMETERS

### -Confirm

Prompts for confirmation before each upload.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -LiteralPath

Specifies file or folder paths without expanding wildcard characters.

```yaml
Type: String[]
Parameter Sets: LiteralPath
Aliases: PSPath, LP

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Path

Specifies file or folder paths. Wildcards are expanded using the current PowerShell location.

```yaml
Type: String[]
Parameter Sets: Path
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue, ByPropertyName)
Accept wildcard characters: True
```

### -WhatIf

Shows the proposed uploads without creating emojis. The cmdlet performs local validation but doesn't call Microsoft Graph, so it can't check for existing emojis or permission problems. Invalid items produce results and errors; valid items don't produce result objects.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String[]

You can pipe paths or file objects from `Get-ChildItem` to this cmdlet. Objects with `Path` or `PSPath` properties can also be piped to it.

## OUTPUTS

### Microsoft.Teams.PowerShell.TeamsCmdlets.Model.TeamsCustomEmojiUploadResult

The result includes `DisplayName`, `Path`, `Status`, `CreatedDateTime`, `HttpStatusCode`, `ErrorCode`, `ErrorMessage`, `Attempts`, and `ClientRequestId`.

The status is `Created`, `AlreadyExists`, `Invalid`, `Failed`, or `Skipped`. An existing emoji produces a warning; invalid inputs and failed uploads produce errors.

## NOTES

## RELATED LINKS

[Connect-MicrosoftTeams](Connect-MicrosoftTeams.md)

[Remove-TeamsCustomEmoji](Remove-TeamsCustomEmoji.md)
