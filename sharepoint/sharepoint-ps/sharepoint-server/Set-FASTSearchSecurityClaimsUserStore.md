---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Set-FASTSearchSecurityClaimsUserStore
---

# Set-FASTSearchSecurityClaimsUserStore

## SYNOPSIS
Updates a claims user store.

## SYNTAX

```
Set-FASTSearchSecurityClaimsUserStore [-Identity] <String> [[-SecurityContent] <ClaimsUserStore>]
 [[-Description] <String>] [[-Issuer] <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates the configuration settings for a claims user store.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Set-FASTSearchSecurityClaimsUserStore -Identity clm -Description "Sharepoint Users"
```

This example updates the description of the "clm" claims user store.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchSecurityClaimsUserStore -Identity cl2 | Set-FASTSearchSecurityClaimsUserStore -Issuer Windows
```

This example sets the issuer of the "cl2" claims user store to "Windows".
The Set-FASTSearchSecurityClaimsUserStore cmdlet updates the SecurityContent value piped from the Get-FASTSearchSecurityClaimsUserStore.

## PARAMETERS

### -Identity
The user store identity.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -SecurityContent
A claims user store object whose property values are used to update another claims user store.

```yaml
Type: ClaimsUserStore
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Description
A brief explanation of the user store.

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

### -Issuer
The Microsoft SharePoint Server Security Token Service (STS) claims provider that issued the claims.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 3
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

[Get-FASTSearchSecurityClaimsUserStore]()

[New-FASTSearchSecurityClaimsUserStore]()

