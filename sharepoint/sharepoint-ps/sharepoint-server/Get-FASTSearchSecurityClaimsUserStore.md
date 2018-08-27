---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchSecurityClaimsUserStore
---

# Get-FASTSearchSecurityClaimsUserStore

## SYNOPSIS
Get the claims security user store.

## SYNTAX

```
Get-FASTSearchSecurityClaimsUserStore [[-Identity] <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves a specific claims user store.

If the Identity parameter is not specified, the cmdlet gets a list of all claims user stores.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1-----------------
```
PS C:\>Get-FASTSearchSecurityClaimsUserStore -Identity clm
```

This example retrieves the claims user store with the identity "clm".

## PARAMETERS

### -Identity
The identity of a claims user store to display.

If an Identity is not specified, all claims user stores are displayed.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-FASTSearchSecurityClaimsUserStore](Set-FASTSearchSecurityClaimsUserStore.md)

[New-FASTSearchSecurityClaimsUserStore](New-FASTSearchSecurityClaimsUserStore.md)

