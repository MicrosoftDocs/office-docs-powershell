---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: New-SPOSdnProvider
schema: 2.0.0
---

# New-SPOSdnProvider

## SYNOPSIS
Adds a new Software-Defined Networking (SDN) provider


## SYNTAX

```powershell
New-SPOSdnProvider [-Identity] <String> [-License] <String> [-Confirm] [-WhatIf] [<CommonParameters>]
```


## DESCRIPTION
This Cmdlet creates a new Software-Defined Networking, and it receives two parameters, the Identity (ID) of the Hive and the License key of the Hive.

## EXAMPLES

### EXAMPLE 1

```powershell
New-SPOSdnProvider -ID "Hive" -License "<Hive license key>"
```

This example creates the Hive for a SDN Provider.


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
PARAMVALUE: String


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

### -License
PARAMVALUE: String


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 1
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


## RELATED LINKS

[Introduction to the SharePoint Online management shell](https://support.office.com/en-us/article/introduction-to-the-sharepoint-online-management-shell-c16941c3-19b4-4710-8056-34c034493429)

[SharePoint Online Management Shell Download](https://www.microsoft.com/en-US/download/details.aspx?id=35588)

[Get-SPOAppErrors](Get-SPOAppErrors.md)


[Remove-SPOSdnProvider](Remove-SPOSdnProvider.md)