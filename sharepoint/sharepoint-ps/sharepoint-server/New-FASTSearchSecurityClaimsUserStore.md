---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: New-FASTSearchSecurityClaimsUserStore
---

# New-FASTSearchSecurityClaimsUserStore

## SYNOPSIS
Creates a FAST Search Server 2010 for SharePoint security user store to provide security for claims content.

## SYNTAX

```
New-FASTSearchSecurityClaimsUserStore [-Identity] <String> [[-Description] <String>] [[-Issuer] <String>]
 [-ObjectToClone <ClaimsUserStore>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet configures extended security for claims content.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
PS C:\>New-FASTSearchSecurityClaimsUserStore -Identity clm
```

This example creates a new security claims user store with a user store Identity of "clm".

This example uses default values for all parameters except the required Identity parameter.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
PS C:\>Get-FASTSearchSecurityClaimsUserStore -Identity clm | New-FASTSearchSecurityClaimsUserStore -Identity cl2
```

This example creates a new security claims user store with an identity of "cl2" using all properties from the claims user store "clm" as a baseline.
The New-FASTSearchSecurityClaimsUserStore cmdlet uses the ObjectToClone value on the pipeline as input to the New cmdlet.

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
Accept pipeline input: False
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

### -ObjectToClone
A claims user store object whose property values are used as a baseline to create another claims user store.

```yaml
Type: ClaimsUserStore
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
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

[Get-FASTSearchSecurityClaimsUserStore](Get-FASTSearchSecurityClaimsUserStore.md)

[Set-FASTSearchSecurityClaimsUserStore](Set-FASTSearchSecurityClaimsUserStore.md)

