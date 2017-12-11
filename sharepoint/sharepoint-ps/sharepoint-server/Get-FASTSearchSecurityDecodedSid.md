---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchSecurityDecodedSid
---

# Get-FASTSearchSecurityDecodedSid

## SYNOPSIS
Gets the user identifier and SID from the encoded security identifier.

## SYNTAX

```
Get-FASTSearchSecurityDecodedSid [-EncodedSID] <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet decodes an encoded security identifier (SID) and returns the user/group identifier (the common name) and Windows SID.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchSecurityDecodedSid -EncodedSID aebaaaaaaaaakiaaaaaccaqaaa
```

This example retrieves the Windows SID and user or group identifier for an encoded security identifier.

## PARAMETERS

### -EncodedSID
The encoded extended security identifier that will be decoded.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 1
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

[Get-FASTSearchSecurityEncodedSid]()

