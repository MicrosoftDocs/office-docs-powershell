---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsServerPatchVersion
schema: 2.0.0
---

# Get-CsServerPatchVersion

## SYNOPSIS
Returns the Skype for Business Server Component Version. This cmdlet was introduced in Skype for Business Server 2015 November 2015 Cumulative Update.

## SYNTAX

```
Get-CsServerPatchVersion [-Report <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns the Skype for Business Server version for each component installed on the server. It replaces the previous methods (Windows Registry and WMI Classes). 
You should have installed at least November 2015 Cumulative Update (6.0.9319.102) for Skype for Business Server 2015.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsServerPatchVersion
```

This example returns the Skype for Business Server version for each component installed on the server.


## PARAMETERS

### -Report
Generates a log file. You should specify the file name in html format.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

