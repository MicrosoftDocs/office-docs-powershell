---
external help file: sharepointserver.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-fastsearchsecurityuserstore
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
title: Get-FASTSearchSecurityUserStore
---

# Get-FASTSearchSecurityUserStore

## SYNOPSIS
Gets a user store.

## SYNTAX

```
Get-FASTSearchSecurityUserStore [[-Identity] <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves a security user store. If the Identity parameter is not specified, it gets a list of all user stores.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (https://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1-----------------
```
Get-FASTSearchSecurityUserStore -Identity ln1
```

This example gets the user store with an identity of "ln1".

### ---------------EXAMPLE 2-----------------
```
Get-FASTSearchSecurityUserStore
```

This example gets a list of all user stores.

## PARAMETERS

### -Identity
The identity of the user store to get.
If not specified, the cmdlet gets a list of all user stores.

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

[Remove-FASTSearchSecurityUserStore](Remove-FASTSearchSecurityUserStore.md)

