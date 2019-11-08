---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Remove-TeamChannel

> [!IMPORTANT]
> Modules in the PS INT gallery for Microsoft Teams run on the /beta version in Microsoft Graph and are subject to change. Int modules can be install from here <https://www.poshtestgallery.com/packages/MicrosoftTeams>.  

## SYNOPSIS

Delete a channel.
This will not delete content in associated tabs.

Note: The channel will be "soft deleted", meaning the contents are not permanently deleted for a time. 
So a subsequent call to Add-TeamChannel using the same channel name will fail if enough time has not passed.

## SYNTAX

```
Remove-TeamChannel -GroupId <String> -DisplayName <String> [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### Example 1
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

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
