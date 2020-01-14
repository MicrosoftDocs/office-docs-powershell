---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Stop-SPOSiteContentMove
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Stop-SPOSiteContentMove

## SYNOPSIS

Stops a job to move a particular user or group of users to be moved across geo locations relative to the one that executes the command.

## SYNTAX

```powershell
Stop-SPOSiteContentMove [-SourceSiteUrl] <string> [<CommonParameters>]
```

## DESCRIPTION

Use this cmdlet to .

## EXAMPLES

### Example 1

```powershell
Stop-SPOSiteContentMove -SourceSiteUrl https://contoso.sharepoint.com/sites/Research
```

This example stops the move job for the specified site.

## PARAMETERS

### -SourceSiteUrl

{{ Fill SourceSiteUrl Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
