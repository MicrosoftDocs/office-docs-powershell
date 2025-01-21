---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-teampicture
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Set-TeamPicture

## SYNOPSIS

Update the team picture.

Note: the command will return immediately, but the Teams application will not reflect the update immediately.
The Teams application may need to be open for up to an hour before changes are reflected.

Note: this cmdlet is not support in special government environments (TeamsGCCH and TeamsDoD) and is currently only supported in our beta release.

## SYNTAX

```
Set-TeamPicture -GroupId <String> -ImagePath <String> [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### Example 1
```
Set-TeamPicture -GroupId 2f162b0e-36d2-4e15-8ba3-ba229cecdccf -ImagePath c:\Image\TeamPicture.png
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

### -ImagePath
File path and image ( .png, .gif, .jpg, or .jpeg)

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
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
