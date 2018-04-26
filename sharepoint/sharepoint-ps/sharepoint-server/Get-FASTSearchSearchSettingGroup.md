---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchSearchSettingGroup
---

# Get-FASTSearchSearchSettingGroup

## SYNOPSIS
Retrieves Microsoft FAST Search Server 2010 for SharePoint search setting groups.

## SYNTAX

```
Get-FASTSearchSearchSettingGroup [-Name <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves one or all FAST Search Server 2010 for SharePoint search setting groups.
When a group name is specified, a single group is retrieved, if it exists.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1-----------------
```
PS C:\>Get-FASTSearchSearchSettingGroup
```

This example retrieves all FAST Search Server 2010 for SharePoint search setting groups.

### ---------------EXAMPLE 2-----------------
```
PS C:\>Get-FASTSearchSearchSettingGroup -Name marketinggroup
```

This example retrieves the "marketinggroup" search setting group.

## PARAMETERS

### -Name
The name of the search setting group to retrieve.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-FASTSearchSearchSettingGroup](New-FASTSearchSearchSettingGroup.md)

[Remove-FASTSearchSearchSettingGroup](Remove-FASTSearchSearchSettingGroup.md)

