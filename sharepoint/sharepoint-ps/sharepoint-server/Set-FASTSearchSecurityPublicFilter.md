---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Set-FASTSearchSecurityPublicFilter
---

# Set-FASTSearchSecurityPublicFilter

## SYNOPSIS
Updates the public filter general setting.

## SYNTAX

### ProcessFilter
```
Set-FASTSearchSecurityPublicFilter [[-Filter] <String>] [<CommonParameters>]
```

### ProcessPipelineSetting
```
Set-FASTSearchSecurityPublicFilter [[-GeneralSetting] <PublicFilterSetting>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates the public filter general setting configuration.
The public filter is the search security filter that is used to find documents that all users have access to.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Set-FASTSearchSecurityPublicFilter -Filter docacl:unknown
```

This example updates the search security filter that is used to find documents that all users have access to.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$pubfilter | Set-FASTSearchSecurityPublicFilter
```

This example updates the public filter setting using values from a pipeline GeneralSetting parameter.

In this example, the $pubfilterGeneralSetting was created with this command: $pubfilter = Get-FASTSearchSecurityPublicFilter.

## PARAMETERS

### -Filter
The search security filter that is used to find documents that all users have access to.

```yaml
Type: String
Parameter Sets: ProcessFilter
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GeneralSetting
A PublicFilterSetting whose property values are used for the PublicFilterSetting being updated.

```yaml
Type: PublicFilterSetting
Parameter Sets: ProcessPipelineSetting
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 9999
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-FASTSearchSecurityPublicFilter](Get-FASTSearchSecurityPublicFilter.md)

