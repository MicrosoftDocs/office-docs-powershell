---
external help file: 
applicable: SharePoint Online
title: Remove-SPOPublicCdnOrigin
schema: 2.0.0
---

# Remove-SPOPublicCdnOrigin

## SYNOPSIS
{{Fill in the Synopsis}}


## SYNTAX

```
Remove-SPOPublicCdnOrigin [-Identity] <String> [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}


## EXAMPLES

### -----------------------EXAMPLE-----------------------------
```get
Get-SPOPublicCdnOrigins
Id                                                                       Url
--                                                                       ---
11270051ee79e73829f6e7a3ee5d900d49c4fc5901645c642b799ecb62787a5069ca80fb HTTPS://CONTOSO.SHAREPOINT.COM/SITES/CDN...
Remove-SPOPublicCdnOrigin -Identity 11270051ee79e73829f6e7a3ee5d900d49c4fc5901645c642b799ecb6278
7a5069ca80fb
```

This example returns a list of CDN origins and then removes and origin based on the identity.


## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
{{Fill Identity Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
