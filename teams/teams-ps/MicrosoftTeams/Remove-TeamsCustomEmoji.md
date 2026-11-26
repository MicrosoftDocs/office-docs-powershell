---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-teamscustomemoji
schema: 2.0.0
title: Remove-TeamsCustomEmoji
---

# Remove-TeamsCustomEmoji

## SYNOPSIS

Removes all custom emojis from a Microsoft Teams tenant.

## SYNTAX

```powershell
Remove-TeamsCustomEmoji -All [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The `Remove-TeamsCustomEmoji` cmdlet lists the tenant's custom emojis and removes them in a batch. It doesn't support selecting individual emojis. It prompts once for confirmation of the entire batch by default. Use `-WhatIf` to see the proposed deletion without removing emojis.

This cmdlet is in preview and uses the Microsoft Graph beta API. First connect with `Connect-MicrosoftTeams` using a delegated user session. Application-only authentication, including certificate and managed identity sessions, isn't supported. The cmdlet requests the `TeamworkCustomEmoji.Read` and `TeamworkCustomEmoji.Create` delegated Microsoft Graph permissions.

When `-WhatIf` is used, the cmdlet authenticates and retrieves the tenant's custom emojis, then shows the count and proposed removal without displaying emoji names or returning result objects. If no emojis are found, the cmdlet writes a verbose message and returns without prompting or producing output.

If listing stops partway with HTTP 400, the cmdlet warns that the list may be incomplete and, after confirmation, removes only the emojis it retrieved. Others may remain; run the cmdlet again. Other listing failures stop the cmdlet with an error before any emojis are deleted.

The cmdlet returns a result for each processed emoji. A batch can stop after repeated failures; some emojis may already have been removed. Remaining items are reported as `Skipped`, and the cmdlet writes a `CustomEmojiBatchStopped` error.

Microsoft Graph requests can be audited using [Microsoft Graph activity logs](https://learn.microsoft.com/en-us/graph/microsoft-graph-activity-logs-overview) when log collection is configured.

## EXAMPLES

### Example 1
```powershell
PS C:\> Connect-MicrosoftTeams
PS C:\> Remove-TeamsCustomEmoji -All -WhatIf
```

Counts the tenant's custom emojis and shows the proposed batch removal without displaying their names or deleting them.

### Example 2
```powershell
PS C:\> Remove-TeamsCustomEmoji -All
```

After confirmation, attempts to remove the tenant's custom emojis.

## PARAMETERS

### -All

Specifies that all tenant custom emojis are to be removed. This switch is required; individual emoji selection isn't supported. Passing `-All:$false` does nothing.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

Prompts for confirmation before removing the batch. The cmdlet prompts by default; `-Confirm:$false` suppresses the prompt.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

Retrieves the tenant's custom emojis and shows the count and proposed batch removal without displaying emoji names or deleting them. No result objects are returned.

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

### None

## OUTPUTS

### Microsoft.Teams.PowerShell.TeamsCmdlets.Model.TeamsCustomEmojiRemoveResult

The result includes `DisplayName`, `Status`, `HttpStatusCode`, `ErrorCode`, `ErrorMessage`, `Attempts`, and `ClientRequestId`.

The status is `Removed`, `NotFound`, `Failed`, or `Skipped`. An emoji that no longer exists produces a warning; a failed deletion produces an error. A skipped item produces a verbose message.

## NOTES

## RELATED LINKS

[Connect-MicrosoftTeams](Connect-MicrosoftTeams.md)

[New-TeamsCustomEmoji](New-TeamsCustomEmoji.md)
