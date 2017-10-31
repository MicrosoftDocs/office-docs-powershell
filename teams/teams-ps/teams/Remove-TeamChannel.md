---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
title: Remove-TeamChannel
online version: 
schema: 2.0.0
---

# Remove-TeamChannel

## SYNOPSIS
Note: This cmdlet is currently in Beta.

Delete a channel.
This will not delete content in associated tabs.

## SYNTAX

```
Remove-TeamChannel -GroupId <String> -DisplayName <String>
```

## DESCRIPTION

## EXAMPLES

### --------------------------  Example 1  --------------------------
```
Remove-TeamChannel -GroupId 2f162b0e-36d2-4e15-8ba3-ba229cecdccf -DisplayName "Tech Reads"
```

## PARAMETERS

### -GroupId
GroupId of the team

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -DisplayName
Channel name to be deleted

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

