---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Get-FASTSearchSecurityAliaser
---

# Get-FASTSearchSecurityAliaser

## SYNOPSIS
Gets a security principal aliaser.

## SYNTAX

```
Get-FASTSearchSecurityAliaser [[-Identity] <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet gets a regular expression or XML principal aliaser.
If the Identity parameter is not specified, it gets a list of all aliasers.

A principal aliaser maps users from one user store into users in other user stores.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchSecurityAliaser
```

This example gets a list of all XML and regular expression principal aliasers.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchSecurityAliaser -Identity xmlalias4
```

This example gets the principal aliaser with the ID "xmlalias4".

## PARAMETERS

### -Identity
The identity of a regular expression or XML aliaser to get.

If not specified, the cmdlet gets a list of all aliasers.

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

[Remove-FASTSearchSecurityAliaser](Remove-FASTSearchSecurityAliaser.md)

