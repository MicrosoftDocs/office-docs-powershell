---
external help file: sharepointserver.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/get-fastsearchsecurityencodedsid
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
title: Get-FASTSearchSecurityEncodedSid
---

# Get-FASTSearchSecurityEncodedSid

## SYNOPSIS
Gets the encoded extended security identifier.

## SYNTAX

```
Get-FASTSearchSecurityEncodedSid [[-SID] <String>] [[-User] <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns a Base64 encoded security identifier for a user, group, or Windows SID (Windows security identifier).

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (https://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1-----------------
```
Get-FASTSearchSecurityEncodedSid -SID S-1-5-7
```

This example returns an encoded security identifier and user name for the Windows SID, "5-1-5-7".

### ---------------EXAMPLE 2-----------------
```
Get-FASTSearchSecurityEncodedSid -User users
```

This example returns the encoded security identifier for the Windows built-in "Users" group.

## PARAMETERS

### -SID
The Windows security identifier to encode.

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

### -User
The user or group identifier to encode.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 2
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

[Get-FASTSearchSecurityDecodedSid](Get-FASTSearchSecurityDecodedSid.md)

