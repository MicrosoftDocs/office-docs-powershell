---
external help file: sharepointserver.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-fastsearchsecurityregexaliaser
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
title: Get-FASTSearchSecurityRegexAliaser
---

# Get-FASTSearchSecurityRegexAliaser

## SYNOPSIS
Gets a regular expression principal aliaser.

## SYNTAX

```
Get-FASTSearchSecurityRegexAliaser [[-Identity] <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves a regular expression aliaser.
A regular expression aliaser maps users/groups from one user store to users/groups in other user stores, based on a regular expression pattern.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (https://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1-----------------
```
Get-FASTSearchSecurityRegexAliaser -Identity regex1
```

This example retrieves a regular expression aliaser with an identity of "regex1".

## PARAMETERS

### -Identity
```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-FASTSearchSecurityRegexAliaser](New-FASTSearchSecurityRegexAliaser.md)

[Set-FASTSearchSecurityRegexAliaser](Set-FASTSearchSecurityRegexAliaser.md)

[New-FASTSearchSecurityRegexAliaserPattern](New-FASTSearchSecurityRegexAliaserPattern.md)

